import { getCalConfig } from './cal-config.mjs';

const config = getCalConfig({
  origin: process.env.NEXT_PUBLIC_CAL_ORIGIN || 'https://app.cal.com',
  event: process.env.NEXT_PUBLIC_CAL_EVENT || 'umar-mohammad/mohammad-umar',
});
export const CAL_ORIGIN = config.origin;
export const CAL_EVENT = config.event;
export const CAL_IS_CONFIGURED = config.configured;
export const CAL_NAMESPACE = 'ssp-meetings';
export const CAL_BOOKING_URL = config.bookingUrl;

let sdkPromise;

// Cal.com's official queued bootstrap, shared across client-side navigation.
// https://github.com/calcom/cal.com/tree/main/packages/embeds/embed-snippet
function prepareCalQueue() {
  if (window.Cal) return;
  const cal = function (...args) {
    if (args[0] === 'init' && typeof args[1] === 'string') {
      const namespace = args[1];
      if (!cal.ns[namespace]) {
        const api = (...instruction) => api.q.push(instruction);
        api.q = [];
        cal.ns[namespace] = api;
      }
      cal.ns[namespace].q.push(args);
      cal.q.push(['initNamespace', namespace]);
    } else {
      cal.q.push(args);
    }
  };
  cal.q = [];
  cal.ns = {};
  cal.loaded = true;
  window.Cal = cal;
}

export function loadCalEmbed() {
  if (!CAL_IS_CONFIGURED) return Promise.reject(new Error('An SSP Cal.com event has not been configured.'));
  if (sdkPromise) return sdkPromise;
  prepareCalQueue();
  if (!window.Cal.ns?.[CAL_NAMESPACE]) {
    window.Cal('init', CAL_NAMESPACE, { origin: CAL_ORIGIN });
  }
  if (window.Cal.ns?.[CAL_NAMESPACE]?.instance) {
    return Promise.resolve(window.Cal.ns[CAL_NAMESPACE]);
  }

  sdkPromise = new Promise((resolve, reject) => {
    const scriptId = 'ssp-cal-embed-sdk';
    let script = document.getElementById(scriptId);
    const onLoad = () => {
      removeListeners();
      const api = window.Cal.ns?.[CAL_NAMESPACE];
      if (!api?.instance) {
        sdkPromise = undefined;
        reject(new Error('The booking calendar could not initialize.'));
        return;
      }
      resolve(api);
    };
    const onError = () => {
      removeListeners();
      script.remove();
      sdkPromise = undefined;
      reject(new Error('The booking service could not be reached.'));
    };
    const removeListeners = () => {
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
    };
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = `${CAL_ORIGIN}/embed/embed.js`;
      script.async = true;
      script.addEventListener('load', onLoad);
      script.addEventListener('error', onError);
      document.head.appendChild(script);
    } else {
      script.addEventListener('load', onLoad);
      script.addEventListener('error', onError);
    }
  });
  return sdkPromise;
}
