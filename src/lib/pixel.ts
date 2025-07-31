// lib/pixel.ts
export const pageview = (url: string) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', 'PageView', {}, { eventID: url });
  }
};

export const track = (name: string, options = {}) => {
  if (typeof window.fbq !== 'undefined') {
    window.fbq('track', name, options);
  }
};