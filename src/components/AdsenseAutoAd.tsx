
import { useEffect } from "react";

const AdsenseAutoAd = () => {
  useEffect(() => {
    // Only run in the browser
    if (typeof window === "undefined") return;

    // Insert AdSense push command
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }

    // No cleanup needed; ad stays rendered unless unmounted
  }, []);

  return (
    <div className="flex justify-center my-6">
      {/* The AdSense ad unit */}
      <div>
        {/* We don't need to include the script tag here as it's already in index.html */}
        <ins 
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-8630405999832993"
          data-ad-slot="7611861707"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
};

export default AdsenseAutoAd;
