function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6c-.28-.04-1.25-.12-2.37-.12-2.35 0-3.96 1.43-3.96 4.06v2.34H7.6V13h2.77v8h3.13z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const FOOTER_LINKS: { title: string; links: string[] }[] = [
  {
    title: "Windows",
    links: ["Double-Hung", "Casement", "Sliding", "Bay & Bow", "Picture"],
  },
  {
    title: "Company",
    links: ["About Us", "Find a Dealer", "Careers", "Blog"],
  },
  {
    title: "Resources",
    links: ["Buying Guide", "Energy Star Info", "Warranty", "Financing"],
  },
  {
    title: "Support",
    links: ["Contact Us", "FAQ", "Track My Order", "ProNetwork Login"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-bold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="font-heading text-base font-extrabold tracking-tight text-foreground">
            Window Pros<span className="text-accent"> USA</span>
          </span>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Window Pros USA. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-foreground">
              <FacebookIcon />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
