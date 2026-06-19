'use client';

import React, { useRef, useState, useEffect, MutableRefObject } from 'react';
import { motion } from 'framer-motion';

interface CursorPosition {
  left: number;
  width: number;
  opacity: number;
}

interface TabProps {
  children: React.ReactNode;
  setPosition: (pos: CursorPosition) => void;
  onClick: () => void;
  isSelected: boolean;
}

interface SlideTabsProps {
  tabs: { label: string; href: string }[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
}

const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, setPosition, onClick, isSelected }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          const el = (ref as MutableRefObject<HTMLLIElement | null>)?.current;
          if (!el) return;
          const { width } = el.getBoundingClientRect();
          setPosition({ left: el.offsetLeft, width, opacity: 1 });
        }}
        className="relative z-10 block cursor-pointer px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors md:px-5 md:py-2.5 md:text-[11px]"
        style={{ color: isSelected ? '#04081A' : 'rgba(255,255,255,0.55)', mixBlendMode: 'normal' }}
      >
        {children}
      </li>
    );
  }
);
Tab.displayName = 'Tab';

const Cursor = ({ position }: { position: CursorPosition }) => (
  <motion.li
    animate={{ ...position }}
    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    className="absolute z-0 h-8 rounded-full md:h-9"
    style={{ background: 'linear-gradient(90deg,#60A5FA 0%,#93C5FD 100%)' }}
  />
);

export function SlideTabs({ tabs, activeIndex = 0, onSelect }: SlideTabsProps) {
  const [position, setPosition] = useState<CursorPosition>({ left: 0, width: 0, opacity: 0 });
  const [selected, setSelected] = useState(activeIndex);
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const el = tabsRef.current[selected];
    if (el) {
      const { width } = el.getBoundingClientRect();
      setPosition({ left: el.offsetLeft, width, opacity: 1 });
    }
  }, [selected]);

  const handleSelect = (index: number) => {
    setSelected(index);
    onSelect?.(index);
  };

  return (
    <ul
      onMouseLeave={() => {
        const el = tabsRef.current[selected];
        if (el) {
          const { width } = el.getBoundingClientRect();
          setPosition({ left: el.offsetLeft, width, opacity: 1 });
        }
      }}
      className="relative flex w-fit rounded-full p-1"
      style={{
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={tab.label}
          ref={(el) => { tabsRef.current[i] = el; }}
          setPosition={setPosition}
          onClick={() => handleSelect(i)}
          isSelected={selected === i}
        >
          {tab.label}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}
