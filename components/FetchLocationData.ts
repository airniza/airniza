import AqiStatus from "./AqiStatus";
import { calculateOverallAQI } from "./helpers/CalculateFinalAqi";

export default async function FetchLocationData(city: string) {
  // 1. Radar API call (for state, country, lat, lon)
  const radarRes = await fetch(
    `https://api.radar.io/v1/geocode/forward?query=${city}`,
    {
      headers: {
        Authorization: process.env.RADAR_SECRET_KEY || "",
      },
      cache: "no-store",
    }
  );

  const radarData = await radarRes.json();
  const location = radarData.addresses?.[0];

  if (!location) {
    throw new Error("Location not found..");
  }

  const { latitude, longitude, state, country } = location;

  // 2. OpenWeather Air Pollution API
  const aqiRes = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${process.env.openweatherkey}`,
    {
      cache: "no-store",
    }
  );

  const aqiData = await aqiRes.json();
  const pollution = aqiData?.list?.[0];
  if (!pollution) {
    throw new Error("Air Quality data is not available..");
  }

  
  const { co, no, no2, o3, so2, pm2_5, pm10, nh3 } = pollution.components;
  

  // 3. OpenWeather Weather API (for temp, humidity, wind speed)
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.openweatherkey2}`,
    {
      cache: "no-store",
    }
  );

  const weatherData = await weatherRes.json();
  const temp = weatherData?.main?.temp
    ? Math.round(weatherData.main.temp)
    : null;           // °C
  const humidity = weatherData?.main?.humidity ?? null;         // %
  const ws = weatherData?.wind?.speed
    ? Math.round(weatherData.wind.speed * 3.6) // m/s → km/h
    : null;


   const pollutants = { pm2_5, pm10, no2, o3, so2, co };
   const aqi = calculateOverallAQI(pollutants);
   const { condition, exp } = AqiStatus(aqi);



  // ✅ Final return
  return {
    aqi,
    condition,
    exp,
    temp,   // °C
    humidity,     // %
    ws,     // km/h
    state,
    country,
    co,
    no,
    no2,
    o3,
    so2,
    pm2_5,
    pm10,
    nh3,
  };
}
