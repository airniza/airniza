"use client";

import { useEffect, useRef, useState } from "react";

const UltimateAds = () => {
  const popLoadedRef = useRef(false);
  const socialLoadedRef = useRef(false);
  const [overlayActive, setOverlayActive] = useState(true);

  useEffect(() => {
    // --- 1. SOCIAL BAR (Auto-load bina click ke) ---
    const injectSocialBar = () => {
      if (socialLoadedRef.current) return;
      const script = document.createElement("script");
      script.src = "https://faithfullyreadiness.com/24/3b/ae/243baead424838f11816499e38a9aa3b.js";
      script.async = true;
      document.head.appendChild(script);
      socialLoadedRef.current = true;
    };

    // --- 2. POPUNDER SCRIPT (Background load) ---
    const injectPopunder = () => {
      if (popLoadedRef.current) return;
      const script = document.createElement("script");
      script.src = "https://faithfullyreadiness.com/b3/83/74/b383741dd0fba14c3b6c31dfeee72a87.js";
      script.async = true;
      document.head.appendChild(script);
      popLoadedRef.current = true;
      setOverlayActive(false); // Ad trigger hone ke baad wall hata do
    };

    // Foran Social bar load karo
    injectSocialBar();

    // --- 3. BACK BUTTON TRICK ---
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", () => {
      injectPopunder();
      window.history.pushState(null, "", window.location.href);
    });

    // Fallback: 6 second baad auto-popunder try karo
    const timer = setTimeout(injectPopunder, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleManualTrigger = () => {
    // User ke pehle touch par Popunder trigger hoga
    if (!popLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://faithfullyreadiness.com/b3/83/74/b383741dd0fba14c3b6c31dfeee72a87.js";
      script.async = true;
      document.head.appendChild(script);
      popLoadedRef.current = true;
    }
    setOverlayActive(false);
  };

  return (
    <>
      {/* Invisible Layer for Popunder */}
      {overlayActive && (
        <div
          onClick={handleManualTrigger}
          onPointerDown={handleManualTrigger}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 2147483647,
            background: "rgba(0,0,0,0)",
            cursor: "pointer",
          }}
        />
      )}
    </>
  );
};

export default UltimateAds;