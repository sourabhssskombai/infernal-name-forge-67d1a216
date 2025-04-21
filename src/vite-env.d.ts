
/// <reference types="vite/client" />

// Add this block to let TypeScript know about window.adsbygoogle
interface Window {
  adsbygoogle?: { push: ({}: any) => void; loaded?: boolean }[];
}
