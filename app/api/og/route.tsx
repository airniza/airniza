// app/api/og/route.ts
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const dynamic = "force-dynamic";

/* eslint-disable @next/next/no-img-element */

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get("city") || "Unknown City";
  const aqi = Number(searchParams.get("aqi")) || 0;

  // AQI Label & Emoji
  let aqiLabel = "";
  let aqiEmoji = "";
  if (aqi <= 50) {
    aqiLabel = "Good";
    aqiEmoji = "✅";
  } else if (aqi <= 100) {
    aqiLabel = "Moderate";
    aqiEmoji = "🌤️";
  } else if (aqi <= 150) {
    aqiLabel = "Unhealthy (Sensitive)";
    aqiEmoji = "⚠️";
  } else if (aqi <= 200) {
    aqiLabel = "Unhealthy";
    aqiEmoji = "😷";
  } else {
    aqiLabel = "Hazardous";
    aqiEmoji = "☠️";
  }

  // AQI ke hisaab se gradient overlay
  const aqiGradient =
    aqi <= 50
      ? "linear-gradient(to bottom, rgba(0,200,0,0.6), rgba(0,150,0,0.7))"
      : aqi <= 100
      ? "linear-gradient(to bottom, rgba(255,165,0,0.6), rgba(200,120,0,0.7))"
      : "linear-gradient(to bottom, rgba(200,0,0,0.6), rgba(150,0,0,0.7))";

  // Random background image
  const images = [
    "/og-images/1.png",
    "/og-images/2.png",
    "/og-images/3.png",
    "/og-images/4.png",
    "/og-images/5.png",
    "/og-images/6.png",
    "/og-images/7.png",
    "/og-images/8.png",
    "/og-images/9.png",
    "/og-images/10.png",
  ];
  const randomImage = images[Math.floor(Math.random() * images.length)];

  // Base URL fix
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    ? process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
      ? process.env.NEXT_PUBLIC_BASE_URL
      : `https://${process.env.NEXT_PUBLIC_BASE_URL}`
    : "http://localhost:3000";

  const cityImage = `${baseUrl}${randomImage}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          //fontFamily: "Sans-serif",
        }}
      >
        {/* Background */}
        <img
          src={cityImage}
          width="1200"
          height="630"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: aqiGradient,
          }}
        />

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            textAlign: "center",
            padding: "20px",
          }}
        >
          {/* City Name */}
          <div
            style={{
              display: "flex",
              fontSize: 90,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            {city}
          </div>

          {/* AQI Label Above */}
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: "600",
              marginBottom: 10,
            }}
          >
            Current Air Quality Index (AQI)
          </div>

          {/* AQI Value */}
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {aqiEmoji} {aqi}
          </div>

          {/* Health Label */}
          <div
            style={{
              display: "flex",
              fontSize: 40,
              fontWeight: "500",
              background: "rgba(0,0,0,0.4)",
              padding: "8px 20px",
              borderRadius: "12px",
            }}
          >
            {aqiLabel}
          </div>
        </div>

        {/* Branding + CTA */}
        <div
          style={{
            position: "absolute",
            bottom: 25,
            right: 40,
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            color: "white",
            textShadow: "2px 2px 6px rgba(0,0,0,0.8)",
          }}
        >
          <div style={{ fontSize: 24, marginBottom: 5 }}>
            Airniza.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}