import AirQualityBar from "./AirQualityBar";
import AqiStatus from "./AqiStatus";
import { LiveUpdatedText } from "./LastUpdatedText";
import RadiationBall from "./RadiationBall";
import { Button } from "./ui/button";
import Image from "next/image";
import { MdWaterDrop } from "react-icons/md";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { TbBuildingWindTurbine } from "react-icons/tb";
import Pm25Converter from "./Pm25Converter";
import { ReactElement } from "react";



type dashboardProps = {
  breadcrumbs?: ReactElement;
  place?: string;
  state?: string;
  country: string;
  heading?: string;
  aqi: number;
  temp: number | null;
  humidity: number;
  ws: number | null;

};

export default function AirQualityDashboard ({breadcrumbs,place,state,country,heading,aqi,temp,humidity,ws}:dashboardProps) {
      
  //PM2.5 Conversion
   const pm25 = Pm25Converter(aqi); 
  // air quality status
  const { condition, fore, ic } = AqiStatus(aqi);
      //last updated for msg
  const lastUpdated = new Date().toISOString();
  
  const location = [place,state,country].filter(Boolean).join(", ");
  const defaultHeading = `${place || state || country} Air Quality Index (AQI) and Air Pollution`



  return <div
        style={{
          backgroundImage: `linear-gradient(to bottom left, ${fore}66 0%, white 50%)`,
        }}
        className="grid grid-cols-1 relative w-full  md:grid-cols-7 gap-4 px-4 sm:px-6 lg:px-8 py-10 mx-auto"
      >
        {/* Left Section - AQI */}
        <div className="md:col-span-4">
           {breadcrumbs}
          
          <h1 className="text-2xl font-bold font-serif mt-3">
           {heading || defaultHeading}
          </h1>
          <p className="mt-3 text-muted-foreground ">Stay updated with the latest air quality index (AQI) for {location}  . With an AQI of {aqi} ({condition}), PM2.5 at {pm25?.toFixed(1)}µg/m³, humidity at {humidity}%, and temperature around {temp}°C. Explore current air pollution levels and learn how to protect yourself and your family from pollution exposure.</p>
          <div className="flex flex-wrap items-center justify-between flex-1 gap-4 mt-4">
            {/* Radiation ball and AQI */}
            <div className="flex flex-col">
              <div className="flex text-center items-center gap-2">
                <span>
                  <RadiationBall />
                </span>
                <p className="font-bold ml-1">Live AQI</p>
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
              <Button className="text-xl mt-1"
                style={{ backgroundColor: fore }}
              >
                {condition}
              </Button>
            </div>
          </div>

          {/* PM2.5 */}
          <div className="mt-4 text-sm md:text-base flex justify-between">
            <p className="font-bold">
              PM2.5:
              <span className="font-semibold text-muted-foreground">
                {" "}
                {pm25?.toFixed(1)} µg/m³
              </span>
            </p>
            <LiveUpdatedText initialTime={lastUpdated}/>
          </div>

          {/* AQI Scale Bar */}
          <div className="mt-7">
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
              alt={`Current Air Quality Index (AQI) ${place}`}
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
                  <FaTemperatureThreeQuarters className="text-primary"/>
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
                  <TbBuildingWindTurbine className="text-primary"/>
                  <span className="font-semibold">{ws} Km/h </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
}