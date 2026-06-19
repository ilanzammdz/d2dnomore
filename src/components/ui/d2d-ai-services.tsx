"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Users, CalendarCheck, MessageSquare, Shield, Zap, Bot } from "lucide-react";
import ChatComponent from "./chat-interface";
import type { ChatConfig, UiConfig } from "./chat-interface";

const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/pLI3PnyKImdzfniX1AEE";

const FEATURES = [
  { icon: Clock,         text: "Responds instantly 24/7 — no lead falls through the cracks" },
  { icon: Users,         text: "Captures name, phone & email automatically" },
  { icon: MessageSquare, text: "Qualifies leads before they ever reach your team" },
  { icon: CalendarCheck, text: "Books appointments directly to your calendar" },
  { icon: Shield,        text: "Handles FAQs so your team stays focused on closing" },
  { icon: Zap,           text: "Escalates to a human the moment it's needed" },
];

const CHAT_UI: UiConfig = {
  containerWidth: 440,
  containerHeight: 490,
  backgroundColor: "#060D1E",
  autoRestart: false,
  restartDelay: 0,
  loader: { dotColor: "#60A5FA" },
  linkBubbles: {
    backgroundColor: "rgba(37,99,235,0.12)",
    textColor: "#93C5FD",
    iconColor: "#60A5FA",
    borderColor: "rgba(37,99,235,0.2)",
  },
  leftChat: {
    backgroundColor: "#0E1E3A",
    textColor: "#E2E8F0",
    borderColor: "rgba(96,165,250,0.18)",
    showBorder: true,
    nameColor: "#60A5FA",
  },
  rightChat: {
    backgroundColor: "#1A2B48",
    textColor: "#CBD5E1",
    borderColor: "rgba(255,255,255,0.06)",
    showBorder: false,
    nameColor: "#93C5FD",
  },
};

const CHAT_CONFIG: ChatConfig = {
  leftPerson: {
    name: "Aria · AI",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&auto=format",
  },
  rightPerson: {
    name: "Visitor",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
  },
  messages: [
    {
      id: 1,
      sender: "right",
      type: "text",
      content: "Hi, my roof has storm damage. Do you offer free inspections?",
      loader: { enabled: false },
    },
    {
      id: 2,
      sender: "left",
      type: "text",
      content: "Hey! I'm Aria 👋 Yes — we offer free storm damage inspections! Are you a homeowner or property manager?",
      loader: { enabled: true, duration: 1800 },
    },
    {
      id: 3,
      sender: "right",
      type: "text",
      content: "Homeowner. My zip is 60614.",
      loader: { enabled: false },
    },
    {
      id: 4,
      sender: "left",
      type: "text",
      content: "We have openings in your area this week! Just need your name and best number to lock in a slot. 📅",
      loader: { enabled: true, duration: 2000 },
    },
    {
      id: 5,
      sender: "right",
      type: "text",
      content: "Mike, 312-555-4821",
      loader: { enabled: false },
    },
    {
      id: 6,
      sender: "left",
      type: "text",
      content: "Booked! Thursday at 10 AM, Mike. Our inspector will call 30 min before. See you then! 🏠",
      loader: { enabled: true, duration: 2200 },
    },
  ],
};

