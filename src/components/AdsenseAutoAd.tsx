
import { useEffect, useRef } from "react";

const AdsenseAutoAd = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.adsbygoogle && window.adsbygoogle.loaded) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // Silently ignore
      }
    } else {
      // Load AdSense if not loaded
      const scriptId = "adsbygoogle-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src =
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8630405999832993";
        script.crossOrigin = "anonymous";
        document.head.appendChild(script);
        script.onload = () => {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        };
      }
    }
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
        ref={adRef as any}
      />
    </div>
  );
};

export default AdsenseAutoAd;
