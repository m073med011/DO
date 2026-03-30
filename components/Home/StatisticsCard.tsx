
interface StatisticsCardProps {
  width?: string;
  height?: string;
  color?: string;
  textColor?: string;
  border?: string;
  title?: string;
  number?: string;
  "data-aos"?: string;
  "data-aos-duration"?: string;
  "data-aos-delay"?: string;
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function StatisticsCard({
  width,
  height,
  color,
  textColor,
  border,
  title,
  number,
  ...aosProps
}: StatisticsCardProps) {
  const borderWithOpacity = border
    ? hexToRgba(border, 0.3)
    : "rgba(0,0,0,0.5)";

  return (
    <div
      className="statistics-card flex flex-col items-center justify-center rounded-xl border-[0.5px]"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        borderColor: borderWithOpacity,
        boxShadow: "0 0 1px 0 rgba(255, 255, 255, 0.08), 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
      }}
      {...aosProps}
    >
      <h1
        className="text-5xl font-bold leading-[67.2px]"
        style={color ? { color } : undefined}
      >
        {number}
      </h1>
      {title && (
        <p
          className="mt-2 text-base font-normal"
          style={textColor ? { color: textColor } : undefined}
        >
          {title}
        </p>
      )}
    </div>
  );
}