export function D2DAIServices() {
  const [chatReady, setChatReady] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChatReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#04081A 0%,#050B18 50%,#04081A 100%)" }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: "60px 60px",
          backgroundImage:
            "linear-gradient(to right,rgba(37,99,235,0.06) 1px,transparent 1px),linear-gradient(to bottom,rgba(37,99,235,0.06) 1px,transparent 1px)",
          opacity: 0.5,
        }}
      />
      {/* Blue glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          right: "-10%",
          width: 700,
          height: 700,
          background: "radial-gradient(circle,rgba(37,99,235,0.08) 0%,transparent 65%)",
        }}
      />
      {/* Left glow */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          bottom: "10%",
          left: "-10%",
          width: 500,
          height: 500,
          background: "radial-gradient(circle,rgba(37,99,235,0.06) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">

        {/* ── Section header ── */}
        <div className="mb-16 lg:mb-20">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{
              border: "1px solid rgba(37,99,235,0.25)",
              background: "rgba(37,99,235,0.08)",
              color: "rgba(147,197,253,0.75)",
            }}
          >
            <Bot className="w-3 h-3" />
            AI Services
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Turn Every Website Visit<br className="hidden md:block" />
            <span
              style={{
                background: "linear-gradient(90deg,#60A5FA 0%,#93C5FD 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {" "}Into a Booked Appointment
            </span>
          </h2>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT — content */}
          <div className="flex flex-col gap-8 lg:sticky lg:top-24">

            {/* Service badge + title */}
            <div>
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg,rgba(37,99,235,0.2) 0%,rgba(37,99,235,0.05) 100%)",
                    border: "1px solid rgba(96,165,250,0.2)",
                  }}
                >
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">AI Chat Bot</h3>
                </div>
              </div>

              <p className="text-white/50 text-base leading-relaxed">
                Your website gets traffic. Most of it leaves without a trace. Our AI Chat Bot captures
                every visitor <span className="text-white/80 font-medium">around the clock</span> — qualifying
                leads, answering questions, and booking appointments automatically while you sleep.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3">
              {FEATURES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: "rgba(37,99,235,0.12)",
                      border: "1px solid rgba(96,165,250,0.18)",
                    }}
                  >
                    <Icon className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Pricing card */}
            <div
              className="rounded-2xl p-6 mt-2"
              style={{
                background: "linear-gradient(145deg,rgba(37,99,235,0.07) 0%,rgba(4,8,26,0.6) 100%)",
                border: "1px solid rgba(37,99,235,0.15)",
              }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                  >
                    Standalone Price
                  </p>
                  <p className="text-white/30 text-3xl font-black">
                    <span className="line-through">$69.99</span>
                    <span className="text-base font-normal">/mo</span>
                  </p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0"
                  style={{
                    background: "rgba(34,197,94,0.1)",
                    border: "1px solid rgba(34,197,94,0.2)",
                    color: "#4ade80",
                  }}
                >
                  BEST OFFER
                </div>
              </div>

              <div
                className="border-t pt-4"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <p className="text-white font-black text-2xl mb-1.5">
                  Included Free
                </p>
                <p className="text-white/45 text-sm leading-relaxed mb-5">
                  Get the AI Chat Bot at{" "}
                  <span className="text-white/80 font-semibold">no extra cost</span> when you add
                  any AI Service or Marketing Package to your plan.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                  style={{
                    background: "linear-gradient(135deg,#1D4ED8 0%,#2563EB 100%)",
                    boxShadow: "0 0 0 1px rgba(37,99,235,0.5),0 8px 24px -4px rgba(37,99,235,0.45)",
                  }}
                >
                  Claim This Offer
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — chat demo */}
          <div className="flex flex-col items-center lg:items-start">
            {/* Browser chrome */}
            <div className="w-full max-w-[440px]">
              <div
                className="rounded-t-2xl px-4 py-2.5 flex items-center gap-2"
                style={{
                  background: "#060D1E",
                  border: "1px solid rgba(37,99,235,0.15)",
                  borderBottom: "1px solid rgba(37,99,235,0.08)",
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(239,68,68,0.5)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(234,179,8,0.5)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(34,197,94,0.5)" }} />
                <div
                  className="mx-auto flex items-center gap-1.5 px-3 py-0.5 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: "#4ade80" }}
                  />
                  <span className="text-[10px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                    aria.yoursite.com · Live
                  </span>
                </div>
              </div>

              {/* Chat widget */}
              <div
                className="rounded-b-2xl overflow-hidden"
                style={{
                  border: "1px solid rgba(37,99,235,0.15)",
                  borderTop: "none",
                }}
              >
                {/* Mobile scale wrapper — only mounts when section scrolls into view */}
                <div className="chat-demo-scale-wrap">
                  {chatReady && <ChatComponent config={CHAT_CONFIG} uiConfig={CHAT_UI} />}
                </div>
              </div>

              {/* "Live Demo" label */}
              <p
                className="text-center text-xs mt-3 font-semibold tracking-widest uppercase"
                style={{ color: "rgba(96,165,250,0.4)" }}
              >
                Live Demo · Auto-Replay
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .chat-demo-scale-wrap { width: 100%; }
        .chat-demo-scale-wrap > div { width: 100% !important; max-width: 100% !important; }
      `}</style>
    </section>
  );
}
