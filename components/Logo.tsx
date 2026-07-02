interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="A3 Technologies Logo"
    >
      <path
        d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M50 10 L50 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path
        d="M10 30 L90 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <path
        d="M10 70 L90 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <rect x="35" y="35" width="30" height="30" fill="currentColor" opacity="0.9" />
      <text
        x="50"
        y="57"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="16"
        textAnchor="middle"
        fill="#10131a"
      >
        A3
      </text>
    </svg>
  );
}
