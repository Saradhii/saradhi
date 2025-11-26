export function TopIntersections() {
  return (
    <>
      {/* ========== INTERSECTION 1: Upper horizontal (-1.5rem/-24px) × Outer left vertical (-100px) ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="absolute left-[-125px] top-[-1.5rem] sm:top-[-1.75rem] md:top-[-2rem]"
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
      {/* Top-left corner: outer left vertical (-100px) meets upper horizontal */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-27px)] top-[calc(-1.5rem-4px)] sm:top-[calc(-1.75rem-4px)] md:top-[calc(-2rem-4px)]" />
      {/* Top-right corner: inner left vertical (0) meets upper horizontal */}
      <div className="absolute w-2 h-2 bg-foreground left-[-28px] top-[calc(-1.5rem-4px)] sm:top-[calc(-1.75rem-4px)] md:top-[calc(-2rem-4px)]" />
      {/* Bottom-left corner: outer left vertical meets bottom of square (upper + 100px) */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-27px)] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem+100px-4px)]" />
      {/* Bottom-right corner: inner left vertical meets bottom of square */}
      <div className="absolute w-2 h-2 bg-foreground left-[-28px] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem+100px-4px)]" />

      {/* ========== INTERSECTION 2: Lower horizontal (calc(-1.5rem+100px)/76px) × Outer left vertical (-100px) ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="absolute left-[645px] top-[-1.5rem] sm:top-[-1.75rem] md:top-[-2rem]"
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

      {/* Four corner dots for Intersection 2 */}
      {/* Top-left corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(647px-4px)] top-[calc(-1.5rem-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem-4px)]" /> 
      {/* Top-right corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[741px] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+100px-4px)] md:top-[calc(-2rem-4px)]" /> 
      {/* Bottom-left corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(647px-4px)] top-[calc(-1.5rem+100px-4px)] sm:top-[calc(-1.75rem+200px-4px)] md:top-[calc(-2rem+100px-4px)]" /> 
      {/* Bottom-right corner */}
      <div className="absolute w-2 h-2 bg-foreground left-[741px] top-[calc(-1.5rem+200px-4px)] sm:top-[calc(-1.75rem+200px-4px)] md:top-[calc(-2rem+100px-4px)]" />
    </>
  );
}
