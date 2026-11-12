const text = (value) => typeof value === 'string' ? value.trim() : '';
const validDate = (value) => {
  const date = text(value) ? new Date(value) : null;
  return date && Number.isFinite(date.getTime()) ? date.toISOString() : null;
};

export function safeBookingUrl(value, origin) {
  if (!text(value)) return null;
  try {
    const url = new URL(value, origin);
    return url.protocol === 'https:' && url.origin === origin ? url.href : null;
  } catch {
    return null;
  }
}

// Normalize only fields returned by the official success event. Never read
// confirmation data from query parameters, localStorage, or form guesses.
export function normalizeBooking(data, origin) {
  if (!data || typeof data !== 'object') return null;
  const uid = text(data.uid);
  if (!uid) return null;
  const startTime = validDate(data.startTime);
  const endTime = validDate(data.endTime);
  const duration = startTime && endTime
    ? (new Date(endTime).getTime() - new Date(startTime).getTime()) / 60000
    : null;
  const status = text(data.status).toLowerCase();
  if (['cancelled', 'canceled', 'rejected'].includes(status)) return null;
  const emails = [...new Set(
    (Array.isArray(data.attendees) ? data.attendees : [])
      .map((attendee) => text(attendee?.email)).filter(Boolean)
  )];
  const rescheduleUrl = safeBookingUrl(data.rescheduleUrl, origin);
  return {
    uid,
    calendarDomain: new URL(origin).hostname,
    title: text(data.title),
    startTime,
    endTime,
    duration: duration > 0 ? duration : null,
    status,
    paymentRequired: data.paymentRequired === true,
    confirmed: status === 'accepted' && data.paymentRequired !== true,
    emails,
    rescheduleUrl,
    videoCallUrl: safeMeetingUrl(data.videoCallUrl),
    isRecurring: data.isRecurring === true,
  };
}

function safeMeetingUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

function escapeIcs(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/\r\n|\r|\n/g, '\\n')
    .replace(/;/g, '\\;').replace(/,/g, '\\,');
}

const icsDate = (value) => new Date(value).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');

// UTF-8 line folding required by RFC 5545 (75 octets per content line).
function foldIcsLine(line) {
  const encoder = new TextEncoder();
  let result = '';
  let size = 0;
  for (const character of line) {
    const bytes = encoder.encode(character).length;
    if (size + bytes > 75) {
      result += '\r\n ';
      size = 1;
    }
    result += character;
    size += bytes;
  }
  return result;
}

export function createCalendarFile(booking, now = new Date()) {
  if (!booking.confirmed || !booking.startTime || !booking.endTime || !booking.duration || booking.isRecurring) return null;
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SSP//Meeting Booking//EN',
    'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
    `UID:${escapeIcs(booking.uid)}@${escapeIcs(booking.calendarDomain)}`,
    `DTSTAMP:${icsDate(now)}`,
    `DTSTART:${icsDate(booking.startTime)}`,
    `DTEND:${icsDate(booking.endTime)}`,
    `SUMMARY:${escapeIcs(booking.title || 'Meeting')}`,
    ...(booking.videoCallUrl ? [`URL:${escapeIcs(booking.videoCallUrl)}`, `LOCATION:${escapeIcs(booking.videoCallUrl)}`] : []),
    'END:VEVENT', 'END:VCALENDAR', '',
  ].map(foldIcsLine).join('\r\n');
}
