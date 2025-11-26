export function GridDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* LEFT SIDE - Double vertical lines */}
      <div className="absolute left-[5%] top-0 bottom-0 w-px bg-border/50" />
      <div className="absolute left-[calc(5%+100px)] top-0 bottom-0 w-px bg-border/50" />

      {/* RIGHT SIDE - Double vertical lines */}
      <div className="absolute right-[5%] top-0 bottom-0 w-px bg-border/50" />
      <div className="absolute right-[calc(5%+100px)] top-0 bottom-0 w-px bg-border/50" />

      {/* HORIZONTAL double lines - upper band */}
      <div className="absolute top-[55%] left-0 right-0 h-px bg-border/50" />
      <div className="absolute top-[calc(55%+100px)] left-0 right-0 h-px bg-border/50" />

      {/* LEFT Intersection square with diagonal lines */}
      <svg className="absolute left-[5%] top-[55%]" width="100" height="100" viewBox="0 0 100 100">
        <defs>
          <pattern
            id="diagonalHatchLeft"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(-45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(var(--border))" strokeWidth="1" strokeOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#diagonalHatchLeft)" />
      </svg>

      {/* RIGHT Intersection square with diagonal lines */}
      <svg className="absolute right-[calc(5%+100px)] top-[55%]" width="100" height="100" viewBox="0 0 100 100">
        <defs>
          <pattern
            id="diagonalHatchRight"
            patternUnits="userSpaceOnUse"
            width="6"
            height="6"
            patternTransform="rotate(45)"
          >
            <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(var(--border))" strokeWidth="1" strokeOpacity="0.5" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#diagonalHatchRight)" />
      </svg>

      {/* LEFT Corner squares - black markers */}
      <div className="absolute left-[calc(5%-4px)] top-[calc(55%-4px)] w-2 h-2 bg-foreground" />
      <div className="absolute left-[calc(5%+100px-4px)] top-[calc(55%-4px)] w-2 h-2 bg-foreground" />
      <div className="absolute left-[calc(5%-4px)] top-[calc(55%+100px-4px)] w-2 h-2 bg-foreground" />
      <div className="absolute left-[calc(5%+100px-4px)] top-[calc(55%+100px-4px)] w-2 h-2 bg-foreground" />

      {/* RIGHT Corner squares - black markers */}
      <div className="absolute right-[calc(5%-4px)] top-[calc(55%-4px)] w-2 h-2 bg-foreground" />
      <div className="absolute right-[calc(5%+100px-4px)] top-[calc(55%-4px)] w-2 h-2 bg-foreground" />
      <div className="absolute right-[calc(5%-4px)] top-[calc(55%+100px-4px)] w-2 h-2 bg-foreground" />
      <div className="absolute right-[calc(5%+100px-4px)] top-[calc(55%+100px-4px)] w-2 h-2 bg-foreground" />

      {/* Additional horizontal lines in lower section */}
      <div className="absolute top-[75%] left-[25%] right-[5%] h-px bg-border/30" />
      <div className="absolute top-[85%] left-[25%] right-[5%] h-px bg-border/30" />
      <div className="absolute top-[95%] left-[25%] right-[5%] h-px bg-border/30" />
    </div>
  );
}
