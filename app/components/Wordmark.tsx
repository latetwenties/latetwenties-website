type WordmarkProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function Wordmark({ width, height, className = "" }: WordmarkProps) {
  const w = width ?? (height ? height * 5 : 168);
  return (
    <span
      role="img"
      aria-label="Latetwenties"
      className={className}
      style={{
        display: "inline-block",
        width: w,
        aspectRatio: "5 / 1",
        backgroundColor: "currentColor",
        WebkitMaskImage: "url(/latetwenties-logo-pro.svg)",
        maskImage: "url(/latetwenties-logo-pro.svg)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
      }}
    />
  );
}
