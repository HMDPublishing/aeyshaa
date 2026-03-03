import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aeysha Mahmood — Author & Storyteller";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FFFAF7 0%, #FFF0F3 40%, #FADADD 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "Georgia, serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(183, 110, 121, 0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 200,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(248, 200, 216, 0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 80,
            transform: "translateY(-50%)",
            width: 2,
            height: 280,
            background: "rgba(183, 110, 121, 0.2)",
          }}
        />

        {/* Tag */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "rgba(183, 110, 121, 0.1)",
            border: "1px solid rgba(183, 110, 121, 0.3)",
            borderRadius: 100,
            padding: "8px 20px",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontSize: 16,
              color: "#B76E79",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            Children&apos;s Book Author
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#2D2D2D",
            lineHeight: 1.05,
            marginBottom: 8,
            letterSpacing: "-1px",
          }}
        >
          Aeysha
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#B76E79",
            fontStyle: "italic",
            lineHeight: 1.05,
            marginBottom: 28,
            letterSpacing: "-1px",
          }}
        >
          Mahmood
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "#B76E79",
            borderRadius: 2,
            marginBottom: 28,
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#6B6B6B",
            fontStyle: "italic",
            fontFamily: "Georgia, serif",
            marginBottom: 16,
          }}
        >
          Author. Storyteller. Publishing Visionary.
        </div>

        {/* URL */}
        <div
          style={{
            fontSize: 18,
            color: "#B76E79",
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.1em",
            opacity: 0.8,
          }}
        >
          aeyshaa.com
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
