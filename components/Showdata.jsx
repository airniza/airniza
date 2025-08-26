"use client";
import { useEffect, useState } from "react";
import { Getaqi } from "./Getaqi";
import MapComponent from "./MapComponent";
import RadiationBall from "./RadiationBall";
import { Button } from "./ui/button";
import AirQualityBar from "./AirQualityBar";
import Image from "next/image";
import AqiStatus from "./AqiStatus";
import Pm25Converter from "./Pm25Converter";
import { MdWaterDrop } from "react-icons/md";
import { FaTemperatureLow } from "react-icons/fa";
import { MdOutlineWindPower } from "react-icons/md";


export default function Showaqi() {
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Getaqi().then((response) => {
      setdata(response);
      setLoading(false);
    });
  }, []);
  if (loading)
    return <p className="text-center font-bold text-5xl mt-7">Loading</p>;
  const city = data.data.city;
  const state = data.data.state;
  const country = data.data.country;
  const aqi = data.data.current.pollution.aqius;
  const temp = data.data.current.weather.tp;
  const humidity = data.data.current.weather.hu;
  const ws = data.data.current.weather.ws;
  const latitude = data.data.location.coordinates[1];
  const longitude = data.data.location.coordinates[0];
  const IconCode = data.data.current.weather.ic;

  //air quality status const start
   const { condition, fore, ic } = AqiStatus(aqi);

  //PM 2.5 conversion start
    const pm25 = Pm25Converter(aqi);

    
  

  return (
    <div className="relative min-h-screen">
      
      {/* Map section */}
      <div className="relative h-[67vh]">
        <MapComponent lati={latitude} longi={longitude} zoom={11} />
      </div>

      {/* Overlapping AQI content */}
      
      <div
              style={{
                backgroundImage: `linear-gradient(to bottom left, ${fore}66 0%, white 50%)`,
              }}
              className="grid grid-cols-1 relative rounded-xl shadow-lg md:grid-cols-7 gap-4 -mt-40 p-4 lg:ml-10 lg:mr-10 ml-3 mr-3"
            >
              {/* Left Section - AQI */}
              <div className="md:col-span-4">
                <span className="bg-red-500 text-white px-3 py-1 text-xs rounded uppercase tracking-wide">
                  LIVE
                </span>
      
                <h1 className="text-3xl font-bold mt-3 font-serif"> Current Air Quality {city} </h1>
                <div className="flex flex-wrap items-center justify-between flex-1 gap-4 mt-3">
                  {/* Radiation ball and AQI */}
                  <div className="flex flex-col">
                    <div className="flex text-center items-center gap-2">
                      <span>
                        <RadiationBall />
                      </span>
                      <p className="font-bold">Live AQI</p>
                    </div>
                    <div>
                      <span style={{ color: fore }} className="text-5xl font-bold">
                        {aqi}
                      </span>
                      <span className="text-muted-foreground text-[12px]">
                        (US-AQI)
                      </span>
                    </div>
                  </div>
      
                  {/* Air Quality Status closer to AQI */}
                  <div className="text-center">
                    <p>Air Quality is</p>
                    <Button className="text-xl"
                      style={{ backgroundColor: fore }}
                    >
                      {condition}
                    </Button>
                  </div>
                </div>
      
                {/* PM2.5 */}
                <div className="mt-4 text-sm md:text-base">
                  <p className="font-bold">
                    PM2.5:
                    <span className="font-semibold text-muted-foreground">
                      {" "}
                      {pm25?.toFixed(1)} µg/m³
                    </span>
                  </p>
                </div>
      
                {/* AQI Scale Bar */}
                <div className="mt-4">
                  <AirQualityBar value={aqi} />
                </div>
              </div>
      
              {/* Right Section - Weather (Glassmorphism) */}
              <div
                className="md:col-span-3 p-0 sm:p-4 md:p-6"
                //  style={{
                //    background: "rgba(255, 255, 255, 0.15)",
                //    backdropFilter: "blur(10px)",
                //    WebkitBackdropFilter: "blur(10px)",
                //    border: "1px solid rgba(255, 255, 255, 0.3)",
                //  }}
                   >
                <div className="flex flex-col items-center">
                  <div>
                    <Image
                    src={`/aqi-icons/${ic}.webp`}
                    width={140}
                    height={140}
                    alt={`Current air Quality ${city}`}
                     />
                  </div>
                  <div
                    className="flex flex-row justify-between w-full mt-4 border-t border-gray-300 pt-4"
                    style={{
                      background: "#fcfcfc",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      //border: "1px solid rgba(255, 255, //255, 0.3)",
                    }}
                    >
                    <div className="flex-[1] md:flex-1 flex items-center justify-center">
                      <div className="flex items-center gap-1">
                        <FaTemperatureLow className="text-primary"/>{" "}
                        <span className="font-semibold">{temp}°C</span>
                      </div>
                    </div>
      
                    <div className="flex-[0.9] md:flex-1 border-l border-gray-300 flex items-center justify-center">
                      <div className="flex items-center gap-1">
                        <MdWaterDrop className="text-primary"/>
                        <span className="font-semibold">{humidity}% </span>
                      </div>
                    </div>
      
                    <div className="flex-[1.4] md:flex-1 border-l border-gray-300 flex items-center justify-center">
                     <div className="flex items-center gap-1">
                        <MdOutlineWindPower className="text-primary"/>
                        <span className="font-semibold">{ws} Km/h </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
}
