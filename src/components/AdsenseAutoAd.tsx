
import { useEffect, useRef } from "react";

// Helper to wait for the ins element to have clientWidth > 0
function waitForAdSlotVisible(insRef: HTMLDivElement, callback: () => void, attempts = 0) {
  if (insRef && insRef.clientWidth > 0) {
    callback();
  } else if (attempts < 10) {
    // Try a few times (up to ~500ms total)
    setTimeout(() => waitForAdSlotVisible(insRef, callback, attempts + 1), 50);
  } else {
    // Give up quietly.
    // You can log if needed: console.warn("AdSense ins element did not become visible in time.");
  }
}

const AdsenseAutoAd = () => {
  const insRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!insRef.current) return;
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Insert AdSense script only once
    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8630405999832993";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    function pushAdIfPossible() {
      // Prevent pushing ads multiple times to same ins
      if (
        insRef.current &&
        !(insRef.current as any).__adsbygoogle_pushed
      ) {
        (window.adsbygoogle = window.adsbygoogle || []);
        try {
          window.adsbygoogle.push({});
          (insRef.current as any).__adsbygoogle_pushed = true;
        } catch (err) {
          // Could log if needed
        }
      }
    }

    // Wait for ins to be visible, or try immediately
    waitForAdSlotVisible(insRef.current, pushAdIfPossible);

    // No cleanup needed; ad stays rendered unless unmounted
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex justify-center my-6">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8630405999832993"
        data-ad-slot="7611861707"
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={insRef as any}
      />
    </div>
  );
};

export default AdsenseAutoAd;
