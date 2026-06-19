"use client";

import { useState } from "react";
import {
  GripVertical,
  Check,
  X,
  Minus,
  Zap,
  Users,
  Building2,
  Trophy,
  ChevronRight,
  DollarSign,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FRAGMENTED_VENDORS = [
  { name: "Google Ads Agency",     cost: "$3,000/mo" },
  { name: "Meta Ads Agency",       cost: "$2,500/mo" },
  { name: "SEO Agency",            cost: "$2,000/mo" },
  { name: "CRM + Automation Tool", cost: "$500/mo"   },
  { name: "AI Voice Platform",     cost: "$300/mo"   },
  { name: "Email Marketing Tool",  cost: "$200/mo"   },
];

const D2D_SERVICES = [
  "Website Build",
  "Brand Kit Build or Update",
  "Campaign Build",
  "Creative Design",
  "Landing Page",
  "Campaign Execution",
  "Client Success Manager",
  "Weekly Campaign Reviews",
  "AI Chat Bot",
  "AI SEO Optimization",
  "AI Voice Agent",
  "Competitor Marketing Analysis",
];

const PLAN_FEATURES = [
  { label: "Website Build",                  group: "core" },
  { label: "Brand Kit Build or Update",      group: "core" },
  { label: "Campaign Build",                 group: "core" },
  { label: "Creative Design",                group: "core" },
  { label: "Landing Page",                   group: "core" },
  { label: "Campaign Execution",             group: "core" },
  { label: "Client Success Manager",         group: "core" },
  { label: "Weekly Campaign Reviews",        group: "core" },
  { label: "AI Chat Bot",                    group: "ai"   },
  { label: "AI SEO Optimization",            group: "ai"   },
  { label: "AI Voice Agent",                 group: "ai"   },
  { label: "Competitor Marketing Analysis",  group: "ai"   },
];

interface Plan {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  highlighted: boolean;
  Icon: React.ElementType;
  accentColor: string;
  borderColor: string;
  includes: boolean[];
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: "Premier Marketing",
    tagline: "Full-Service Marketing",
    price: "$500/week",
    priceNote: "No setup fees · No long-term contract",
    highlighted: false,
    Icon: Users,
    accentColor: "text-blue-300",
    borderColor: "border-blue-500/20",
    includes: [true, true, true, true, true, true, true, true, false, false, false, false],
    cta: "Start with Premier",
  },
  {
    name: "Elite Pro Marketing",
    tagline: "Marketing + AI Suite",
    price: "$750/week",
    priceNote: "Everything in Premier — plus all 3 AI tools & intel",
    highlighted: true,
    Icon: Trophy,
    accentColor: "text-blue-400",
    borderColor: "border-blue-500/40",
    includes: [true, true, true, true, true, true, true, true, true, true, true, true],
    cta: "Get Elite Pro",
  },
];

type TStatus = "yes" | "no" | "partial";

interface TraditionalCol {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  Icon: React.ElementType;
  accentColor: string;
  borderColor: string;
  // one TStatus per PLAN_FEATURES entry (12 rows)
  rows: { status: TStatus; note?: string }[];
}

const TRADITIONAL_COLS: TraditionalCol[] = [
  {
    name: "In-House Team",
    tagline: "The Expensive Hire",
    price: "$5,000–$10,000+/mo",
    priceNote: "Salaries alone — before tools, ad spend & training",
    Icon: Users,
    accentColor: "text-red-400",
    borderColor: "border-red-500/20",
    rows: [
      { status: "partial", note: "Requires separate developer"  },
      { status: "partial", note: "Requires separate designer"   },
      { status: "partial", note: "If they know how"             },
      { status: "partial", note: "Needs dedicated designer"     },
      { status: "partial", note: "Requires separate developer"  },
      { status: "partial", note: "Manual & time-consuming"      },
      { status: "partial", note: "You manage them"              },
      { status: "partial", note: "Internal meetings only"       },
      { status: "no"                                             },
      { status: "no"                                             },
      { status: "no"                                             },
      { status: "partial", note: "Manual research only"         },
    ],
  },
  {
    name: "Marketing Agency",
    tagline: "The Ads-Only Agency",
    price: "$2,500–$5,000+/mo",
    priceNote: "Ads management only — AI, build work & analysis cost extra",
    Icon: Building2,
    accentColor: "text-amber-400",
    borderColor: "border-amber-500/20",
    rows: [
      { status: "no"                                             },
      { status: "no"                                             },
      { status: "yes"                                            },
      { status: "partial", note: "Often an added cost"          },
      { status: "partial", note: "Sometimes included"           },
      { status: "yes"                                            },
      { status: "yes"                                            },
      { status: "partial", note: "Varies by agency"             },
      { status: "no"                                             },
      { status: "partial", note: "Separate agency required"     },
      { status: "no"                                             },
      { status: "partial", note: "Basic only"                   },
    ],
  },
];

