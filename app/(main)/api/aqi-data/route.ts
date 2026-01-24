// ⛳ IMPORTANT: Force Node runtime (avoid Edge timeout issues)
export const runtime = "nodejs";

import FetchLocationData from "@/components/FetchLocationData";

export async function GET(req: Request) {
  /* ===============================
     1️⃣ ENV SAFETY CHECK
  =============================== */
  const SERVER_KEY = process.env.DISTRIBUTION_API_KEY;

  if (!SERVER_KEY) {
    console.error("❌ DISTRIBUTION_API_KEY missing");
    return Response.json(
      { error: "server_misconfigured" },
      { status: 500 }
    );
  }

  /* ===============================
     2️⃣ API KEY AUTH
  =============================== */
  const clientKey = req.headers.get("x-api-key");

  if (!clientKey || clientKey !== SERVER_KEY) {
    return Response.json(
      { error: "unauthorized" },
      { status: 401 }
    );
  }

  /* ===============================
     3️⃣ QUERY VALIDATION
  =============================== */
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city || city.trim().length < 2) {
    return Response.json(
      { error: "city is required" },
      { status: 400 }
    );
  }

  /* ===============================
     4️⃣ DATA FETCH (TIME-SAFE)
  =============================== */
  try {
    const start = Date.now();

    const data = await FetchLocationData(city.trim());

    console.log(
      `✅ AQI fetched for ${city} in ${Date.now() - start}ms`
    );

    /* ===============================
       5️⃣ FINAL RESPONSE + CACHE
    =============================== */
    return Response.json(
      {
        city,
        state: data.state,
        country: data.country,

        aqi: data.aqi,
        condition: data.condition,
        main_pollutant: data.mainPollutant,

        pm2_5: data.pm2_5,
        pm10: data.pm10,
        co: data.co,
        no2: data.no2,
        so2: data.so2,
        o3: data.o3,

        temp: data.temp,
        humidity: data.humidity,
        ws: data.ws,

        timestamp: new Date().toISOString(),
      },
      {
        headers: {
          // 🧠 Reduce repeated heavy calls
          "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
        },
      }
    );
  } catch (err) {
    console.error("❌ AQI API failed:", err);

    return Response.json(
      { error: "failed_to_fetch_data" },
      { status: 500 }
    );
  }
}
