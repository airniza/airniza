// app/api/getaqi/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    let lat = searchParams.get("lat");
    let lon = searchParams.get("lon");

    // fallback coordinates (Delhi)
    if (!lat || !lon) {
      lat = "40.730610";
      lon = "-73.935242";
    }

    const apiKey = process.env.apikey;
    if (!apiKey) throw new Error("not defined");

    const url = `http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${apiKey}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error(`fetxh error: ${res.status}`);

    const data = await res.json();
    return NextResponse.json(data);
  } catch (e) {
    console.error("Error fetching AQI:", e);
    return NextResponse.json({ error: "Unable to fetch AQI data" });
  }
}
