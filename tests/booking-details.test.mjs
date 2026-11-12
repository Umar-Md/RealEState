import test from 'node:test';
import assert from 'node:assert/strict';
import { createCalendarFile, normalizeBooking, safeBookingUrl } from '../src/lib/booking-details.mjs';

const origin = 'https://app.cal.com';
const event = {
  uid: 'test-booking', title: 'Test meeting',
  startTime: '2026-12-01T09:30:00.000Z', endTime: '2026-12-01T10:00:00.000Z',
  status: 'ACCEPTED', paymentRequired: false,
};

test('requires an actual booking uid; dry runs and empty events cannot become success', () => {
  for (const value of [null, {}, { ...event, uid: undefined }, { ...event, uid: '' }]) {
    assert.equal(normalizeBooking(value, origin), null);
  }
});

test('uses returned times, duration and deduplicated guest emails', () => {
  const booking = normalizeBooking({ ...event, attendees: [{ email: 'guest@example.test' }, { email: 'guest@example.test' }, {}] }, origin);
  assert.equal(booking.duration, 30);
  assert.equal(booking.confirmed, true);
  assert.deepEqual(booking.emails, ['guest@example.test']);
  assert.equal(booking.rescheduleUrl, null);
});

test('pending, unpaid and unknown statuses are not shown as confirmed', () => {
  for (const fields of [{ status: 'PENDING' }, { paymentRequired: true }, { status: undefined }]) {
    const booking = normalizeBooking({ ...event, ...fields }, origin);
    assert.equal(booking.confirmed, false);
    assert.equal(createCalendarFile(booking), null);
  }
  assert.equal(normalizeBooking({ ...event, status: 'CANCELLED' }, origin), null);
});

test('only accepts returned reschedule links on the configured Cal origin', () => {
  assert.equal(safeBookingUrl('/reschedule/test-booking', origin), `${origin}/reschedule/test-booking`);
  for (const value of ['javascript:alert(1)', 'https://attacker.test/reschedule/x', '//attacker.test', null]) {
    assert.equal(safeBookingUrl(value, origin), null);
  }
});

test('invalid and reversed timestamps never produce calendar files', () => {
  for (const fields of [{ startTime: 'invalid' }, { endTime: undefined }, { endTime: '2026-12-01T08:00:00Z' }, { isRecurring: true }]) {
    assert.equal(createCalendarFile(normalizeBooking({ ...event, ...fields }, origin)), null);
  }
});

test('calendar export preserves UTC times, escapes content and folds UTF-8 lines', () => {
  const booking = normalizeBooking({ ...event, title: 'A, B; C\n' + '\u00e9'.repeat(100), videoCallUrl: 'https://teams.microsoft.com/meet/test' }, origin);
  const ics = createCalendarFile(booking, new Date('2026-11-01T00:00:00Z'));
  assert.match(ics, /DTSTART:20261201T093000Z/);
  assert.match(ics, /DTEND:20261201T100000Z/);
  assert.match(ics, /SUMMARY:A\\, B\\; C\\n/);
  assert.match(ics, /LOCATION:https:\/\/teams.microsoft.com\/meet\/test/);
  assert.ok(ics.split('\r\n').every((line) => Buffer.byteLength(line, 'utf8') <= 75));
  assert.match(ics, /END:VCALENDAR\r\n$/);
});
