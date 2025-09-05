// components/AdUnit.tsx
"use client";

import { useEffect } from "react";

interface AdUnitProps {
  adSlot: string;
  adFormat?: string; // auto, rectangle, vertical, horizontal, fluid
  fullWidth?: boolean;
  layoutKey?: string; // sirf in-feed/in-article ke liye
}

export default function AdUnit({
  adSlot,
  adFormat = "auto",
  fullWidth = true,
  layoutKey,
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
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-5703495087334224" // <- Yaha apna publisher ID dalna hai
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidth ? "true" : "false"}
      {...(layoutKey ? { "data-ad-layout-key": layoutKey } : {})}
    />
  );
}