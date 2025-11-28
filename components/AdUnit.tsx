"use client";

import { useEffect } from "react";

export interface AdUnitProps {
  adSlot: string;
  adFormat?: string;
  adLayout?: string;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export default function AdUnit({
  adSlot,
  adFormat = "auto",
  adLayout,
  fullWidth = true,
  style = {},
}: AdUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center", ...style }}
      data-ad-client="ca-pub-5703495087334224"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidth ? "true" : "false"}
      {...(adLayout ? { "data-ad-layout": adLayout } : {})}
    />
  );
}
