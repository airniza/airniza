// components/ClientMapWrapper.tsx
"use client";

import dynamic from "next/dynamic";

// Client-only Map
const MapComponent = dynamic(() => import("../MapComponent"), { ssr: false });

export default function ClientMapWrapper({ lati, longi, zoom = 10 }: { lati: number; longi: number; zoom?: number }) {
  return <MapComponent lati={lati} longi={longi} zoom={zoom} />;
}
