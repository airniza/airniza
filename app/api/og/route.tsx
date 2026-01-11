// app/api/og/route.ts
import { ImageResponse } from "next/og";

export const runtime = "edge";

/* ---------- HELPERS ---------- */
function getAQILabel(aqi: number) {
  if (aqi <= 50) return "GOOD";
  if (aqi <= 100) return "MODERATE";
  if (aqi <= 150) return "POOR";
  if (aqi <= 200) return "UNHEALTHY";
  return "HAZARDOUS";
}

// ✅ ONLY for location text
function humanize(str: string) {
  if (!str) return "";
  return str
    .split("-")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const city = searchParams.get("city") || "Unknown City";
  const state = searchParams.get("state") || "";
  const country = searchParams.get("country") || "";
  const aqi = Number(searchParams.get("aqi") || 0);

  // ✅ humanized versions (ONLY used in text)
  const cityText = humanize(city);
  const stateText = humanize(state);

  const baseUrl = "https://airniza.com";


  const bgImage = `${baseUrl}/api/og-node?country=${country}&state=${state}&city=${city}&aqi=${aqi}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          position: "relative",
          display: "flex",
        }}
      >
        {/* Background */}
        <img
          src={bgImage}
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            objectFit: "cover",
          }}
        />

        {/* AQI NUMBER */}
        <div
          style={{
            position: "absolute",
            left: 300,
            top: 150,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            AQI
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 900 }}>
            {aqi}
          </div>
        </div>

        {/* AQI STATUS */}
        <div
          style={{
            position: "absolute",
            left: 530,
            top: 200,
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: 52,
            fontWeight: 900,
          }}
        >
          <div style={{ display: "flex" }}>
            {getAQILabel(aqi)}
          </div>
        </div>

        {/* LOCATION (✅ HUMANIZED ONLY HERE) */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: "white",
            fontSize: 42,
            fontWeight: 800,
          }}
        >
          <div style={{ display: "flex" }}>
            {cityText}, {stateText}
          </div>
        </div>

        {/* BRAND */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            right: 40,
            display: "flex",
            color: "white",
            fontSize: 24,
            opacity: 0.9,
          }}
        >
          <div style={{ display: "flex" }}>
            Airniza.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
