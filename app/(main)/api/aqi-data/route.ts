import FetchLocationData from "@/components/FetchLocationData";

export async function GET(req: Request) {
  // 🔐 API key check (TOP pe)
  const key = req.headers.get("x-api-key");

  if (key !== process.env.DISTRIBUTION_API_KEY) {
    return Response.json(
      { error: "unauthorized" },
      { status: 401 }
    );
  }

  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city");

  if (!city) {
    return Response.json(
      { error: "city is required" },
      { status: 400 }
    );
  }

  const data = await FetchLocationData(city);

  return Response.json({
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
  });
}
