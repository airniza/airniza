import { ImageResponse } from "next/og";

export const runtime = "edge";

/* ---------- HELPERS ---------- */
function getAQILabel(aqi: number) {
  if (aqi <= 50) return "GOOD";
  if (aqi <= 100) return "MODERATE";
  if (aqi <= 150) return "POOR";
  if (aqi <= 200) return "UNHEALTHY";
  if (aqi <= 300) return "SEVERE";
  return "HAZARDOUS";
}
function leftAlign(aqi:number){
  if (aqi <= 50) return 285;
  if (aqi <= 100) return 285;
  if (aqi <= 150) return 275;
  if (aqi <= 200) return 275;
  if (aqi <= 300) return 266;
  return 260;
}


function humanize(str: string) {
  if (!str) return "";
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const city = searchParams.get("city") || "Unknown City";
  const state = searchParams.get("state") || "";
  const country = searchParams.get("country") || "";
  const aqi = Number(searchParams.get("aqi") || 0);

  const cityText = humanize(city);
  const stateText = humanize(state);

  const baseUrl = "https://airniza.com/";
  const bgImage = `${baseUrl}/api/og-node?country=${country}&state=${state}&city=${city}&aqi=${aqi}`;

  const montserrat = await fetch(
    new URL("/fonts/Montserrat-Bold.ttf", req.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          position: "relative",
          display: "flex",
          fontFamily: "Montserrat",
        }}
      >
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
            left: leftAlign(aqi),
            top: 130,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
          }}
         >
          
          <div
  style={{
    display: "flex",
    alignItems: "center", // baseline feel yahin se aayega
    fontSize: 34,
    fontWeight: 700,
    lineHeight: 1,
  }}
>
  {/* LIVE DOT */}
  <div
    style={{
      width: 8,
      height: 8,
      borderRadius: 999,
      backgroundColor: "#ff4d4f",
      marginRight: 6,
      position: "relative",
      top: 6, // 👈 baseline nudge
      display: "flex",
    }}
  />

  {/* LIVE TEXT */}
  <div
    style={{
      display: "flex",
      fontSize: 14,
      fontWeight: 700,
      marginRight: 10,
      letterSpacing: 1,
      position: "relative",
      top: 6, // 👈 baseline nudge
      opacity: 0.85,
    }}
  >
    LIVE
  </div>

  {/* AQI */}
  <div style={{ display: "flex" }}>
    AQI
  </div>
</div>

          <div style={{ display: "flex", fontSize: 100, fontWeight: 900 }}>
            {aqi}
          </div>
        </div>

        {/* AQI STATUS */}
        <div
          style={{
            position: "absolute",
            left: 530,
            top: 180,
            display: "flex",
            color: "white",
            fontSize: 62,
            fontWeight: 900,
          }}
         >
          {getAQILabel(aqi)}
        </div>

       
        {/* GLASS LOCATION PANEL */}
<div
  style={{
    position: "absolute",
    bottom: 60,
    display: "flex",
    justifyContent: "center",
    width: "100%",
  }}
>
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "22px 36px",
      borderRadius: 16,
      backgroundColor: "rgba(0, 0, 0, 0.45)", // glass feel
      border: "1px solid rgba(255, 255, 255, 0.25)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
      color: "white",
    }}
  >
    {/* TOP LABEL */}
    <div
      style={{
        display: "flex",
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: 4,
        marginBottom: 8,
        opacity: 0.9,
      }}
    >
      {"AIR QUALITY INDEX • PM2.5"}
    </div>

    {/* LINE */}
    <div
      style={{
        display: "flex",
        width: 420,
        height: 2,
        backgroundColor: "white",
        opacity: 0.3,
        marginBottom: 14,
      }}
    />

    {/* LOCATION */}
    <div
      style={{
        display: "flex",
        fontSize: 42,
        fontWeight: 800,
        whiteSpace: "nowrap",
      }}
    >
      {`${cityText}, ${stateText}`}
    </div>
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
          Airniza.com
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Montserrat",
          data: montserrat,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
