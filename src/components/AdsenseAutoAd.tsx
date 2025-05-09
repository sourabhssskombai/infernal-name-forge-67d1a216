
import { useEffect } from "react";

const AdsenseAutoAd = () => {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === "undefined") return;

    // Push the ad after component mounts
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="my-6">
      {/* Script tag is not needed here as it's already in index.html */}
      {/* Dnd */}
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-8630405999832993"
           data-ad-slot="7611861707"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default AdsenseAutoAd;
