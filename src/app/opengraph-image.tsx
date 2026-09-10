import { ImageResponse } from "next/og";

export const alt = "Anas Khan — Embedded Systems, RFID & Firmware Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#060708",
          padding: "72px",
          color: "#e8eaed",
          fontFamily: "sans-serif",
        }}
      >
        {/* top accent bar */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 72,
              height: 4,
              borderRadius: 4,
              background: "linear-gradient(90deg, #0ea5e9, #38bdf8, #22d3ee)",
              display: "flex",
            }}
          />
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              letterSpacing: 6,
              color: "#7dd3fc",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Embedded · Firmware · RFID
          </div>
        </div>

        {/* name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 1, display: "flex" }}>
            Anas Khan
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 40,
              color: "#9aa2ab",
              display: "flex",
            }}
          >
            Firmware from the register level up.
          </div>
        </div>

        {/* footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "#6a727c",
          }}
        >
          <div style={{ display: "flex", color: "#7dd3fc" }}>
            github.com/namesanas
          </div>
          <div style={{ display: "flex" }}>New Delhi, India</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
