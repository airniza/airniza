import React from "react";

/* ✅ Props type define karo */
interface AdsterraProps {
  smartlinkUrl: string;
  cityName?: string;
}

const Adsterra: React.FC<AdsterraProps> = ({
  smartlinkUrl,
}) => {
  return (
    <div style={styles.wrapper}>
      <a
        href={smartlinkUrl}
        target="_blank"
        rel="nofollow sponsored"
        style={styles.button}
      >
        Continue to Live Air Quality Report
      </a>
      <p style={styles.note}>
        Free • Works best for US users
      </p>
    </div>
  );
};

export default Adsterra;

/* ✅ Strongly typed styles */
const styles: Record<string, React.CSSProperties> = {
  wrapper: {
    textAlign: "center",
    margin: "24px 0",
    padding: "16px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#0b5ed7",
    color: "#ffffff",
    padding: "14px 24px",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: 600,
    textDecoration: "none",
  },
  note: {
    fontSize: "12px",
    color: "#666",
    marginTop: "8px",
  },
};
