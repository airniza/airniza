import CountrywiseSection from "@/components/CountrywiseSection";
import FeaturedSection from "@/components/helpers/FeaturedSection";
import Showdata from "@/components/Showdata";
import Link from "next/link";



    export const metadata = {
    title: "Airniza",
    description: "Real-time air quality index (AQI) data, PM2.5, humidity, temperature, and pollution levels for all locations. Updated instantly.",
    alternates: {
      canonical: "https://airniza.com/"
    }
  };


export default function Home() {
  //Schema data start
  
  return (
    <div className="min-h-screen bg-background">
      
      <main>
        <Showdata />
        <CountrywiseSection/>
        <FeaturedSection/>
        <div className="mb-6  mx-auto px-12"><Link href={"/aqi-to-cigarette-calculator"} className="text-primary font-bold"> <span/> AQI to Cigarette Calculator</Link></div>
        
        
       
        
      </main>
    </div>
  );
}
