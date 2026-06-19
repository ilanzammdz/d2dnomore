'use client';

import { useEffect, useState, useCallback } from 'react';
import { SlideTabs } from './slide-tabs';

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/pLI3PnyKImdzfniX1AEE';

const NAV_TABS = [
  { label: 'Home',       href: '#home' },
  { label: 'Compare',   href: '#compare' },
  { label: 'Industries', href: '#industries' },
  { label: 'AI Chat',   href: '#ai-chat' },
  { label: 'AI SEO',    href: '#ai-seo' },
  { label: 'AI Voice',  href: '#ai-voice' },
];

const SECTION_IDS = ['home', 'compare', 'industries', 'ai-chat', 'ai-seo', 'ai-voice'];

export function D2DNavbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the nav tab that corresponds to the section currently in view
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const offsets = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        return el ? el.getBoundingClientRect().top : Infinity;
      });

      // Find the last section whose top is above 40% of the viewport
      const threshold = window.innerHeight * 0.4;
      let current = 0;
      offsets.forEach((top, i) => {
        if (top <= threshold) current = i;
      });
      setActiveIndex(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelect = useCallback((index: number) => {
    const id = SECTION_IDS[index];
    const el = document.getElementById(id);
    if (el) {
      // Offset by navbar height (68px)
      const top = el.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 transition-all duration-300"
      style={{
        height: '68px',
        background: scrolled
          ? 'rgba(4,8,26,0.85)'
          : 'rgba(4,8,26,0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled
          ? '1px solid rgba(37,99,235,0.12)'
          : '1px solid transparent',
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        onClick={(e) => { e.preventDefault(); handleSelect(0); }}
        className="flex items-center gap-2 select-none"
      >
        <span
          className="text-lg font-black tracking-tight"
          style={{
            background: 'linear-gradient(90deg,#60A5FA 0%,#93C5FD 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          D2D
        </span>
        <span className="text-white font-bold text-lg tracking-tight hidden sm:inline">
          No More
        </span>
      </a>

      {/* Slide tabs — hidden on very small screens */}
      <div className="hidden md:block">
        <SlideTabs
          tabs={NAV_TABS}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        />
      </div>

      {/* Mobile tab pill — only show section name */}
      <div className="block md:hidden">
        <span
          className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
          style={{
            background: 'rgba(96,165,250,0.12)',
            border: '1px solid rgba(96,165,250,0.2)',
            color: '#93C5FD',
          }}
        >
          {NAV_TABS[activeIndex].label}
        </span>
      </div>

      {/* CTA */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
        style={{
          background: 'linear-gradient(90deg,#1D4ED8 0%,#2563EB 100%)',
          boxShadow: '0 0 20px rgba(37,99,235,0.3)',
        }}
      >
        Book a Call
      </a>
    </header>
  );
}
