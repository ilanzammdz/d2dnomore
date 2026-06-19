"use client";

import { BrainCircuit, Star } from "lucide-react";
import { ContainerScroll } from "./container-scroll-animation";

const AI_PLATFORMS = ["ChatGPT", "Gemini", "Perplexity", "Claude"];

const TAGS = ["Free Inspections", "Same-Day Response", "Licensed & Insured"];

const PILLARS = [
  {
    label: "AI Authority Building",
    desc: "We establish your business as the trusted expert that AI engines cite when answering local search queries.",
  },
  {
    label: "Generative Visibility",
    desc: "Your brand appears in AI-generated answers — not buried in a list of blue links no one clicks anymore.",
  },
  {
    label: "Zero-Click Discovery",
    desc: "Customers find and trust you before they ever visit your website, because the AI already vouched for you.",
  },
];

function AiSearchMock() {
  return (
    <div
      className="h-full w-full flex flex-col overflow-hidden"
      style={{ background: "#07101F" }}
    >
      {/* Platform tabs */}
      <div
        className="flex items-center gap-1 px-4 md:px-6 py-3 border-b shrink-0"
        style={{ background: "#060B17", borderColor: "rgba(255,255,255,0.05)" }}
      >
        {AI_PLATFORMS.map((name, i) => (
          <button
            key={name}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
            style={
              i === 0
                ? { background: "rgba(37,99,235,0.18)", color: "#93C5FD", border: "1px solid rgba(37,99,235,0.25)" }
                : { color: "rgba(255,255,255,0.28)", background: "transparent", border: "1px solid transparent" }
            }
          >
            {name}
          </button>
        ))}
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-5">
        {/* User query */}
        <div className="flex justify-end">
          <div
            className="rounded-2xl rounded-tr-sm px-4 py-3 max-w-[260px] md:max-w-xs text-sm text-white"
            style={{
              background: "rgba(37,99,235,0.18)",
              border: "1px solid rgba(37,99,235,0.2)",
            }}
          >
            Best roofing company in Chicago, IL
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-3">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-black text-white"
            style={{ background: "linear-gradient(135deg,#10A37F 0%,#065F46 100%)" }}
          >
            G
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold mb-2" style={{ color: "rgba(16,163,127,0.8)" }}>
              ChatGPT
            </p>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Based on digital authority, verified customer reviews, and industry recognition, here&apos;s who Chicago homeowners trust most for roofing:
            </p>

            {/* #1 Result */}
            <div
              className="rounded-xl p-4 mb-3"
              style={{
                background: "linear-gradient(135deg,rgba(234,179,8,0.07) 0%,rgba(234,179,8,0.03) 100%)",
                border: "1px solid rgba(234,179,8,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black tracking-widest" style={{ color: "#FBBF24" }}>
                  #1 RECOMMENDED
                </span>
                <span className="text-xs">🏆</span>
              </div>
              <p className="text-white font-bold text-base mb-1">Smith&apos;s Roofing &amp; Restoration</p>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                  4.9 · 312 reviews
                </span>
              </div>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                &quot;Smith&apos;s consistently ranks as Chicago&apos;s most trusted roofer — recognized for rapid storm response, transparent pricing, and industry-leading workmanship...&quot;
              </p>
              <div className="flex flex-wrap gap-1.5">
                {TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      color: "rgba(255,255,255,0.45)",
                    }}
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* #2 Result (faded) */}
            <div
              className="rounded-xl p-3 opacity-40"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold" style={{ color: "rgba(255,255,255,0.4)" }}>#2</span>
                <p className="text-sm font-semibold text-white/60">Midwest Roof Pros</p>
              </div>
              <div className="flex items-center gap-1 mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 h-2.5 fill-yellow-400/50 text-yellow-400/50" />
                  ))}
                </div>
                <span className="text-[10px] text-white/25">4.6 · 88 reviews</span>
              </div>
              <p className="text-xs text-white/30 leading-relaxed">
                &quot;A solid option with moderate online presence...&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleContent() {
  return (
    <div className="flex flex-col items-center gap-6">
      <span
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
        style={{
          border: "1px solid rgba(37,99,235,0.25)",
          background: "rgba(37,99,235,0.08)",
          color: "rgba(147,197,253,0.75)",
        }}
      >
        <BrainCircuit className="w-3 h-3" />
        AI Search Optimization
      </span>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
        Your Next Customer<br />
        Isn&apos;t Googling.{" "}
        <span
          style={{
            background: "linear-gradient(90deg,#60A5FA 0%,#93C5FD 60%,#60A5FA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          They&apos;re Asking AI.
        </span>
      </h2>

      <p className="text-white/45 text-base md:text-lg leading-relaxed max-w-2xl">
        A billion searches happen on ChatGPT, Gemini, and Perplexity every month. When a homeowner
        asks <span className="text-white/70 font-medium italic">&quot;best roofer near me&quot;</span> — our AI
        Search Optimization makes sure your name is the one that comes back. Not your competitor&apos;s.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-2">
        {PILLARS.map(({ label, desc }) => (
          <div
            key={label}
            className="rounded-xl p-4 text-left"
            style={{
              background: "rgba(37,99,235,0.06)",
              border: "1px solid rgba(37,99,235,0.12)",
            }}
          >
            <p className="text-white font-semibold text-sm mb-1">{label}</p>
            <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function D2DAISeo() {

  return (
    <section
      className="w-full relative"
      style={{ background: "linear-gradient(180deg,#04081A 0%,#050C1A 40%,#04081A 100%)" }}
    >
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right,rgba(37,99,235,0.05) 1px,transparent 1px),linear-gradient(to bottom,rgba(37,99,235,0.05) 1px,transparent 1px)",
          opacity: 0.6,
        }}
      />
      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 600,
          background: "radial-gradient(ellipse,rgba(37,99,235,0.07) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Scroll animation + mock */}
        <ContainerScroll titleComponent={<TitleContent />}>
          <AiSearchMock />
        </ContainerScroll>

        {/* ── AI Recommends embed ── */}
        <div className="pb-24 lg:pb-32 -mt-8 flex flex-col items-center gap-8">
          {/* Header */}
          <div className="text-center max-w-2xl">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "rgba(96,165,250,0.55)" }}
            >
              Live Check
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Does AI Recommend You?
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Pick your industry, enter your city, and see exactly which businesses ChatGPT and Gemini are recommending right now — and whether you&apos;re one of them.
            </p>
          </div>

          {/* iframe wrapper */}
          <div
            className="w-full max-w-4xl rounded-2xl"
            style={{
              border: "1px solid rgba(37,99,235,0.2)",
              boxShadow: "0 0 0 1px rgba(37,99,235,0.08), 0 24px 64px -12px rgba(0,0,0,0.6)",
              overflow: "hidden",
              WebkitOverflowScrolling: "touch",
            } as React.CSSProperties}
          >
            <iframe
              src="https://recommends.aitrustsignals.com"
              title="Does AI Recommend You?"
              width="100%"
              scrolling="yes"
              allow="same-origin"
              style={{
                border: "none",
                display: "block",
                height: "clamp(500px, 80vw, 700px)",
                touchAction: "pan-y",
                pointerEvents: "auto",
              }}
              loading="lazy"
            />
          </div>

          {/* Pricing */}
          <div className="w-full max-w-3xl mt-8">
            <div
              className="rounded-2xl p-8 md:p-10 text-center"
              style={{
                background: "linear-gradient(135deg,rgba(37,99,235,0.08) 0%,rgba(37,99,235,0.03) 100%)",
                border: "1px solid rgba(37,99,235,0.2)",
                boxShadow: "0 0 64px -16px rgba(37,99,235,0.2)",
              }}
            >
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(96,165,250,0.6)" }}>
                AI Search Optimization — Pricing
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
                <div>
                  <p className="text-4xl md:text-5xl font-extrabold text-white">
                    $199<span className="text-2xl text-white/50">.99</span>
                    <span className="text-lg font-medium text-white/40">/mo</span>
                  </p>
                  <p className="text-white/40 text-sm mt-1">Standalone plan</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-white/10" />
                <div className="flex flex-col items-center">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-1"
                    style={{
                      background: "linear-gradient(90deg,rgba(37,99,235,0.25),rgba(96,165,250,0.18))",
                      border: "1px solid rgba(96,165,250,0.3)",
                      color: "#93C5FD",
                    }}
                  >
                    ✦ Included at No Extra Cost
                  </span>
                  <p className="text-white/40 text-sm">with the Elite Pro Marketing Package</p>
                </div>
              </div>
              <a
                href="https://api.leadconnectorhq.com/widget/booking/pLI3PnyKImdzfniX1AEE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(90deg,#1D4ED8 0%,#2563EB 100%)",
                  boxShadow: "0 0 24px rgba(37,99,235,0.35)",
                }}
              >
                Get AI-Ranked — Book a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
