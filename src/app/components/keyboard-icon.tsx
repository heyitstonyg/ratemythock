"use client";

export function KeyboardIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="6"
        width="20"
        height="12"
        rx="2"
        className="stroke-current"
        strokeWidth="2"
      />
      <path
        d="M6 10H7M10 10H11M13 10H14M16 10H17M8 14H16M6 14H7M17 14H18"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
