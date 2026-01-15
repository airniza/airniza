import CountrywiseSection from "@/components/CountrywiseSection";
import FeaturedSection from "@/components/helpers/FeaturedSection";
import Showdata from "@/components/Showdata";



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
       
        
      </main>
    </div>
  );
}
