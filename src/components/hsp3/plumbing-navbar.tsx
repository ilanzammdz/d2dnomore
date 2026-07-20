"use client";

import { useState } from "react";
import { Menu, X, PhoneCall } from "lucide-react";
import { Button } from "@/components/hsp3/ui/button";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Resources", href: "#articles" },
];

const EMERGENCY_PHONE = "+1 (800) 555-9110";
const EMERGENCY_PHONE_HREF = "tel:+18005559110";

export function PlumbingNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="bg-accent px-4 py-1.5 text-center text-xs font-semibold text-accent-foreground">
        24/7 Emergency Plumbing &mdash; Call Now:{" "}
        <a href={EMERGENCY_PHONE_HREF} className="underline underline-offset-2">
          {EMERGENCY_PHONE}
        </a>
      </div>
      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-heading text-lg font-extrabold tracking-tight text-primary">
              Pro Plumbers<span className="text-accent"> USA</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="outline"
              size="sm"
              className="border-accent/40 text-accent hover:bg-accent/10 hover:text-accent"
              render={<a href={EMERGENCY_PHONE_HREF} />} nativeButton={false}
            >
              <PhoneCall className="h-4 w-4" />
              Emergency Call
            </Button>
            <Button size="sm" render={<a href="#booking" />} nativeButton={false}>
              Book Online
            </Button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent/40 text-accent hover:bg-accent/10 hover:text-accent"
                  render={<a href={EMERGENCY_PHONE_HREF} />} nativeButton={false}
                >
                  <PhoneCall className="h-4 w-4" />
                  Emergency Call
                </Button>
                <Button size="sm" render={<a href="#booking" />} nativeButton={false}>
                  Book Online
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
