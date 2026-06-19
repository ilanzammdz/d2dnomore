'use client';

import { Mic, ShieldCheck, Users, TrendingUp, CheckCircle2, XCircle } from 'lucide-react';
import { SplineScene } from './splite';
import { Spotlight } from './spotlight';
import { Card } from './card';
import { LightningSplit } from './lightning-split';
import { useIsMobile } from '@/hooks/useIsMobile';

const BOOKING_URL = 'https://api.leadconnectorhq.com/widget/booking/pLI3PnyKImdzfniX1AEE';

const FEATURES = [
  {
    icon: Mic,
    title: 'Synthesized Human Voice',
    desc: 'We don\'t use generic TTS robots. Every agent is built on cloned voice synthesis — modeled from real human speech patterns so natural, callers can\'t tell the difference.',
  },
  {
    icon: ShieldCheck,
    title: 'Clone Your Voice',
    desc: 'Want your agent to sound like you? We can clone your own voice and deploy it across every customer call — your brand, your tone, at scale.',
  },
  {
    icon: Users,
    title: 'Voice Branding',
    desc: 'Your voice becomes your brand. A consistent, recognizable sound builds trust with every interaction — just like a logo, but for your ears.',
  },
  {
    icon: TrendingUp,
    title: 'Always On — Never Off',
    desc: 'Your cloned voice agent handles calls 24/7, qualifies leads, books appointments, and follows up — without burnout, sick days, or overtime pay.',
  },
];

const COMPARISON = [
  { label: 'Monthly Cost', ai: 'From $399.99/mo', human: '$4,000–$12,000+/mo' },
  { label: 'Availability', ai: '24/7 · 365 Days', human: '9–5 · Mon–Fri Only' },
  { label: 'Human Fatigue', ai: 'Zero — Always Fresh', human: 'Burnout by Hour 4' },
  { label: 'Consistency', ai: 'Same Quality Every Call', human: 'Depends on the Rep' },
  { label: 'Compliance Risk', ai: 'Auto-Recorded & Logged', human: 'Script Drift & Human Error' },
  { label: 'Turnover', ai: '0% — No Resignations', human: '30–45% Annual Churn' },
  { label: 'Scalability', ai: '100s of Calls Instantly', human: 'Weeks to Hire & Train' },
];

function AICallCenterPanel() {
  return (
    <div
      className="flex h-full w-full items-start justify-start py-12 px-6 md:px-12 lg:px-16"
      style={{ background: 'linear-gradient(135deg,#04081A 0%,#060D22 100%)' }}
    >
      <div className="w-[46%] max-w-xs">
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black tracking-widest uppercase mb-4"
            style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', color: '#93C5FD' }}
          >
            <Mic className="w-3 h-3" /> AI Call Center
          </span>
          <p className="text-white/40 text-xs mt-2">Powered by D2D No More</p>
        </div>
        <div className="flex flex-col gap-4">
          {COMPARISON.map(({ label, ai }) => (
            <div key={label} className="flex flex-col gap-1">
              <p className="text-white/35 text-[11px] font-semibold uppercase tracking-wider">{label}</p>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: '#34D399' }} />
                <p className="text-white font-semibold text-sm">{ai}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{
            background: 'linear-gradient(90deg,#1D4ED8 0%,#2563EB 100%)',
            boxShadow: '0 0 24px rgba(37,99,235,0.35)',
          }}
        >
          Get Started — Book a Call
        </a>
      </div>
    </div>
  );
}

