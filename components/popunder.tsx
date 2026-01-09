"use client";

import { useEffect, useRef } from "react";

const MAX_POP_PER_DAY = 3; // ek user ko 24h me max 3 pops

const Popunder = () => {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const triggerPopOnScroll = () => {
      // localStorage me count track karo
      const popData = JSON.parse(localStorage.getItem("popunder_count") || "{}");
      const today = new Date().toDateString();

      let count = 0;
      if (popData.date === today) count = popData.count || 0;

      if (count >= MAX_POP_PER_DAY) return; // max pop / day

      // increment counter
      localStorage.setItem(
        "popunder_count",
        JSON.stringify({ date: today, count: count + 1 })
      );

      // ✅ Adsterra Popunder script
      const script = document.createElement("script");
      script.src =
        "https://pl28436147.effectivegatecpm.com/b3/83/74/b383741dd0fba14c3b6c31dfeee72a87.js";
      script.async = true;

      document.body.appendChild(script);
    };

    // Scroll trigger
    window.addEventListener("scroll", triggerPopOnScroll);

    return () => {
      window.removeEventListener("scroll", triggerPopOnScroll);
    };
  }, []);

  return null;
};

export default Popunder;
