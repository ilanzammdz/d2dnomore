"use client"

import * as React from "react";
import { cn } from "@/lib/utils";

interface AuroraButtonOwnProps {
  className?: string;
  children: React.ReactNode;
  glowClassName?: string;
}

type AuroraButtonProps =
  | (AuroraButtonOwnProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (AuroraButtonOwnProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string });

export function AuroraButton({
  className,
  children,
  glowClassName,
  href,
  ...props
}: AuroraButtonProps) {
  const innerClassName = cn(
    "relative rounded-lg bg-slate-950/90 px-4 py-2",
    "text-slate-100 shadow-xl",
    "transition-all hover:bg-slate-950/70",
    "border border-slate-800",
    className
  );

  return (
    <div className="group relative inline-block">
      {/* Gradient border container */}
      <div
        className={cn(
          "absolute -inset-[2px] rounded-lg bg-gradient-to-r from-purple-500 via-cyan-300 to-emerald-400 opacity-75 blur-lg transition-all",
          "group-hover:opacity-100 group-hover:blur-xl",
          glowClassName
        )}
      />

      {href ? (
        <a
          href={href}
          className={innerClassName}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      ) : (
        <button
          className={innerClassName}
          {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {children}
        </button>
      )}
    </div>
  );
}
