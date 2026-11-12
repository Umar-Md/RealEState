'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, CalendarDays, Check, Clock3, ExternalLink, LoaderCircle, Mail, RefreshCw } from 'lucide-react';
import { CAL_BOOKING_URL, CAL_IS_CONFIGURED, CAL_EVENT, CAL_NAMESPACE, CAL_ORIGIN, loadCalEmbed } from '../../lib/cal-embed';
import { createCalendarFile, normalizeBooking } from '../../lib/booking-details.mjs';

function BookingConfirmation({ booking, onShowProvider }) {
  const heading = useRef(null);
  useEffect(() => { heading.current?.focus(); }, [booking]);
  const date = booking.startTime ? new Date(booking.startTime) : null;
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const calendarAvailable = booking.confirmed && booking.startTime && booking.endTime && booking.duration && !booking.isRecurring;

  function downloadCalendar() {
    const content = createCalendarFile(booking);
    if (!content) return;
    const url = URL.createObjectURL(new Blob([content], { type: 'text/calendar;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'meeting.ics';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  const rows = [
    ['Meeting', booking.title],
    ['Date', date ? new Intl.DateTimeFormat(undefined, { dateStyle: 'full' }).format(date) : null],
    ['Time', date ? `${new Intl.DateTimeFormat(undefined, { timeStyle: 'short' }).format(date)}${booking.endTime ? ` – ${new Intl.DateTimeFormat(undefined, { timeStyle: 'short' }).format(new Date(booking.endTime))}` : ''}` : null],
    ['Time zone', date ? timeZone : null],
    ['Duration', booking.duration ? `${booking.duration} minutes` : null],
    ['Guests', booking.emails.length ? booking.emails.join(', ') : null],
    ['Booking reference', booking.uid],
  ].filter(([, value]) => value);

  return (
    <section aria-labelledby="booking-result" className="mx-auto max-w-2xl rounded-3xl border border-ssp-green/10 bg-white p-6 shadow-sm motion-safe:transition-opacity sm:p-10">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ssp-green/10 text-ssp-green">
        {booking.confirmed ? <Check size={30} aria-hidden="true" /> : <Clock3 size={28} aria-hidden="true" />}
      </div>
      <h2 id="booking-result" ref={heading} tabIndex={-1} className="mt-6 text-center font-display text-3xl leading-tight text-ssp-dark outline-none sm:text-4xl">
        {booking.confirmed ? 'Your meeting is confirmed' : booking.paymentRequired ? 'Complete your booking payment' : 'Your booking request has been received'}
      </h2>
      <p className="mt-4 text-center text-sm leading-7 text-gray-600" role="status">
        {booking.confirmed ? 'An email has been sent with the full booking details!' : booking.paymentRequired ? 'Continue below to complete any payment required by the booking service.' : 'This booking is awaiting confirmation. Please check your email for updates.'}
      </p>
      <dl className="mt-8 divide-y divide-ssp-green/10 border-y border-ssp-green/10">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-2 py-4 text-sm sm:grid-cols-[125px_1fr] sm:gap-5">
            <dt className="font-semibold text-ssp-green">{label}</dt>
            <dd className="min-w-0 break-words leading-6 text-gray-600">{value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        {calendarAvailable && <button type="button" onClick={downloadCalendar} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ssp-green px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-ssp-green/90"><CalendarDays size={17} aria-hidden="true" />Add to Calendar</button>}
        {booking.rescheduleUrl && <a href={booking.rescheduleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ssp-green/20 px-5 py-3 text-sm font-bold text-ssp-green hover:bg-ssp-cream">Reschedule<ArrowUpRight size={17} aria-hidden="true" /></a>}
        {booking.confirmed && booking.videoCallUrl && <a href={booking.videoCallUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ssp-green/20 px-5 py-3 text-sm font-bold text-ssp-green hover:bg-ssp-cream">Meeting link<ExternalLink size={17} aria-hidden="true" /></a>}
        <button type="button" onClick={onShowProvider} className="inline-flex min-h-12 items-center justify-center rounded-full border border-ssp-green/20 px-5 py-3 text-sm font-bold text-ssp-green hover:bg-ssp-cream">View booking details</button>
      </div>
      <p className="mt-6 text-xs leading-6 text-gray-500">Use the links in your booking email to reschedule or cancel your meeting.</p>
    </section>
  );
}

export default function CalBooking() {
  const container = useRef(null);
  const [state, setState] = useState('loading');
  const [attempt, setAttempt] = useState(0);
  const [booking, setBooking] = useState(null);
  const [showProvider, setShowProvider] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    if (!CAL_IS_CONFIGURED) return;
    const element = container.current;
    let disposed = false;
    let api;
    let subscriptions = [];
    const timer = window.setTimeout(() => {
      if (!disposed) setState((current) => current === 'loading' ? 'slow' : current);
    }, 30000);

    function ready() {
      if (disposed) return;
      window.clearTimeout(timer);
      setState('ready');
    }
    function failed() {
      if (disposed) return;
      window.clearTimeout(timer);
      setState('error');
    }
    function success(event) {
      if (disposed || event.detail?.namespace !== CAL_NAMESPACE) return;
      const details = normalizeBooking(event.detail.data, CAL_ORIGIN);
      if (!details) return; // Dry-run and incomplete payloads never show success.
      ready();
      setNotice('');
      setBooking(details);
      setShowProvider(!details.confirmed);
    }

    loadCalEmbed().then((cal) => {
      if (disposed) return;
      api = cal;
      subscriptions = [
        ['linkReady', ready],
        ['bookerReady', ready],
        ['linkFailed', failed],
        ['bookingSuccessfulV2', success],
        ['rescheduleBookingSuccessfulV2', success],
        ['bookingCancelled', () => {
          if (disposed) return;
          setBooking(null);
          setShowProvider(true);
          setNotice('This booking has been cancelled.');
        }],
      ];
      subscriptions.forEach(([action, callback]) => api('on', { action, callback }));
      api('ui', { hideEventTypeDetails: true, showTimezoneWhenEventDetailsHidden: true });
      api('inline', {
        elementOrSelector: element,
        calLink: CAL_EVENT,
        config: { layout: 'month_view', theme: 'light' },
      });
    }).catch(failed);

    return () => {
      disposed = true;
      window.clearTimeout(timer);
      subscriptions.forEach(([action, callback]) => api('off', { action, callback }));
      // The SDK is retained; only this mount's inline calendar is removed.
      element.replaceChildren();
    };
  }, [attempt]);

  if (!CAL_IS_CONFIGURED) {
    return (
      <section aria-labelledby="scheduling-unavailable" className="flex min-h-[360px] flex-col items-center justify-center rounded-3xl border border-ssp-green/10 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
        <CalendarDays size={34} className="text-ssp-gold" aria-hidden="true" />
        <h2 id="scheduling-unavailable" className="mt-6 font-display text-3xl text-ssp-dark">Online scheduling is coming soon</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">Please contact Swayam Sampada to discuss your requirements with Satish Reddy.</p>
        <Link href="/contact" className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-ssp-green px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-ssp-green/90">Contact our team</Link>
      </section>
    );
  }

  return (
    <div className="min-w-0">
      {notice && <p role="status" className="mb-6 rounded-xl border border-ssp-green/15 bg-white p-4 text-sm text-ssp-green">{notice}</p>}
      {booking && <div className="mb-8"><BookingConfirmation booking={booking} onShowProvider={() => setShowProvider((value) => !value)} /></div>}
      <div className={booking && !showProvider ? 'hidden' : 'min-w-0'}>
        {state === 'loading' && <div role="status" className="mb-5 flex items-center justify-center gap-3 py-5 text-sm text-gray-600"><LoaderCircle className="motion-safe:animate-spin" size={20} aria-hidden="true" />Loading available dates and times…</div>}
        {(state === 'error' || state === 'slow') && (
          <div role="status" className="mb-5 rounded-2xl border border-ssp-gold/40 bg-white p-6 text-center">
            <h2 className="font-display text-2xl text-ssp-dark">{state === 'error' ? 'The booking calendar could not load' : 'The calendar is taking longer than expected'}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">You can retry or open the booking page directly.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <button type="button" onClick={() => { setState('loading'); setAttempt((value) => value + 1); }} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ssp-green px-5 text-sm font-bold text-white hover:bg-ssp-green/90"><RefreshCw size={16} aria-hidden="true" />Retry calendar</button>
              <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-ssp-green underline underline-offset-4">Open booking page<ExternalLink size={16} aria-hidden="true" /></a>
            </div>
          </div>
        )}
        <div aria-label="Meeting booking calendar" aria-busy={state === 'loading'} className="min-w-0 overflow-hidden rounded-3xl border border-ssp-green/10 bg-white shadow-sm">
          <div ref={container} className="min-h-[660px] w-full min-w-0 overflow-x-hidden [&_iframe]:max-w-full" />
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center justify-between gap-3 px-2 text-center text-xs leading-6 text-gray-500 sm:flex-row sm:text-left">
        <span className="inline-flex items-center gap-2"><Mail size={15} aria-hidden="true" />Booking invitations and updates are sent by Cal.com.</span>
        <a href={CAL_BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-ssp-green underline underline-offset-4">Open in a new tab<ExternalLink size={14} aria-hidden="true" /></a>
      </div>
      <noscript><p className="mt-5 text-sm text-ssp-green">Enable JavaScript to book here, or <a href={CAL_BOOKING_URL} className="underline">open the booking page</a>.</p></noscript>
    </div>
  );
}
