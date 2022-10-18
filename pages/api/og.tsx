import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

const font = fetch(new URL("/assets/Helvetica-Bold.TTF", import.meta.url)).then(
  (res) => res.arrayBuffer()
);

async function OG() {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "#E8E8E3",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: "32px",
        }}
      >
        <div
          style={{
            display: "flex",
            textAlign: "right",
            color: "#4C5881",
            paddingLeft: "140px",
            fontWeight: "bold",
            lineHeight: "72px",
          }}
        >
          How many times can you listen to the All Too Well 10 minute version
          before Midnights launches?
        </div>
      </div>
    ),
    {
      width: 1000,
      height: 600,
      fonts: [
        {
          name: "Helvetica",
          data: fontData,
          style: "normal",
        },
      ],
    }
  );
}

export default OG;
