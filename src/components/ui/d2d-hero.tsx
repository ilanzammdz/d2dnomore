"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  Phone,
  MessageSquare,
  Calendar,
  X,
  PhoneCall,
  ChevronRight,
  Zap,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Client Configuration ────────────────────────────────────────────────────
const AI_PHONE_NUMBER = "+1 (312) 854-2453";
const AI_PHONE_HREF = "tel:+13128542453";
const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/pLI3PnyKImdzfniX1AEE";

const INDUSTRIES = [
  "Solar",
  "Roofing",
  "Windows",
  "Bath Remodel",
  "Kitchen Remodel",
  "Siding",
  "Plumbing",
  "Electrical Work",
  "HVAC",
] as const;

type Industry = (typeof INDUSTRIES)[number];

// ─── Injected Styles ─────────────────────────────────────────────────────────
const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  .film-grain {
    position: absolute; inset: 0; width: 100%; height: 100%;
    pointer-events: none; z-index: 50; opacity: 0.04; mix-blend-mode: overlay;
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%25" height="100%25" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-d2d {
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(37,99,235,0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(37,99,235,0.07) 1px, transparent 1px);
    mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* Floating circuit accent lines */
  .circuit-line {
    position: absolute; pointer-events: none; opacity: 0.15;
    background: linear-gradient(90deg, transparent, rgba(37,99,235,0.6), transparent);
  }

  /* Hero text effects */
  .text-3d-d2d {
    color: #e8edf5;
    text-shadow:
      0 10px 30px rgba(37,99,235,0.2),
      0 2px 4px rgba(0,0,0,0.4);
  }

  .text-silver-d2d {
    background: linear-gradient(170deg, #FFFFFF 0%, #60A5FA 45%, #93C5FD 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 8px 20px rgba(37,99,235,0.35))
      drop-shadow(0px 2px 4px rgba(0,0,0,0.5));
  }

  .text-card-silver {
    background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateZ(0);
    filter:
      drop-shadow(0px 12px 24px rgba(0,0,0,0.8))
      drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* The main dark navy card */
  .d2d-depth-card {
    background: linear-gradient(145deg, #0E2147 0%, #060D1F 100%);
    box-shadow:
      0 40px 100px -20px rgba(0,0,0,0.95),
      0 20px 40px -20px rgba(0,0,0,0.85),
      inset 0 1px 2px rgba(255,255,255,0.12),
      inset 0 -2px 4px rgba(0,0,0,0.9),
      0 0 0 1px rgba(37,99,235,0.08);
    position: relative;
  }

  .card-sheen {
    position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
    background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(37,99,235,0.08) 0%, transparent 40%);
    mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Blue scan line animation */
  @keyframes scanLine {
    0% { transform: translateY(-100%); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
  }
  .scan-line {
    position: absolute; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(37,99,235,0.5), rgba(96,165,250,0.8), rgba(37,99,235,0.5), transparent);
    animation: scanLine 8s ease-in-out infinite;
    pointer-events: none; z-index: 5;
  }

  /* Realistic iPhone Hardware */
  .iphone-bezel {
    background-color: #111;
    box-shadow:
      inset 0 0 0 2px #52525B,
      inset 0 0 0 7px #000,
      0 40px 80px -15px rgba(0,0,0,0.95),
      0 15px 25px -5px rgba(0,0,0,0.8),
      0 0 40px rgba(37,99,235,0.15);
    transform-style: preserve-3d;
  }

  .hardware-btn {
    background: linear-gradient(90deg, #404040 0%, #171717 100%);
    box-shadow:
      -2px 0 5px rgba(0,0,0,0.8),
      inset -1px 0 1px rgba(255,255,255,0.15),
      inset 1px 0 2px rgba(0,0,0,0.8);
    border-left: 1px solid rgba(255,255,255,0.05);
  }

  .screen-glare {
    background: linear-gradient(110deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
    background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
    box-shadow:
      0 10px 20px rgba(0,0,0,0.35),
      inset 0 1px 1px rgba(255,255,255,0.05),
      inset 0 -1px 1px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.04);
  }

  .floating-ui-badge {
    background: linear-gradient(135deg, rgba(37,99,235,0.12) 0%, rgba(255,255,255,0.02) 100%);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow:
      0 0 0 1px rgba(37,99,235,0.2),
      0 25px 50px -12px rgba(0,0,0,0.85),
      inset 0 1px 1px rgba(255,255,255,0.12),
      inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Primary D2D Blue CTA Button */
  .btn-d2d-primary {
    background: linear-gradient(135deg, #1D4ED8 0%, #2563EB 50%, #1E40AF 100%);
    color: #FFFFFF;
    box-shadow:
      0 0 0 1px rgba(37,99,235,0.4),
      0 2px 4px rgba(0,0,0,0.5),
      0 12px 32px -4px rgba(37,99,235,0.5),
      inset 0 1px 1px rgba(255,255,255,0.25),
      inset 0 -3px 6px rgba(0,0,0,0.3);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-d2d-primary:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #2563EB 0%, #3B82F6 50%, #2563EB 100%);
    box-shadow:
      0 0 0 1px rgba(59,130,246,0.6),
      0 6px 12px -2px rgba(37,99,235,0.5),
      0 20px 40px -6px rgba(37,99,235,0.7),
      inset 0 1px 1px rgba(255,255,255,0.3),
      0 0 50px rgba(59,130,246,0.3);
  }
  .btn-d2d-primary:active {
    transform: translateY(1px);
    box-shadow: 0 0 0 1px rgba(37,99,235,0.3), inset 0 3px 6px rgba(0,0,0,0.4);
  }

  /* Secondary Dark Button */
  .btn-d2d-dark {
    background: linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%);
    color: #FFFFFF;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.1),
      0 2px 4px rgba(0,0,0,0.6),
      0 12px 24px -4px rgba(0,0,0,0.8),
      inset 0 1px 1px rgba(255,255,255,0.1),
      inset 0 -3px 6px rgba(0,0,0,0.5);
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  }
  .btn-d2d-dark:hover {
    transform: translateY(-3px);
    background: linear-gradient(180deg, rgba(37,99,235,0.15) 0%, rgba(37,99,235,0.05) 100%);
    box-shadow:
      0 0 0 1px rgba(37,99,235,0.4),
      0 6px 12px -2px rgba(0,0,0,0.5),
      0 20px 32px -6px rgba(0,0,0,0.9),
      inset 0 1px 1px rgba(255,255,255,0.15),
      0 0 30px rgba(37,99,235,0.15);
  }
  .btn-d2d-dark:active {
    transform: translateY(1px);
    box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.8);
  }

  /* Industry Selector Modal */
  .voice-modal-overlay {
    background: rgba(4, 8, 18, 0.96);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
  }

  .voice-modal-card {
    background: linear-gradient(145deg, #0E1F3D 0%, #060D1F 100%);
    border: 1px solid rgba(37,99,235,0.25);
    box-shadow:
      0 0 0 1px rgba(37,99,235,0.1),
      0 60px 120px -20px rgba(0,0,0,0.99),
      0 30px 60px -10px rgba(0,0,0,0.9),
      inset 0 1px 1px rgba(255,255,255,0.08),
      0 0 80px rgba(37,99,235,0.12);
  }

  .industry-chip {
    background: linear-gradient(145deg, rgba(37,99,235,0.1) 0%, rgba(6,13,31,0.6) 100%);
    border: 1px solid rgba(37,99,235,0.18);
    transition: all 0.22s cubic-bezier(0.25, 1, 0.5, 1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.04);
    cursor: pointer;
  }
  .industry-chip:hover {
    background: linear-gradient(145deg, rgba(37,99,235,0.25) 0%, rgba(37,99,235,0.1) 100%);
    border-color: rgba(59,130,246,0.45);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(37,99,235,0.25), 0 0 0 1px rgba(59,130,246,0.3), inset 0 1px 1px rgba(255,255,255,0.08);
  }
  .industry-chip.selected {
    background: linear-gradient(145deg, rgba(37,99,235,0.45) 0%, rgba(29,78,216,0.35) 100%);
    border-color: rgba(96,165,250,0.7);
    box-shadow:
      0 0 25px rgba(37,99,235,0.4),
      0 0 0 1px rgba(96,165,250,0.5),
      inset 0 1px 1px rgba(255,255,255,0.15);
  }

  .phone-reveal-card {
    background: linear-gradient(145deg, rgba(37,99,235,0.12) 0%, rgba(6,13,31,0.9) 100%);
    border: 1px solid rgba(59,130,246,0.3);
    box-shadow:
      0 0 50px rgba(37,99,235,0.2),
      0 20px 40px rgba(0,0,0,0.6),
      inset 0 1px 1px rgba(255,255,255,0.06);
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 12px rgba(37,99,235,0.4), 0 0 0 1px rgba(59,130,246,0.3); }
    50% { box-shadow: 0 0 30px rgba(37,99,235,0.7), 0 0 0 1px rgba(96,165,250,0.5); }
  }
  .phone-number-glow {
    animation: pulseGlow 2.5s ease-in-out infinite;
  }

  .progress-ring {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 402;
    stroke-dashoffset: 402;
    stroke-linecap: round;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  .status-dot-active {
    animation: blink 1.8s ease-in-out infinite;
  }
`;

// ─── Voice Agent Modal ────────────────────────────────────────────────────────
interface VoiceAgentModalProps {
  onClose: () => void;
}

function VoiceAgentModal({ onClose }: VoiceAgentModalProps) {
  const [selected, setSelected] = useState<Industry | null>(null);

  return (
    <div
      className="voice-modal-overlay fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="voice-modal-card relative w-full max-w-xl rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scan line inside modal */}
        <div className="scan-line" aria-hidden="true" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white/90 hover:bg-white/10 transition-all duration-200"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
            <Zap className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-none tracking-tight">
              Try Our AI Voice Agent
            </h3>
            <p className="text-blue-300/50 text-xs font-medium mt-0.5">
              Live — available now
            </p>
          </div>
        </div>

        <p className="text-white/40 text-sm leading-relaxed mb-6">
          Select your trade to connect with our AI Rep and see exactly how we
          book more qualified leads for your business.
        </p>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
          {INDUSTRIES.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelected(industry)}
              className={cn(
                "industry-chip rounded-xl px-3 py-3 text-sm font-semibold text-left text-white/80 flex items-center gap-2",
                selected === industry && "selected text-white"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0 transition-all duration-200",
                  selected === industry && "bg-blue-400 status-dot-active"
                )}
              />
              {industry}
            </button>
          ))}
        </div>

        {/* Phone number reveal */}
        <div
          className={cn(
            "phone-reveal-card rounded-2xl p-5 transition-all duration-500 overflow-hidden",
            selected
              ? "opacity-100 max-h-48 translate-y-0"
              : "opacity-0 max-h-0 -translate-y-2 p-0 border-0"
          )}
        >
          {selected && (
            <>
              <p className="text-blue-300/70 text-xs font-semibold uppercase tracking-widest mb-3">
                {selected} — AI Rep Ready
              </p>
              <a
                href={AI_PHONE_HREF}
                className="phone-number-glow block text-center rounded-xl py-3.5 px-6 bg-blue-600/20 border border-blue-500/40 text-white text-2xl font-black tracking-wide mb-3 hover:bg-blue-600/30 transition-colors duration-200"
              >
                <span className="flex items-center justify-center gap-3">
                  <PhoneCall className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  {AI_PHONE_NUMBER}
                </span>
              </a>
              <p className="text-white/40 text-xs text-center leading-relaxed">
                Call now to speak to our Live AI Rep and get more information on
                how we can help book more qualified leads!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Hero Component ──────────────────────────────────────────────────────
export interface D2DHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  metricValue?: number;
}

export function D2DHero({ metricValue = 47, className, ...props }: D2DHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const [voiceModalOpen, setVoiceModalOpen] = useState(false);

  // Mouse parallax + card sheen
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;
      cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          mainCardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;
          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Cinematic scroll timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });
      gsap.set(".cta-wrapper", { autoAlpha: 0, scale: 0.8, filter: "blur(30px)" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=7000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        .to([".hero-text-wrapper", ".bg-grid-d2d"], { scale: 1.15, filter: "blur(20px)", opacity: 0.2, ease: "power2.inOut", duration: 2 }, 0)
        .to(".main-card", { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        .to(".progress-ring", { strokeDashoffset: 80, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        .to({}, { duration: 2.5 })
        .set(".hero-text-wrapper", { autoAlpha: 0 })
        .set(".cta-wrapper", { autoAlpha: 1 })
        .to({}, { duration: 1.5 })
        .to([".mockup-scroll-wrapper", ".floating-badge", ".card-left-text", ".card-right-text"], {
          scale: 0.9, y: -40, z: -200, autoAlpha: 0, ease: "power3.in", duration: 1.2, stagger: 0.05,
        })
        .to(".main-card", {
          width: isMobile ? "92vw" : "85vw",
          height: isMobile ? "92vh" : "85vh",
          borderRadius: isMobile ? "32px" : "40px",
          ease: "expo.inOut",
          duration: 1.8,
        }, "pullback")
        .to(".cta-wrapper", { scale: 1, filter: "blur(0px)", ease: "expo.inOut", duration: 1.8 }, "pullback")
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });
    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]);

  return (
    <>
      {/* Voice Agent Modal — fixed, escapes overflow:hidden */}
      {voiceModalOpen && (
        <VoiceAgentModal onClose={() => setVoiceModalOpen(false)} />
      )}

      <div
        ref={containerRef}
        className={cn(
          "relative w-full h-dvh overflow-hidden flex items-center justify-center font-sans antialiased",
          className
        )}
        style={{
          perspective: "1500px",
          background: "linear-gradient(180deg, #04081A 0%, #060D1F 100%)",
        }}
        {...props}
      >
        <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
        <div className="film-grain" aria-hidden="true" />

        {/* Grid background */}
        <div className="bg-grid-d2d absolute inset-0 z-0 pointer-events-none opacity-60" aria-hidden="true" />

        {/* Circuit accent lines */}
        <div className="circuit-line absolute top-[20%] left-0 right-0 h-px" aria-hidden="true" />
        <div className="circuit-line absolute top-[75%] left-0 right-0 h-px" aria-hidden="true" />

        {/* ── LAYER 1: Hero tagline text ────────────────────────────────── */}
        <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-full px-4 will-change-transform">
          <h1 className="text-track gsap-reveal text-3d-d2d text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
            Close More Sales,
          </h1>
          <h1 className="text-days gsap-reveal text-silver-d2d text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
            Chase Less Leads.
          </h1>
          <p className="text-track gsap-reveal text-white/30 text-sm md:text-base font-medium tracking-widest uppercase mt-6 letter-spacing-wide">
            AI-Powered Marketing for Home Services
          </p>
        </div>

        {/* ── LAYER 2: Final CTA section (revealed at end of scroll) ─────── */}
        <div className="cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform">
          <div className="mb-3 flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 status-dot-active" />
            <span className="text-blue-300/70 text-xs font-semibold tracking-widest uppercase">
              AI Agents Active Now
            </span>
          </div>

          <h2 className="text-silver-d2d text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 tracking-tight leading-none">
            Stop Chasing.<br />Start Closing.
          </h2>
          <p className="text-white/35 text-base md:text-lg mb-10 max-w-lg mx-auto font-light leading-relaxed">
            AI-powered Voice, SMS &amp; Email follow-ups that book qualified
            appointments on autopilot — while you focus on closing.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Primary CTA */}
            <a
              href={BOOKING_URL}
              className="btn-d2d-primary flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <Calendar className="w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110" />
              Book Your Discovery Call Today
              <ChevronRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary CTA — opens voice agent modal */}
            <button
              onClick={() => setVoiceModalOpen(true)}
              className="btn-d2d-dark flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base group focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <PhoneCall className="w-5 h-5 flex-shrink-0 text-blue-400 transition-transform group-hover:scale-110" />
              Try Our AI Voice Agent Live
            </button>
          </div>
        </div>

        {/* ── LAYER 3: The deep navy card ──────────────────────────────────── */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ perspective: "1500px" }}
        >
          <div
            ref={mainCardRef}
            className="main-card d2d-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-[32px] md:rounded-[40px]"
          >
            <div className="card-sheen" aria-hidden="true" />
            <div className="scan-line" aria-hidden="true" />

            {/* 3-column responsive grid */}
            <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">

              {/* ── TOP/RIGHT: Brand tagline ─────────────────────────────── */}
              <div className="card-right-text gsap-reveal order-1 lg:order-3 flex flex-col items-center lg:items-end justify-center z-20 w-full gap-4">
                <p className="text-card-silver text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-center lg:text-right opacity-60">
                  &ldquo;Stop Chasing Leads,<br />Start Closing Them!&rdquo;
                </p>
              </div>

              {/* ── MIDDLE: iPhone mockup with AI lead metrics ────────────── */}
              <div
                className="mockup-scroll-wrapper order-2 relative w-full h-[380px] lg:h-[600px] flex items-center justify-center z-10"
                style={{ perspective: "1000px" }}
              >
                <div className="relative w-full h-full flex items-center justify-center transform scale-[0.65] md:scale-[0.85] lg:scale-100">

                  {/* iPhone Bezel */}
                  <div
                    ref={mockupRef}
                    className="relative w-[280px] h-[580px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Hardware buttons */}
                    <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                    <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                    <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                    <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                    {/* Screen */}
                    <div className="absolute inset-[7px] bg-[#040B1A] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
                      <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                      {/* Dynamic Island */}
                      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.08)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(37,99,235,0.9)] status-dot-active" />
                      </div>

                      {/* App Interface */}
                      <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">

                        {/* Header */}
                        <div className="phone-widget flex justify-between items-center mb-6">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-blue-400/60 uppercase tracking-widest font-bold mb-1">Today</span>
                            <span className="text-xl font-bold tracking-tight text-white drop-shadow-md">AI Pipeline</span>
                          </div>
                          <div className="w-9 h-9 rounded-full bg-blue-600/20 text-blue-300 flex items-center justify-center font-bold text-xs border border-blue-500/30 shadow-lg shadow-black/50">
                            D2D
                          </div>
                        </div>

                        {/* Progress ring — Leads Booked */}
                        <div className="phone-widget relative w-44 h-44 mx-auto flex items-center justify-center mb-6 drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]">
                          <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                            <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(37,99,235,0.08)" strokeWidth="10" />
                            <circle className="progress-ring" cx="88" cy="88" r="64" fill="none" stroke="#3B82F6" strokeWidth="10" />
                          </svg>
                          <div className="text-center z-10 flex flex-col items-center">
                            <span className="counter-val text-4xl font-extrabold tracking-tighter text-white">0</span>
                            <span className="text-[8px] text-blue-300/50 uppercase tracking-[0.1em] font-bold mt-0.5">Leads Booked</span>
                          </div>
                        </div>

                        {/* Widgets */}
                        <div className="space-y-2.5">
                          <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-800/10 flex items-center justify-center mr-3 border border-blue-500/20 shadow-inner flex-shrink-0">
                              <Phone className="w-4 h-4 text-blue-400 drop-shadow-md" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs font-semibold truncate">AI Voice Call</p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 status-dot-active" />
                                <span className="text-green-400/70 text-[10px] font-medium">Currently Active</span>
                              </div>
                            </div>
                          </div>

                          <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-800/10 flex items-center justify-center mr-3 border border-indigo-500/20 shadow-inner flex-shrink-0">
                              <MessageSquare className="w-4 h-4 text-indigo-400 drop-shadow-md" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-white text-xs font-semibold">SMS Follow-up</p>
                              <p className="text-white/40 text-[10px] mt-0.5">12 sent today</p>
                            </div>
                          </div>
                        </div>

                        {/* Home bar */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/15 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="floating-badge absolute flex top-6 lg:top-12 left-[-15px] lg:left-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-blue-500/25 to-blue-900/10 flex items-center justify-center border border-blue-400/30 shadow-inner flex-shrink-0">
                      <span className="text-base lg:text-xl drop-shadow-lg" aria-hidden="true">🤖</span>
                    </div>
                    <div>
                      <p className="text-white text-xs lg:text-sm font-bold tracking-tight">23 Booked Today</p>
                      <p className="text-blue-300/50 text-[10px] lg:text-xs font-medium">AI Agent Running</p>
                    </div>
                  </div>

                  <div className="floating-badge absolute flex bottom-12 lg:bottom-20 right-[-15px] lg:right-[-80px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-green-500/20 to-green-900/10 flex items-center justify-center border border-green-400/30 shadow-inner flex-shrink-0">
                      <span className="text-base lg:text-lg drop-shadow-lg" aria-hidden="true">📈</span>
                    </div>
                    <div>
                      <p className="text-white text-xs lg:text-sm font-bold tracking-tight">89% Book Rate</p>
                      <p className="text-blue-300/50 text-[10px] lg:text-xs font-medium">This Month</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── BOTTOM/LEFT: Description copy ─────────────────────────── */}
              <div className="card-left-text gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
                <div className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 status-dot-active" />
                  <span className="text-blue-400/60 text-[10px] font-bold tracking-widest uppercase">
                    Door to Door No More
                  </span>
                </div>
                <h3 className="text-card-silver text-2xl md:text-3xl lg:text-4xl font-bold mb-0 lg:mb-5 tracking-tight leading-tight">
                  Lead automation,<br />redefined.
                </h3>
                <p className="hidden md:block text-blue-100/40 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-sm lg:max-w-none">
                  <span className="text-white/70 font-semibold">D2D No More</span> replaces
                  cold knocking with AI Voice, SMS &amp; Email follow-ups that
                  turn missed calls into booked appointments — automatically.
                </p>

                {/* Mini service icons */}
                <div className="hidden md:flex items-center gap-3 mt-6 flex-wrap">
                  {["Meta", "Google", "TikTok"].map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase text-blue-300/60 border border-blue-500/15 bg-blue-500/5"
                    >
                      {platform}
                    </span>
                  ))}
                  <span className="text-white/20 text-[10px]">+ Ads Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