// ─── Status Icons ──────────────────────────────────────────────────────────────

function StatusIcon({ included }: { included: boolean }) {
  if (included) {
    return (
      <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3 text-blue-400" />
      </div>
    );
  }
  return (
    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
      <Minus className="w-3 h-3 text-white/20" />
    </div>
  );
}

function TraditionalStatusIcon({ status }: { status: TStatus }) {
  if (status === "yes") return (
    <div className="w-6 h-6 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center flex-shrink-0">
      <Check className="w-3 h-3 text-green-400" />
    </div>
  );
  if (status === "no") return (
    <div className="w-6 h-6 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0">
      <X className="w-3 h-3 text-red-400/70" />
    </div>
  );
  return (
    <div className="w-6 h-6 rounded-full bg-amber-500/10 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
      <Minus className="w-3 h-3 text-amber-400/70" />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function D2DComparison() {
  const [inset, setInset]             = useState<number>(50);
  const [isDragging, setIsDragging]   = useState<boolean>(false);
  const [showTraditional, setShowTraditional] = useState<boolean>(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;
    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }
    setInset(Math.min(Math.max((x / rect.width) * 100, 3), 97));
  };

  return (
    <section
      className="w-full py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#060D1F 0%,#04081A 60%,#060D1F 100%)" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right,rgba(37,99,235,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(37,99,235,0.06) 1px,transparent 1px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(180deg,#04081A 0%,transparent 100%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="mb-16 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 text-blue-300/70 text-xs font-bold tracking-widest uppercase mb-6">
            <Zap className="w-3 h-3" />
            Why D2D No More
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.05] mb-5">
            Other agencies hand you leads.{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#FFFFFF 0%,#60A5FA 50%,#93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              We hand you booked appointments.
            </span>
          </h2>

          <p className="text-white/40 text-lg leading-relaxed">
            Most agencies specialize in one thing and call it a day. In-house teams drain your
            payroll before a single lead converts. D2D No More is the only partner that covers
            your{" "}
            <span className="text-white/70 font-semibold">entire revenue pipeline</span> — ads,
            AI follow-up, CRM, creatives — for a fraction of what you&apos;d spend anywhere else.
          </p>
        </div>

        {/* ── Drag slider ────────────────────────────────────────────────── */}
        <div className="mb-6">
          <p className="text-center text-white/25 text-xs font-medium tracking-widest uppercase mb-4 select-none">
            ← Drag to compare →
          </p>

          {/*
            The slider uses clip-path on the RIGHT panel to reveal/hide it.
            CRITICAL: clip-path and overflow-hidden must NOT be on the same element —
            they conflict in Chromium/Edge. Solution: outer div = clip-path only,
            inner div = overflow-hidden + content. Left panel stays below at z-index 1.
          */}
          <div
            className="relative w-full h-[500px] md:h-[560px] overflow-hidden rounded-2xl select-none cursor-col-resize"
            onMouseMove={handleMove}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleMove}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* ── LEFT: The Fragmented Way — background only on outer div ── */}
            <div
              className="absolute inset-0"
              style={{ zIndex: 1, background: "linear-gradient(145deg,#1A0808 0%,#0D0303 100%)" }}
            >
              <div className="absolute inset-0 flex flex-col p-6 md:p-10 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundSize: "40px 40px",
                    backgroundImage:
                      "linear-gradient(to right,rgba(239,68,68,0.08) 1px,transparent 1px),linear-gradient(to bottom,rgba(239,68,68,0.08) 1px,transparent 1px)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/25 text-red-400 text-[11px] font-bold tracking-widest uppercase">
                      <X className="w-3 h-3" /> The Fragmented Way
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 flex-1">
                    {FRAGMENTED_VENDORS.map((v) => (
                      <div
                        key={v.name}
                        className="flex flex-col justify-between p-3 rounded-xl border border-red-500/10 bg-red-500/5"
                      >
                        <p className="text-white/45 text-[11px] font-semibold leading-tight mb-3">{v.name}</p>
                        <p className="text-red-400 text-base font-bold">{v.cost}</p>
                      </div>
                    ))}
                    <div className="col-span-2 md:col-span-3 flex flex-col justify-between p-3 rounded-xl border border-red-500/15 bg-red-500/8">
                      <p className="text-white/45 text-[11px] font-semibold mb-1">+ In-House Marketing Coordinator</p>
                      <p className="text-red-400 text-base font-bold">$5,000+/mo salary</p>
                      <p className="text-red-400/40 text-[10px] mt-1">Plus benefits, training &amp; turnover risk</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-red-500/15">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/25 text-[10px] font-bold tracking-widest uppercase mb-1">Total Monthly Spend</p>
                        <p className="text-red-400 text-2xl md:text-3xl font-black">$13,500+/mo</p>
                      </div>
                      <p className="text-red-400/40 text-xs text-right max-w-[140px] leading-tight">
                        And still no AI follow-up or full-funnel automation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT: The D2D No More Way ─────────────────────────────── */}
            {/* Outer div: clip-path + background ONLY — no overflow-hidden   */}
            <div
              className="absolute inset-0"
              style={{
                zIndex: 2,
                background: "linear-gradient(145deg,#040E28 0%,#04081A 100%)",
                clipPath: `inset(0 0 0 ${inset}%)`,
                WebkitClipPath: `inset(0 0 0 ${inset}%)`,
              }}
            >
              {/* Inner div: content + overflow-hidden — separate from clip-path */}
              <div className="absolute inset-0 flex flex-col p-6 md:p-10 overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundSize: "40px 40px",
                    backgroundImage:
                      "linear-gradient(to right,rgba(37,99,235,0.1) 1px,transparent 1px),linear-gradient(to bottom,rgba(37,99,235,0.1) 1px,transparent 1px)",
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle,rgba(37,99,235,0.15) 0%,transparent 70%)",
                    transform: "translate(30%,-30%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[11px] font-bold tracking-widest uppercase">
                      <Check className="w-3 h-3" /> The D2D No More Way
                    </span>
                  </div>
                  <div
                    className="flex-1 rounded-2xl border border-blue-500/20 p-5 md:p-6 flex flex-col"
                    style={{
                      background: "linear-gradient(145deg,rgba(37,99,235,0.08) 0%,rgba(4,8,26,0.6) 100%)",
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06),0 0 40px rgba(37,99,235,0.1)",
                    }}
                  >
                    <p className="text-white/35 text-[10px] font-bold tracking-widest uppercase mb-4">
                      One System. Everything Covered.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 flex-1">
                      {D2D_SERVICES.map((service) => (
                        <div key={service} className="flex items-center gap-2.5">
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-blue-400" />
                          </div>
                          <span className="text-white/70 text-xs md:text-sm font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-500/15">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-white/25 text-[10px] font-bold tracking-widest uppercase mb-1">All of the Above</p>
                        <p
                          className="text-3xl md:text-4xl font-black"
                          style={{
                            background: "linear-gradient(135deg,#FFFFFF 0%,#60A5FA 60%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          From $500/week
                        </p>
                      </div>
                      <div
                        className="px-3 py-2 rounded-xl border border-blue-500/30 text-center"
                        style={{ background: "rgba(37,99,235,0.12)" }}
                      >
                        <p className="text-blue-300 text-xs font-bold leading-tight">Your Cheapest</p>
                        <p className="text-blue-300 text-xs font-bold leading-tight">Revenue Driver</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Divider handle ─────────────────────────────────────────── */}
            <div
              className="absolute top-0 bottom-0 w-px pointer-events-none"
              style={{
                zIndex: 10,
                left: `${inset}%`,
                background:
                  "linear-gradient(180deg,transparent 0%,rgba(96,165,250,0.9) 20%,rgba(147,197,253,1) 50%,rgba(96,165,250,0.9) 80%,transparent 100%)",
              }}
            >
              <button
                className="pointer-events-auto absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                style={{
                  background: "linear-gradient(145deg,#1D4ED8 0%,#1E40AF 100%)",
                  boxShadow: "0 0 0 3px rgba(255,255,255,0.08),0 0 30px rgba(37,99,235,0.7),0 4px 12px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(96,165,250,0.4)",
                }}
                onMouseDown={() => setIsDragging(true)}
                onTouchStart={() => setIsDragging(true)}
                aria-label="Drag to compare"
              >
                <GripVertical className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Plan comparison ─────────────────────────────────────────────── */}
        <div className="mt-20">
          <p className="text-center text-white/25 text-xs font-bold tracking-widest uppercase mb-3">
            {showTraditional ? "Traditional Market Costs" : "Choose Your Plan"}
          </p>
          <h3 className="text-center text-white text-2xl md:text-3xl font-extrabold mb-6">
            {showTraditional ? (
              <>What Everyone Else Will{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg,#F87171,#FCA5A5)" }}
                >
                  Charge You.
                </span>
              </>
            ) : (
              <>Two Plans. One Mission.{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(90deg,#60A5FA,#93C5FD)" }}
                >
                  Fill Your Calendar.
                </span>
              </>
            )}
          </h3>

          {/* Toggle */}
          <div className="flex justify-center mb-10">
            <div
              className="inline-flex rounded-full p-1 gap-1"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <button
                onClick={() => setShowTraditional(false)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200",
                  !showTraditional
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                )}
                style={!showTraditional ? {
                  background: "linear-gradient(90deg,#1D4ED8,#2563EB)",
                  boxShadow: "0 0 16px rgba(37,99,235,0.4)",
                } : {}}
              >
                <Trophy className="w-3 h-3 inline-block mr-1.5 -mt-0.5" />
                D2D No More Plans
              </button>
              <button
                onClick={() => setShowTraditional(true)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs font-bold tracking-wide transition-all duration-200",
                  showTraditional
                    ? "text-white"
                    : "text-white/40 hover:text-white/60"
                )}
                style={showTraditional ? {
                  background: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  color: "#FCA5A5",
                } : {}}
              >
                <BarChart3 className="w-3 h-3 inline-block mr-1.5 -mt-0.5" />
                Traditional Costs
              </button>
            </div>
          </div>

          {/* ── D2D Plans grid ── */}
          {!showTraditional && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={cn("relative flex flex-col rounded-2xl border overflow-hidden", plan.borderColor)}
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(145deg,#0E1F3D 0%,#060D1F 100%)"
                    : "linear-gradient(145deg,#080E1C 0%,#04081A 100%)",
                  boxShadow: plan.highlighted
                    ? "0 0 0 1px rgba(37,99,235,0.25),0 24px 64px -16px rgba(37,99,235,0.3),inset 0 1px 1px rgba(255,255,255,0.06)"
                    : "0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                {plan.highlighted && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase" style={{ background: "rgba(37,99,235,0.2)", border: "1px solid rgba(96,165,250,0.3)", color: "#93C5FD" }}>
                        ✦ Most Popular
                      </span>
                    </div>
                  </>
                )}

                {/* Header */}
                <div className="p-6 border-b border-white/5">
                  <div className={cn("flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase", plan.accentColor)}>
                    <plan.Icon className="w-3.5 h-3.5" />
                    {plan.tagline}
                  </div>
                  <h4 className="text-white font-extrabold text-xl mb-3">{plan.name}</h4>
                  <p className="text-3xl md:text-4xl font-black text-white mb-1">
                    {plan.price}
                  </p>
                  <p className="text-white/30 text-xs leading-snug">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <div className="flex flex-col flex-1 px-1">
                  {/* Core services group */}
                  <p className="px-5 pt-4 pb-2 text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
                    Marketing Services
                  </p>
                  {PLAN_FEATURES.filter(f => f.group === "core").map((feature, i) => (
                    <div
                      key={feature.label}
                      className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.04] last:border-0"
                    >
                      <span className={cn("text-xs font-medium", plan.includes[i] ? "text-white/75" : "text-white/25")}>
                        {feature.label}
                      </span>
                      <StatusIcon included={plan.includes[i]} />
                    </div>
                  ))}

                  {/* AI + extras group */}
                  <p className="px-5 pt-4 pb-2 text-[10px] font-black tracking-widest uppercase" style={{ color: plan.highlighted ? "rgba(96,165,250,0.6)" : "rgba(255,255,255,0.2)" }}>
                    AI Suite & Intelligence
                  </p>
                  {PLAN_FEATURES.filter(f => f.group === "ai").map((feature, i) => {
                    const globalIndex = i + 8;
                    return (
                      <div
                        key={feature.label}
                        className={cn(
                          "flex items-center justify-between px-5 py-2.5 border-b border-white/[0.04] last:border-0",
                          plan.highlighted && plan.includes[globalIndex] ? "bg-blue-500/[0.04]" : ""
                        )}
                      >
                        <span className={cn("text-xs font-medium", plan.includes[globalIndex] ? "text-white/75" : "text-white/20")}>
                          {feature.label}
                        </span>
                        <StatusIcon included={plan.includes[globalIndex]} />
                      </div>
                    );
                  })}
                </div>

                {/* Footer CTA */}
                <div className="p-6 border-t border-white/5">
                  <a
                    href="https://api.leadconnectorhq.com/widget/booking/pLI3PnyKImdzfniX1AEE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 group"
                    style={plan.highlighted ? {
                      background: "linear-gradient(135deg,#1D4ED8 0%,#2563EB 100%)",
                      boxShadow: "0 0 0 1px rgba(37,99,235,0.4),0 8px 24px -4px rgba(37,99,235,0.5),inset 0 1px 1px rgba(255,255,255,0.15)",
                    } : {
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {plan.cta}
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* ── Traditional Costs grid ── */}
          {showTraditional && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {TRADITIONAL_COLS.map((col) => (
              <div
                key={col.name}
                className={cn("relative flex flex-col rounded-2xl border overflow-hidden", col.borderColor)}
                style={{ background: "linear-gradient(145deg,#100808 0%,#0A0404 100%)", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
              >
                {/* Header */}
                <div className="p-6 border-b border-white/5">
                  <div className={cn("flex items-center gap-2 mb-3 text-xs font-bold tracking-widest uppercase", col.accentColor)}>
                    <col.Icon className="w-3.5 h-3.5" />
                    {col.tagline}
                  </div>
                  <h4 className="text-white font-extrabold text-xl mb-3">{col.name}</h4>
                  <p className="text-3xl md:text-4xl font-black text-red-400 mb-1">{col.price}</p>
                  <p className="text-white/30 text-xs leading-snug">{col.priceNote}</p>
                </div>

                {/* Feature rows */}
                <div className="flex flex-col flex-1 px-1">
                  <p className="px-5 pt-4 pb-2 text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.2)" }}>
                    Marketing Services
                  </p>
                  {PLAN_FEATURES.filter(f => f.group === "core").map((feature, i) => (
                    <div key={feature.label} className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.04]">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-white/55">{feature.label}</span>
                        {col.rows[i].note && <span className="text-[10px] text-white/25 mt-0.5">{col.rows[i].note}</span>}
                      </div>
                      <TraditionalStatusIcon status={col.rows[i].status} />
                    </div>
                  ))}
                  <p className="px-5 pt-4 pb-2 text-[10px] font-black tracking-widest uppercase" style={{ color: "rgba(239,68,68,0.4)" }}>
                    AI Suite & Intelligence
                  </p>
                  {PLAN_FEATURES.filter(f => f.group === "ai").map((feature, i) => {
                    const gi = i + 8;
                    return (
                      <div key={feature.label} className="flex items-center justify-between px-5 py-2.5 border-b border-white/[0.04] last:border-0">
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-white/35">{feature.label}</span>
                          {col.rows[gi].note && <span className="text-[10px] text-white/20 mt-0.5">{col.rows[gi].note}</span>}
                        </div>
                        <TraditionalStatusIcon status={col.rows[gi].status} />
                      </div>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5">
                  <div className="w-full py-3 rounded-xl text-center text-xs font-bold text-white/30" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    High cost · Gaps in coverage
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* Cross-compare nudge when viewing traditional */}
          {showTraditional && (
            <div className="mt-8 text-center">
              <p className="text-white/35 text-sm mb-4">
                D2D No More covers <span className="text-white/70 font-semibold">all 12 of these</span> — starting at $500/week.
              </p>
              <button
                onClick={() => setShowTraditional(false)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "linear-gradient(90deg,#1D4ED8,#2563EB)", boxShadow: "0 0 20px rgba(37,99,235,0.35)" }}
              >
                <Trophy className="w-4 h-4" />
                See Our Plans
              </button>
            </div>
          )}
        </div>

        {/* ── Bottom CTA ─────────────────────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center text-center gap-5">
          <p className="text-white/30 text-sm max-w-md leading-relaxed">
            Stop paying more to get less. One call is all it takes to see exactly how we&apos;ll
            replace your fragmented stack and start filling your calendar.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/pLI3PnyKImdzfniX1AEE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white text-sm transition-all duration-300 hover:-translate-y-1 group"
            style={{
              background: "linear-gradient(135deg,#1D4ED8 0%,#2563EB 100%)",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.4),0 12px 32px -4px rgba(37,99,235,0.5),inset 0 1px 1px rgba(255,255,255,0.2)",
            }}
          >
            <DollarSign className="w-4 h-4 text-blue-200 flex-shrink-0" />
            See What&apos;s Included
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
