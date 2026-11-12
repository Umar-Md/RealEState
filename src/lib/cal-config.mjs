export function getCalConfig({ origin = 'https://app.cal.com', event = '' } = {}) {
  let calOrigin = '';
  try {
    const url = new URL(origin);
    if (url.protocol === 'https:' && !url.username && !url.password && !url.search && !url.hash && (url.pathname === '/' || !url.pathname)) {
      calOrigin = url.origin;
    }
  } catch {
    // Missing or invalid settings leave scheduling inactive.
  }
  const calEvent = typeof event === 'string' ? event.trim().replace(/^\/+|\/+$/g, '') : '';
  const parts = calEvent.split('/');
  const validEvent = parts.length >= 2 && parts.length <= 3 && parts.every((part) => /^[a-zA-Z0-9_-]+$/.test(part));
  const configured = Boolean(calOrigin && validEvent);
  return {
    origin: calOrigin,
    event: validEvent ? calEvent : '',
    configured,
    bookingUrl: configured ? `${calOrigin}/${calEvent}?layout=mobile` : null,
  };
}
