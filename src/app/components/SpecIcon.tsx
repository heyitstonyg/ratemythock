"use client";

interface SpecIconProps {
  type: "switches" | "case" | "mounting";
  className?: string;
}

export function SpecIcon({ type, className = "w-4 h-4" }: SpecIconProps) {
  const icons = {
    switches: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 8h16v8H4V8zm2 2v4h12v-4H6z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
    case: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M20 5H4v14h16V5zM4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
    mounting: (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 4a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V5a1 1 0 00-1-1H7zM4 5a3 3 0 013-3h10a3 3 0 013 3v14a3 3 0 01-3 3H7a3 3 0 01-3-3V5z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return icons[type];
}
