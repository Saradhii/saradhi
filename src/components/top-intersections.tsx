export function TopIntersections() {
  return (
    <>
      {/* ========== INTERSECTION 1: LEFT SIDE ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="hidden sm:block absolute left-[-125px] top-[-1.5rem] sm:top-[-1.75rem] md:top-[-2rem]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="diagonalHatchTopOuterLeft"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(-45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="6"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#diagonalHatchTopOuterLeft)" />
      </svg>

      {/* Four corner dots for Intersection 1 */}
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[calc(-100px-27px)] top-[calc(-1.5rem-4px)] sm:top-[calc(-1.75rem-4px)] md:top-[calc(-2rem-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[-28px] top-[calc(-1.5rem-4px)] sm:top-[calc(-1.75rem-4px)] md:top-[calc(-2rem-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[calc(-100px-27px)] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem+100px-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[-28px] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem+100px-4px)]" />

      {/* ========== INTERSECTION 2: RIGHT SIDE ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="hidden sm:block absolute right-[-125px] top-[-1.5rem] sm:top-[-1.75rem] md:top-[-2rem]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="diagonalHatchTopOuterRight"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="6"
              stroke="hsl(var(--border))"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#diagonalHatchTopOuterRight)" />
      </svg>

      {/* Four corner dots for Intersection 2 */}
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[-28px] top-[calc(-1.5rem-4px)] sm:top-[calc(-1.75rem-4px)] md:top-[calc(-2rem-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[calc(-100px-27px)] top-[calc(-1.5rem-4px)] sm:top-[calc(-1.75rem-4px)] md:top-[calc(-2rem-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[-28px] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem+100px-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[calc(-100px-27px)] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem+100px-4px)]" />
    </>
  );
}
