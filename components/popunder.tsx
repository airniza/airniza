"use client";

import { useEffect, useRef, useState } from "react";

const Popunder = () => {
  const loadedRef = useRef(false);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const fireAd = () => {
      if (loadedRef.current) return;

      // ✅ Adsterra Anti-Block Script
      const script = document.createElement("script");
      script.src = "https://faithfullyreadiness.com/b3/83/74/b383741dd0fba14c3b6c31dfeee72a87.js";
      script.async = true;
      document.head.appendChild(script);

      loadedRef.current = true;
      setActive(false); // Ad trigger hote hi overlay hat jayega
    };

    // --- 1. BACK BUTTON TRICK ---
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      fireAd();
    };
    window.addEventListener("popstate", handlePopState);

    // --- 2. AUTO-TIMER (Safe fallback) ---
    const timer = setTimeout(fireAd, 5000); 

    return () => {
      window.removeEventListener("popstate", handlePopState);
      clearTimeout(timer);
    };
  }, []);

  // --- 3. INVISIBLE OVERLAY CLICK ---
  const handleOverlayClick = () => {
    if (loadedRef.current) return;
    
    const script = document.createElement("script");
    script.src = "https://faithfullyreadiness.com/b3/83/74/b383741dd0fba14c3b6c31dfeee72a87.js";
    script.async = true;
    document.head.appendChild(script);
    
    loadedRef.current = true;
    setActive(false);
  };

  if (!active) return null;

  return (
    <div
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2147483647,
        background: "rgba(0,0,0,0)",
        cursor: "pointer",
        touchAction: "manipulation"
      }}
    />
  );
};

export default Popunder;