import React from "react";

interface AirQualityBarProps {
  value: number | string;
}

const AirQualityBar: React.FC<AirQualityBarProps> = ({ value }) => {
  const segments = [
    { start: 0, end: 50, label: "Good", color: "#00e400" },
    { start: 50, end: 100, label: "Moderate", color: "#ffff00" },
    { start: 100, end: 150, label: "Poor", color: "#ff7e00" },
    { start: 150, end: 200, label: "Unhealthy", color: "#ff0000" },
    { start: 200, end: 300, label: "Severe", color: "#9c27b0" },
    { start: 300, end: 301, label: "Hazardous", color: "#b71c1c" }, // 300+ fix
  ];

  const maxAQI = 301;
  const numeric = Number(value);
  const safeValue = Number.isFinite(numeric)
    ? Math.max(0, Math.min(numeric, maxAQI))
    : 0;

  const pointerPercent = (safeValue / maxAQI) * 100;

  return (
    <div style={{ width: "100%" }}>
      {/* Conditions Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "clamp(10px, 1.8vw, 12px)",
          fontWeight: "400",
          marginBottom: 4,
        }}
      >
        {segments.map((seg, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            {seg.label}
          </div>
        ))}
      </div>

      {/* Bar */}
      <div
        style={{
          position: "relative",
          display: "flex",
          height: 6,
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              backgroundColor: seg.color,
            }}
          />
        ))}

        {/* Pointer */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: `${pointerPercent}%`,
            width: 6,
            height: 6,
            background: "#fff",
            border: "2px solid #333333",
            borderRadius: "50%",
            transform: "translateX(-50%)",
            transition: "left 0.3s ease",
          }}
        />
      </div>

      {/* Numbers Row */}
      <div
        style={{
          display: "flex",
          fontSize: "clamp(9px, 2vw, 14px)",
          marginTop: 4,
        }}
      >
        {segments.map((seg, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              display: "flex",
              justifyContent:
                i === segments.length - 1
                  ? "space-between"
                  : "flex-start",
            }}
          >
            <span>{seg.start}</span>
            {i === segments.length - 1 && <span>{`${seg.end}+`}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirQualityBar;
