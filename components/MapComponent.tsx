"use client";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import type * as L from "leaflet";

type MapProps = { lati: number; longi: number; zoom?: number };

export default function MapComponent({ lati, longi, zoom = 10 }: MapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const leaflet = await import("leaflet");
      if (!isMounted || !containerRef.current) return;

      if (!mapRef.current) {
        mapRef.current = leaflet.map(containerRef.current, {
          center: [lati, longi],
          zoom,
          zoomControl: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          touchZoom: false,
          dragging: false, // disabled
          boxZoom: false,
          attributionControl: false,
        });

        leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
        }).addTo(mapRef.current);
      } else {
        mapRef.current.setView([lati, longi], zoom);
      }
    })();

    return () => {
      isMounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [lati, longi, zoom]);

  return <div ref={containerRef} className="absolute top-0 left-0 w-full h-full z-0" />;
}
