import CityPage from "@/app/[country]/[state]/[city]/page"
import { types } from "util"

type indoorProps = {

  city: string;
}




export default function IndoorAirQuality ({city}: indoorProps) {





  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <h2 className="text-2xl font-bold">
                Indoor Air Quality in {city}
              </h2>
              <p>
                Outdoor air quality in {city} directly affects indoor conditions. The most surprising thing is that due to stagnant ventilation, pet dander, dust, and the buildup of chemicals, indoor air can sometimes be even more polluted than outdoor air. Poor AQI increases the risk of breathing issues, so it is important to maintain healthy air indoors.

              </p>
  
  
  
  
  
  
  </div>
}