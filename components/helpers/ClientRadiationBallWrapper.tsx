// components/ClientRadiationBallWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Client-side animation component
const RadiationBall = dynamic(() => import("../RadiationBall"), { ssr: false });

export default function ClientRadiationBallWrapper() {
  return <RadiationBall />;
}
