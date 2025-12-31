export function BottomIntersections() {
  return (
    <>
      {/* ========== BOTTOM LEFT INTERSECTION ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="hidden sm:block absolute left-[-125px] bottom-[1.5rem] sm:bottom-[1.75rem] md:bottom-[0rem]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="diagonalHatchBottomLeft1"
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
        <rect width="100" height="100" fill="url(#diagonalHatchBottomLeft1)" />
      </svg>

      {/* Four corner dots for Bottom Left Intersection */}
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[calc(-100px-27px)] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[-28px] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[calc(-100px-27px)] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground left-[-28px] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />

      {/* ========== BOTTOM RIGHT INTERSECTION ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="hidden sm:block absolute right-[-125px] bottom-[1.5rem] sm:bottom-[1.75rem] md:bottom-[0rem]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="diagonalHatchBottomRight1"
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
        <rect width="100" height="100" fill="url(#diagonalHatchBottomRight1)" />
      </svg>

      {/* Four corner dots for Bottom Right Intersection */}
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[-28px] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[calc(-100px-27px)] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[-28px] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />
      <div className="hidden sm:block absolute z-10 w-2 h-2 bg-foreground right-[calc(-100px-27px)] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />
    </>
  );
}
