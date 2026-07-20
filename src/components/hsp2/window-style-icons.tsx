type IconProps = { className?: string };

const base = "h-8 w-8";

export function DoubleHungIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <path d="M9 8l3-2 3 2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 16l3 2 3-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CasementIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="4" y1="3" x2="20" y2="12" />
      <line x1="4" y1="21" x2="20" y2="12" />
      <path d="M16 8l3 1-1 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SlidingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M14 12h5m0 0l-2-2m2 2l-2 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AwningIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="4" y1="3" x2="20" y2="3" />
      <path d="M9 10l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" transform="translate(0,4)" />
    </svg>
  );
}

export function BayBowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 21V8l4-4h8l4 4v13" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="4" x2="8" y2="21" />
      <line x1="16" y1="4" x2="16" y2="21" />
    </svg>
  );
}

export function GardenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M6 21V9l2-3h8l2 3v12" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="6" y1="14" x2="18" y2="14" />
      <line x1="9" y1="21" x2="9" y2="14" />
      <line x1="15" y1="21" x2="15" y2="14" />
    </svg>
  );
}

export function PictureIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M4 15l4-4 3 3 5-6 4 5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

export function HopperIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <line x1="4" y1="21" x2="20" y2="21" />
      <path d="M9 10l3-3 3 3" strokeLinecap="round" strokeLinejoin="round" transform="translate(0,4)" />
    </svg>
  );
}

export function GeometricIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 21V11L12 3l8 8v10" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4" y1="21" x2="20" y2="21" />
      <line x1="12" y1="7" x2="12" y2="21" />
    </svg>
  );
}

export function EgressIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <line x1="3" y1="3" x2="21" y2="18" opacity="0.5" />
      <path d="M14 8l4 1-1 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
