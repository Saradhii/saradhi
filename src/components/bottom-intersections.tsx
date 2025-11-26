export function BottomIntersections() {
  return (
    <>
      {/* ========== BOTTOM LEFT INTERSECTION 1: Lower horizontal × Outer left vertical ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="absolute left-[-125px] bottom-[1.5rem] sm:bottom-[1.75rem] md:bottom-[0rem]"
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

      {/* Four corner dots for Bottom Left Intersection 1 */}
      {/* Top-left corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-27px)] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      {/* Top-right corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[-28px] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      {/* Bottom-left corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-27px)] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />
      {/* Bottom-right corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[-28px] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />

      {/* ========== BOTTOM LEFT INTERSECTION 2: Upper horizontal × Outer left vertical ========== */}
      {/* Diagonal pattern square - 100x100px */}
      {/* <svg
        className="absolute left-[-125px] bottom-[calc(1.5rem+100px)] sm:bottom-[calc(1.75rem+100px)] md:bottom-[calc(2rem+100px)]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="diagonalHatchBottomLeft2"
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
        <rect width="100" height="100" fill="url(#diagonalHatchBottomLeft2)" />
      </svg> */}

      {/* Four corner dots for Bottom Left Intersection 2 */}
      {/* Top-left corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-27px)] bottom-[calc(1.5rem+200px-4px)] sm:bottom-[calc(1.75rem+200px-4px)] md:bottom-[calc(2rem+200px-4px)]" /> */}
      {/* Top-right corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[-28px] bottom-[calc(1.5rem+200px-4px)] sm:bottom-[calc(1.75rem+200px-4px)] md:bottom-[calc(2rem+200px-4px)]" /> */}
      {/* Bottom-left corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-27px)] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+100px-4px)]" /> */}
      {/* Bottom-right corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[-28px] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+100px-4px)]" /> */}

      {/* ========== BOTTOM RIGHT INTERSECTION 1: Lower horizontal × Right vertical ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="absolute left-[645px] bottom-[1.5rem] sm:bottom-[1.75rem] md:bottom-[0rem]"
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

      {/* Four corner dots for Bottom Right Intersection 1 */}
      {/* Top-left corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(647px-4px)] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      {/* Top-right corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[741px] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+68px-4px)]" />
      {/* Bottom-left corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(647px-4px)] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />
      {/* Bottom-right corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[741px] bottom-[calc(1.5rem-4px)] sm:bottom-[calc(1.75rem-4px)] md:bottom-[calc(0rem-4px)]" />

      {/* ========== BOTTOM RIGHT INTERSECTION 2: Upper horizontal × Right vertical ========== */}
      {/* Diagonal pattern square - 100x100px */}
      {/* <svg
        className="absolute left-[645px] bottom-[calc(1.5rem+100px)] sm:bottom-[calc(1.75rem+100px)] md:bottom-[calc(2rem+100px)]"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="diagonalHatchBottomRight2"
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
        <rect width="100" height="100" fill="url(#diagonalHatchBottomRight2)" />
      </svg> */}

      {/* Four corner dots for Bottom Right Intersection 2 */}
      {/* Top-left corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[calc(647px-4px)] bottom-[calc(1.5rem+200px-4px)] sm:bottom-[calc(1.75rem+200px-4px)] md:bottom-[calc(2rem+200px-4px)]" /> */}
      {/* Top-right corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[741px] bottom-[calc(1.5rem+200px-4px)] sm:bottom-[calc(1.75rem+200px-4px)] md:bottom-[calc(2rem+200px-4px)]" /> */}
      {/* Bottom-left corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[calc(647px-4px)] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+100px-4px)]" /> */}
      {/* Bottom-right corner */}
      {/* <div className="absolute w-2 h-2 bg-foreground left-[741px] bottom-[calc(1.5rem+100px-4px)] sm:bottom-[calc(1.75rem+100px-4px)] md:bottom-[calc(2rem+100px-4px)]" /> */}
    </>
  );
}
