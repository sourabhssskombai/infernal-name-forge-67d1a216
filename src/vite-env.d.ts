
/// <reference types="vite/client" />

// Fix: adsbygoogle is an array of any, per Google's API (see https://developers.google.com/publisher-tag/reference)
interface Window {
  adsbygoogle?: any[];
}
