import { ReactNode } from "react";

type EyebrowProps = {
  num?: string;
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ num, children, className = "" }: EyebrowProps) {
  return (
    <div className={`eyebrow ${className}`.trim()}>
      {num && <span className="num">{num}</span>}
      {children}
    </div>
  );
}
