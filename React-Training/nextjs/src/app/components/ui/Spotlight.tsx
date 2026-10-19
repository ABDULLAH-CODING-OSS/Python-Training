import { cn } from "@/utils/cn";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export function Spotlight({
  className,
  fill = "rgba(99, 102, 241, 0.22)",
}: SpotlightProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full blur-3xl",
        className,
      )}
      style={{
        background: `radial-gradient(ellipse at center, ${fill} 0%, transparent 68%)`,
      }}
    />
  );
}