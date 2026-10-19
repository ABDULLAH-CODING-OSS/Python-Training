import { cn } from "@/utils/cn";
import type { CSSProperties } from "react";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

type SpotlightStyle = CSSProperties & {
  "--spotlight-color": string;
};

export function Spotlight({
  className,
  fill = "#ffffff",
}: SpotlightProps) {
  const spotlightStyle: SpotlightStyle = { "--spotlight-color": fill };

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 z-0 overflow-hidden",
        className,
      )}
      style={spotlightStyle}
    >
      <div className="spotlight-glow absolute -left-[35%] -top-[65%] h-[145%] w-[120%]" />
      <div className="spotlight-beam absolute -left-[20%] -top-[55%] h-[145%] w-[120%]" />
    </div>
  );
}