interface OrnamentProps {
  className?: string;
}

export function Mandala({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.6"
    >
      <g transform="translate(300 300)">
        {Array.from({ length: 24 }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / 24) * i})`}>
            <path d="M0 -260 L8 -200 L0 -140 L-8 -200 Z" />
            <circle cx="0" cy="-220" r="3" />
            <path d="M0 -180 Q14 -150 0 -120 Q-14 -150 0 -180 Z" />
          </g>
        ))}
        {[260, 220, 180, 140, 100, 60, 30].map((r) => (
          <circle key={r} r={r} />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / 12) * i})`}>
            <path d="M0 -100 Q22 -70 0 -40 Q-22 -70 0 -100 Z" />
          </g>
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / 8) * i})`}>
            <path d="M0 -55 L6 -30 L0 -8 L-6 -30 Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function Rosette({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    >
      <g transform="translate(150 150)">
        {[140, 110, 80, 50, 20].map((r) => (
          <circle key={r} r={r} />
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / 16) * i})`}>
            <path d="M0 -140 L5 -110 L0 -80 L-5 -110 Z" />
          </g>
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / 8) * i})`}>
            <path d="M0 -70 Q14 -45 0 -20 Q-14 -45 0 -70 Z" />
          </g>
        ))}
      </g>
    </svg>
  );
}
