
import { useEffect, useRef } from "react";

const AdsenseAutoAd = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        // AdSense script loaded, try pushing a new ad
        if (window.adsbygoogle) {
          window.adsbygoogle.push({});
        }
      };
    } else {
      // Script already present; invoke push to (re)render ad
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
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
