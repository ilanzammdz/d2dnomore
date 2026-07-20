type IconProps = { className?: string };

const base = "h-8 w-8";

export function LeakRepairIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h9a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3H9" strokeLinecap="round" />
      <path d="M12 17c1.4 0 2.5-1.1 2.5-2.4 0-1.4-2.5-4.6-2.5-4.6s-2.5 3.2-2.5 4.6c0 1.3 1.1 2.4 2.5 2.4z" />
    </svg>
  );
}

export function DrainCleaningIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="10" r="7" />
      <path d="M9 8.5c0-1 .8-1.5 1.7-1.5.9 0 1.3.5 1.3 1s-.4.9-1 1.1c-.7.2-1.3.6-1.3 1.4 0 .8.7 1.3 1.5 1.3s1.3-.4 1.5-1" strokeLinecap="round" />
      <path d="M12 17v4M9 21h6" strokeLinecap="round" />
    </svg>
  );
}

export function WaterHeaterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="7" y="4" width="10" height="17" rx="3" />
      <path d="M10 9l1.5-2 1.5 2 1.5-2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="15" x2="15" y2="15" strokeLinecap="round" />
    </svg>
  );
}

export function RepipingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 6h6v6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="6" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="16" cy="18" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SumpPumpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M5 20V9a7 7 0 0 1 14 0v11" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="20" x2="21" y2="20" strokeLinecap="round" />
      <path d="M12 6v6l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function EmergencyServiceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
