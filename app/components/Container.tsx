import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
};

const widthClass: Record<NonNullable<ContainerProps["width"]>, string> = {
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  narrow: "max-w-3xl",
};

export function Container({
  children,
  className = "",
  width = "default",
}: ContainerProps) {
  return (
    <div
      className={`${widthClass[width]} mx-auto px-6 sm:px-10 lg:px-14 ${className}`}
    >
      {children}
    </div>
  );
}
