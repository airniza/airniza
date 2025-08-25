"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ClientRadiationBallWrapper from "./helpers/ClientRadiationBallWrapper";
import AirQualityBar from "./AirQualityBar";
import { Button } from "./ui/button";
import Pm25Converter from "./Pm25Converter";
import AqiStatus from "./AqiStatus";
import Image from "next/image";

// Client-side only components
const ClientMap = dynamic(() => import("./MapComponent"), { ssr: false });

// ----------------------
// Exported API response type
// ----------------------
export type ApiResponse = {
  data: {
    city: string;
    current: {
      pollution: { aqius: number };
      weather: { tp: number; hu: number; ws: number; ic: string };
    };
    location: { coordinates: [number, number] }; // [longitude, latitude]
  };
};

type ShowDataProps = {
  fallbackData?: ApiResponse;
};

export default function ShowData({ fallbackData }: ShowDataProps) {
  const [data, setData] = useState<ApiResponse | null>(fallbackData || null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAQI = async (lat?: number, lon?: number) => {
      try {
        const url = lat && lon
          ? `/api/getaqi?lat=${lat}&lon=${lon}`
          : `/api/getaqi`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch AQI");
        const json: ApiResponse = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
        setError("Unable to fetch air quality data.");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => fetchAQI(position.coords.latitude, position.coords.longitude),
        () => fetchAQI()
      );
    } else {
      fetchAQI();
    }
  }, []);

  if (error) return <p className="text-center mt-10 text-xl">{error}</p>;
  if (!data) return <p className="text-center mt-10 text-xl">Loading...</p>;

  const city = data.data.city;
  const aqi = data.data.current.pollution.aqius;
  const temp = data.data.current.weather.tp;
  const humidity = data.data.current.weather.hu;
  const ws = data.data.current.weather.ws;
  const latitude = data.data.location.coordinates[1];
  const longitude = data.data.location.coordinates[0];

  const { condition, fore, ic } = AqiStatus(aqi);
  const pm25 = Pm25Converter(aqi);

  return (
    <div className="relative min-h-screen">
      {/* Map */}
      <div className="relative h-[67vh]">
        <ClientMap lati={latitude} longi={longitude} zoom={11} />
      </div>

      {/* AQI Info */}
      <div
        style={{ backgroundImage: `linear-gradient(to bottom left, ${fore}66 0%, white 50%)` }}
        className="grid grid-cols-1 relative rounded-xl shadow-lg md:grid-cols-7 gap-4 -mt-40 p-4 lg:mx-10 mx-3"
      >
        {/* Left - AQI */}
        <div className="md:col-span-4">
          <span className="bg-red-500 text-white px-3 py-1 text-xs rounded uppercase tracking-wide">
            LIVE
          </span>
          <h1 className="text-3xl font-bold mt-3 font-serif">
            Current Air Quality {city}
          </h1>

          <div className="flex flex-wrap items-center justify-between flex-1 gap-4 mt-3">
            <div className="flex flex-col">
              <div className="flex text-center items-center gap-2">
                <ClientRadiationBallWrapper />
                <p className="font-bold">Live AQI</p>
              </div>
              <div>
                <span style={{ color: fore }} className="text-5xl font-bold">
                  {aqi}
                </span>
                <span className="text-muted-foreground text-[12px]">(US-AQI)</span>
              </div>
            </div>

            <div className="text-center">
              <p>Air Quality is</p>
              <Button className="text-xl" style={{ backgroundColor: fore }}>
                {condition}
              </Button>
            </div>
          </div>

          <div className="mt-4 text-sm md:text-base">
            <p className="font-bold">
              PM2.5:{" "}
              <span className="font-semibold text-muted-foreground">
                {pm25?.toFixed(1)} µg/m³
              </span>
            </p>
          </div>

          <div className="mt-4">
            <AirQualityBar value={aqi} />
          </div>
        </div>

        {/* Right - Weather */}
        <div className="md:col-span-3 p-0 sm:p-4 md:p-6">
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={`/aqi-icons/${ic}.webp`}
                width={140}
                height={140}
                alt={`${city} Air Quality Index (AQI)`}
              />
            </div>
            <div
              className="flex flex-row justify-between w-full mt-4 border-t border-gray-300 pt-4"
              style={{
                background: "#fcfcfc",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div className="flex-[1] md:flex-1 flex items-center justify-center">
                <span className="font-semibold">{temp}°C</span>
              </div>
              <div className="flex-[0.9] md:flex-1 border-l border-gray-300 flex items-center justify-center">
                <span className="font-semibold">{humidity}%</span>
              </div>
              <div className="flex-[1.4] md:flex-1 border-l border-gray-300 flex items-center justify-center">
                <span className="font-semibold">{ws} Km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
