import { cn } from "@/lib/utils";

export function StickyOrnaments({ className }: { className?: string }) {
  return (
    <>
      <Ornament className={cn("top-0 left-0 rotate-90", className)} />
      <Ornament className={cn("top-0 right-0 rotate-180", className)} />
      <Ornament className={cn("bottom-0 left-0", className)} />
      <Ornament className={cn("bottom-0 right-0 -rotate-90", className)} />
    </>
  );
}

function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed select-none z-40 ${className}`}
      style={{
        backgroundImage: "url('/pattern.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "3rem",
        height: "3rem",
      }}
    />
  );
}
