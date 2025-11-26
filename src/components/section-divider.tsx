export function SectionDivider() {
  return (
    <div className="section-divider">
      {/* ========== TOP LEFT INTERSECTION (100px gap between verticals) ========== */}
      {/* Diagonal pattern square - 100x100px */}
      <svg
        className="absolute left-[-100px] top-0"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <defs>
          <pattern
            id="diagonalHatchTopLeft"
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
        <rect width="100" height="100" fill="url(#diagonalHatchTopLeft)" />
      </svg>

      {/* Four corner dots for TOP LEFT square - 8px squares, offset -4px to center on 1px lines */}
      {/* Top-left corner: outer left vertical (-100px) meets top horizontal (0) */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-4px)] top-[-4px]" />

      {/* Top-right corner: inner left vertical (0px) meets top horizontal (0) */}
      <div className="absolute w-2 h-2 bg-foreground left-[-4px] top-[-4px]" />

      {/* Bottom-left corner: outer left vertical (-100px) meets bottom of square (100px) */}
      <div className="absolute w-2 h-2 bg-foreground left-[calc(-100px-4px)] top-[96px]" />

      {/* Bottom-right corner: inner left vertical (0px) meets bottom of square (100px) */}
      <div className="absolute w-2 h-2 bg-foreground left-[-4px] top-[96px]" />
    </div>
  );
}