function HumanCallCenterPanel() {
  return (
    <div
      className="flex h-full w-full items-start justify-end py-12 px-6 md:px-12 lg:px-16"
      style={{ background: 'linear-gradient(135deg,#120808 0%,#1A0A0A 100%)' }}
    >
      <div className="w-[46%] max-w-xs">
        <div className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black tracking-widest uppercase mb-4"
            style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: '#FCA5A5' }}
          >
            <Users className="w-3 h-3" /> Human Call Center
          </span>
          <p className="text-white/40 text-xs mt-2">Traditional approach</p>
        </div>
        <div className="flex flex-col gap-4">
          {COMPARISON.map(({ label, human }) => (
            <div key={label} className="flex flex-col gap-1">
              <p className="text-white/35 text-[11px] font-semibold uppercase tracking-wider">{label}</p>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#F87171' }} />
                <p className="text-white/70 font-medium text-sm">{human}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white/30"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          Legacy Model — High Cost
        </div>
      </div>
    </div>
  );
}

export function D2DAIVoice() {
  const isMobile = useIsMobile();

  return (
    <section
      className="w-full relative"
      style={{ background: 'linear-gradient(180deg,#04081A 0%,#050C1A 50%,#04081A 100%)' }}
    >
      {/* Grid bg */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundSize: '60px 60px',
          backgroundImage:
            'linear-gradient(to right,rgba(37,99,235,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(37,99,235,0.04) 1px,transparent 1px)',
        }}
      />

      {/* Hero card */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-20 pb-16">
        <Card
          className="w-full overflow-hidden"
          style={{
            background: 'linear-gradient(135deg,rgba(4,8,26,0.9) 0%,rgba(5,12,26,0.95) 100%)',
            border: '1px solid rgba(37,99,235,0.15)',
            boxShadow: '0 0 80px -20px rgba(37,99,235,0.18)',
          } as React.CSSProperties}
        >
          <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[540px] relative">
            {/* Spotlight */}
            <Spotlight
              className="-top-32 left-0 md:left-16 md:-top-20"
              fill="rgba(96,165,250,0.6)"
            />

            {/* Left — copy */}
            <div className="relative z-10 flex flex-col justify-center px-8 py-12 lg:px-14 lg:py-16 lg:w-[52%]">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 w-fit"
                style={{
                  border: '1px solid rgba(37,99,235,0.25)',
                  background: 'rgba(37,99,235,0.08)',
                  color: 'rgba(147,197,253,0.8)',
                }}
              >
                <Mic className="w-3 h-3" />
                AI Voice Agent
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 tracking-tight">
                Your Voice.<br />
                <span
                  style={{
                    background: 'linear-gradient(90deg,#60A5FA 0%,#93C5FD 60%,#60A5FA 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  At Scale.
                </span>
              </h2>

              <p className="text-white/50 text-base leading-relaxed mb-8 max-w-md">
                Most AI voice agents sound robotic because they use generic text-to-speech. We synthesize
                cloned voices — modeled from real human speech — so your callers feel like they&apos;re talking
                to a real person every single time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {FEATURES.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="rounded-xl p-4"
                    style={{
                      background: 'rgba(37,99,235,0.05)',
                      border: '1px solid rgba(37,99,235,0.1)',
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#60A5FA' }} />
                      <p className="text-white font-semibold text-sm">{title}</p>
                    </div>
                    <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02] w-fit"
                style={{
                  background: 'linear-gradient(90deg,#1D4ED8 0%,#2563EB 100%)',
                  boxShadow: '0 0 28px rgba(37,99,235,0.4)',
                }}
              >
                <Mic className="w-4 h-4" />
                Clone My Voice — Book a Demo
              </a>
            </div>

            {/* Right — Spline 3D (hidden on mobile to save memory/battery) */}
            {!isMobile && (
              <div className="relative lg:w-[48%] min-h-[320px] lg:min-h-0 overflow-hidden">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Comparison header */}
      <div className="relative z-10 text-center pb-4 px-4">
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgba(96,165,250,0.55)' }}>
          The Real Difference
        </p>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
          AI Call Center vs. Human Call Center
        </h3>
        <p className="text-white/35 text-sm max-w-md mx-auto">
          Hover to compare — drag the divider to see both sides
        </p>
      </div>

      {/* Lightning comparison — desktop only */}
      {!isMobile && (
        <div className="relative z-10">
          <LightningSplit
            height="h-[680px]"
            leftComponent={<AICallCenterPanel />}
            rightComponent={<HumanCallCenterPanel />}
          />
        </div>
      )}

      {/* Mobile comparison table */}
      {isMobile && (
        <div className="relative z-10 px-4 pb-4">
          <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(37,99,235,0.15)' }}>
            {/* Header row */}
            <div className="grid grid-cols-2">
              <div className="px-4 py-3 text-center text-xs font-black tracking-widest uppercase" style={{ background: 'rgba(37,99,235,0.15)', color: '#93C5FD', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                AI Call Center
              </div>
              <div className="px-4 py-3 text-center text-xs font-black tracking-widest uppercase" style={{ background: 'rgba(239,68,68,0.1)', color: '#FCA5A5' }}>
                Human Call Center
              </div>
            </div>
            {/* Data rows */}
            {COMPARISON.map(({ label, ai, human }, i) => (
              <div
                key={label}
                className="grid grid-cols-2"
                style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderTop: '1px solid rgba(255,255,255,0.05)' }}
              >
                <div className="px-3 py-3.5 flex flex-col gap-1" style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</p>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 flex-shrink-0" style={{ color: '#34D399' }} />
                    <p className="text-white text-xs font-semibold leading-tight">{ai}</p>
                  </div>
                </div>
                <div className="px-3 py-3.5 flex flex-col gap-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>&nbsp;</p>
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-3 h-3 flex-shrink-0" style={{ color: '#F87171' }} />
                    <p className="text-white/60 text-xs font-medium leading-tight">{human}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pricing */}
      <div className="relative z-10 flex flex-col items-center px-4 py-16">
        <div
          className="w-full max-w-3xl rounded-2xl p-8 md:p-10 text-center"
          style={{
            background: 'linear-gradient(135deg,rgba(37,99,235,0.08) 0%,rgba(37,99,235,0.03) 100%)',
            border: '1px solid rgba(37,99,235,0.2)',
            boxShadow: '0 0 64px -16px rgba(37,99,235,0.2)',
          }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(96,165,250,0.6)' }}>
            AI Voice Agent — Pricing
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-4">
            {/* Base price */}
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-white">
                $399<span className="text-2xl text-white/50">.99</span>
                <span className="text-lg font-medium text-white/40">/mo</span>
              </p>
              <p className="text-white/40 text-sm mt-1">Starting at</p>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/10" />

            {/* Per-minute */}
            <div>
              <p className="text-4xl md:text-5xl font-extrabold text-white">
                12<span className="text-2xl text-white/50">¢</span>
                <span className="text-lg font-medium text-white/40"> / min</span>
              </p>
              <p className="text-white/40 text-sm mt-1">As low as</p>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/10" />

            {/* Included */}
            <div className="flex flex-col items-center">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-1"
                style={{
                  background: 'linear-gradient(90deg,rgba(37,99,235,0.25),rgba(96,165,250,0.18))',
                  border: '1px solid rgba(96,165,250,0.3)',
                  color: '#93C5FD',
                }}
              >
                ✦ Included at No Extra Cost
              </span>
              <p className="text-white/40 text-sm">with the Elite Pro Marketing Package</p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-white/25 text-[11px] leading-relaxed max-w-xl mx-auto mb-6">
            <span className="text-white/40 font-semibold">Billing note:</span> Telephony minutes and LLM inference minutes are metered independently. Real-time language model processing may incur additional compute costs above the per-minute call rate, proportional to token throughput and model tier selected.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(90deg,#1D4ED8 0%,#2563EB 100%)',
              boxShadow: '0 0 24px rgba(37,99,235,0.35)',
            }}
          >
            <Mic className="w-4 h-4" />
            Clone My Voice — Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
