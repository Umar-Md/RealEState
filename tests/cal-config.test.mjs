import test from 'node:test';
import assert from 'node:assert/strict';
import { getCalConfig } from '../src/lib/cal-config.mjs';

test('does not embed any account until an event is supplied', () => {
  const config = getCalConfig();
  assert.equal(config.configured, false);
  assert.equal(config.event, '');
  assert.equal(config.bookingUrl, null);
});

test('uses the supplied account event and origin without guessing a username', () => {
  const config = getCalConfig({ event: '/test-owner/test-event/' });
  assert.equal(config.configured, true);
  assert.equal(config.bookingUrl, 'https://app.cal.com/test-owner/test-event?layout=mobile');
  const custom = getCalConfig({ event: 'team/test-team/test-event', origin: 'https://meet.example.test/' });
  assert.equal(custom.configured, true);
  assert.equal(custom.origin, 'https://meet.example.test');
});

test('malformed or unsafe configuration leaves scheduling inactive', () => {
  for (const event of ['username', 'https://cal.com/owner/event', 'owner/event?email=example', 'owner/../event']) {
    assert.equal(getCalConfig({ event }).configured, false);
  }
  for (const origin of ['http://cal.com', 'javascript:alert(1)', 'https://user:password@cal.com', 'https://cal.com/path', 'https://cal.com?x=1']) {
    assert.equal(getCalConfig({ origin, event: 'test-owner/test-event' }).configured, false);
  }
});
