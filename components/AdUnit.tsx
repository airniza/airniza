// components/AdUnit.tsx
"use client";

import { useEffect } from "react";

export interface AdUnitProps {
  adSlot: string;
  adLayout?: string;      // <-- IMPORTANT: Added
  adFormat?: string;      
  fullWidth?: boolean;
}

export default function AdUnit({
  adSlot,
  adLayout,
  adFormat = "auto",
  fullWidth = true,
}: AdUnitProps) {
  useEffect(() => {
    try {
      // Load Adsense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log("Adsense error:", e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-5703495087334224"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidth ? "true" : "false"}
      {...(adLayout ? { "data-ad-layout": adLayout } : {})}  // <-- Works safely
    />
  );
}
