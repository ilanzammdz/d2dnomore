'use client';

import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;

/**
 * Returns true on mobile viewports (< 768px), false on desktop, null during SSR.
 * Also checks for touch capability as a secondary signal.
 */
export function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      const byWidth = window.innerWidth < MOBILE_BREAKPOINT;
      const byTouch = window.matchMedia('(pointer: coarse)').matches;
      setIsMobile(byWidth || byTouch);
    };

    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);

  return isMobile;
}

/**
 * Server-side user-agent detection for use in Server Components or middleware.
 * Pass the User-Agent header string directly.
 */
export function isMobileUA(ua: string): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
}
