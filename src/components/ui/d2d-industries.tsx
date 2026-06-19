"use client";


const INDUSTRIES = [
  "Auto Industry",
  "Bath Remodel",
  "Customer Service",
  "Electrical Work",
  "Hospitality",
  "HVAC & Cooling",
  "Human Resources",
  "Kitchen Remodel",
  "Law Firms",
  "Logistics & Dispatching",
  "Med Spas",
  "Plumbing",
  "Recruiting",
  "Roofing",
  "Salons",
  "Siding",
  "Solar",
  "Travel Agencies",
  "Windows & Doors",
];

export function D2DIndustries() {
  const n = INDUSTRIES.length;

  return (
    <>
      <p className="sr-only">
        D2D No More is perfect for businesses in: {INDUSTRIES.join(", ")}.
      </p>

      <div
        aria-hidden="true"
        className="d2d-ind"
        style={{ "--n": n } as React.CSSProperties}
      >
        {/* Sticky cycling header */}
        <header className="d2d-ind-hdr">
          <div className="d2d-ind-row">
            <span className="d2d-ind-prefix">Perfect&nbsp;for</span>
            <ul className="d2d-ind-list">
              {INDUSTRIES.map((name, i) => (
                <li
                  key={name}
                  className="d2d-ind-word"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </header>

        <style>{CSS}</style>
      </div>
    </>
  );
}

const CSS = `
  .d2d-ind {
    --start: 25vh;
    --space: 30vh;
    --accent: #60A5FA;
    --dim: rgba(255,255,255,0.11);
    background: #04081A;
    width: 100%;
    position: relative;
    /* bottom padding so the last word clears the viewport before next section */
    padding-bottom: var(--space);
  }

  .d2d-ind::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-size: 60px 60px;
    background-image:
      linear-gradient(to right, rgba(37,99,235,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(37,99,235,0.05) 1px, transparent 1px);
  }

  /* ── Intro ── */
  .d2d-ind-intro {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem clamp(1.5rem, 7vw, 8rem) 0;
    gap: 1.25rem;
  }

  .d2d-ind-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.375rem 1rem;
    border-radius: 9999px;
    border: 1px solid rgba(37,99,235,0.25);
    background: rgba(37,99,235,0.08);
    color: rgba(147,197,253,0.75);
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .d2d-ind-badge-icon {
    width: 0.65rem;
    height: 0.65rem;
  }

  .d2d-ind-sub {
    margin: 0;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: rgba(255,255,255,0.35);
    max-width: 42ch;
    line-height: 1.6;
  }

  /* ── Sticky cycling header ── */
  .d2d-ind-hdr {
    font-size: clamp(2.25rem, 3.4vw, 3rem);
    line-height: 1.2;
    font-weight: 800;
    letter-spacing: -0.025em;
    position: sticky;
    top: calc((var(--n) - 1) * -1lh);
    margin-bottom: 0;
  }

  .d2d-ind-row {
    display: flex;
    align-items: flex-start;
    padding-left: clamp(1.5rem, 7vw, 8rem);
    padding-top: calc(var(--start) - 0.5lh);
  }

  /* Inner sticky: stays at the spotlight band while header scrolls */
  .d2d-ind-prefix {
    position: sticky;
    top: calc(var(--start) - 0.5lh);
    color: rgba(255,255,255,0.28);
    white-space: nowrap;
    padding-right: 0.22em;
    flex-shrink: 0;
    align-self: flex-start;
  }

  .d2d-ind-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Viewport-anchored spotlight via fixed background */
  .d2d-ind-word {
    background: linear-gradient(
      180deg,
      var(--dim)    0                           calc(var(--start) - 0.5lh),
      var(--accent) calc(var(--start) - 0.55lh) calc(var(--start) + 0.55lh),
      var(--dim)    calc(var(--start) + 0.5lh)
    );
    background-attachment: fixed;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  /* ── Mobile: stack vertically ── */
  @media (max-width: 640px) {
    .d2d-ind-hdr { font-size: clamp(1.875rem, 8vw, 2.5rem); }
    .d2d-ind-row { flex-direction: column; padding-left: clamp(1.25rem, 5vw, 2.5rem); }
    .d2d-ind-prefix {
      position: static;
      padding-right: 0;
      color: rgba(255,255,255,0.32);
      font-size: 0.7em;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }
    .d2d-ind-intro { padding-top: 4rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    .d2d-ind-word { background-attachment: scroll; }
  }
`;
