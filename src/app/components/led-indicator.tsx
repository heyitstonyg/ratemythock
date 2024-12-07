interface LedIndicatorProps {
  active?: boolean;
  color?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  label?: string;
  className?: string;
}

export function LedIndicator({
  active = false,
  color = "primary",
  size = "sm",
  pulse = false,
  label,
  className = "",
}: LedIndicatorProps) {
  const sizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  const colorClasses = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    destructive: "bg-destructive",
  };

  const baseClasses = `
    relative rounded-full transition-all duration-300
    ${sizeClasses[size]}
    ${
      active
        ? `
      ${colorClasses[color]}
      shadow-[0_0_8px_rgba(var(--${color}-rgb),0.6),0_0_12px_rgba(var(--${color}-rgb),0.4)]
      ${pulse ? "animate-led-pulse" : ""}
    `
        : "bg-muted"
    }
  `;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={baseClasses}>
        {/* Inner glow effect */}
        <div
          className={`
            absolute inset-0 rounded-full
            ${active ? `${colorClasses[color]}/30` : "bg-transparent"}
            transition-all duration-300
          `}
        />
      </div>

      {label && (
        <span className="technical-label text-xs text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  );
}
