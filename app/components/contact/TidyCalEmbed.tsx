import Script from "next/script";

// Same 15-minute booking the homepage tool's call button opens.
export function TidyCalEmbed() {
  return (
    <>
      <div
        className="tidycal-embed"
        data-path="latetwenties/15-minute-meeting"
      />
      <Script
        src="https://asset-tidycal.b-cdn.net/js/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
