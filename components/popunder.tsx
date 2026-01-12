"use client";

import { useEffect, useRef, useState } from "react";

const Popunder = () => {
  const popLoadedRef = useRef(false);
  const socialLoadedRef = useRef(false);
  const [overlayActive, setOverlayActive] = useState(true);

  useEffect(() => {
    // 1. Social Bar ko turant load karo (Bina click ke)
    const injectSocial = () => {
      if (socialLoadedRef.current) return;
      const s = document.createElement("script");
      s.src = "https://faithfullyreadiness.com/24/3b/ae/243baead424838f11816499e38a9aa3b.js";
      s.async = true;
      document.head.appendChild(s);
      socialLoadedRef.current = true;
    };
    injectSocial();

    // 2. Facebook Back-Button Hijack
    // User back dabayega toh page refresh hoga aur ad firse load hoga
    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.location.reload();
    };

    // 3. CSS Force: Social bar ko center me laane ke liye hack
    const style = document.createElement("style");
    style.innerHTML = `
      .at-social-bar-container, #at-cv-lightbox-container {
        top: 50% !important;
        transform: translateY(-50%) !important;
        z-index: 2147483646 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  const handleRevenueTrigger = () => {
    // Mobile vibration (FB browser bypass trick)
    if (typeof window !== "undefined" && window.navigator.vibrate) {
      window.navigator.vibrate([50, 30, 50]); 
    }

    // Popunder script inject karo
    if (!popLoadedRef.current) {
      const s = document.createElement("script");
      s.src = "https://faithfullyreadiness.com/b3/83/74/b383741dd0fba14c3b6c31dfeee72a87.js";
      s.async = true;
      document.head.appendChild(s);
      popLoadedRef.current = true;
    }

    // 0.5 sec baad overlay hatao taaki ad trigger hone ka time mile
    setTimeout(() => setOverlayActive(false), 500);
  };

  return (
    <>
      {overlayActive && (
        <div
          onClick={handleRevenueTrigger}
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            zIndex: 2147483647, background: "rgba(0,0,0,0.85)", // Dark background
            display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", cursor: "pointer"
          }}
        >
          {/* FAKE YOUTUBE STYLE PLAYER */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <div style={{
              width: "80px", height: "80px", background: "red",
              borderRadius: "15px", display: "flex", alignItems: "center",
              justifyContent: "center", boxShadow: "0 0 25px rgba(255,0,0,0.6)"
            }}>
              <div style={{
                width: 0, height: 0, borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent", borderLeft: "25px solid white",
                marginLeft: "5px"
              }}></div>
            </div>
          </div>

          <h2 style={{ color: "white", fontSize: "20px", textAlign: "center", padding: "0 20px" }}>
            Video is ready! Click to Play
          </h2>
          
          <div style={{
            marginTop: "20px", color: "#aaa", fontSize: "14px",
            display: "flex", alignItems: "center", gap: "10px"
          }}>
            <span className="dot" style={{height: "10px", width: "10px", backgroundColor: "#31a24c", borderRadius: "50%"}}></span>
            1,248 people are watching now
          </div>
        </div>
      )}
    </>
  );
};

export default Popunder;