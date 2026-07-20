import { Compass, LayoutGrid, ClipboardCheck } from "lucide-react";

const STEPS = [
  {
    icon: Compass,
    title: "1. Explore Styles",
    description:
      "Browse window styles by how they open and function to find what fits your home's architecture.",
  },
  {
    icon: LayoutGrid,
    title: "2. Compare Collections",
    description:
      "Weigh performance, materials, and price across our replacement and new-construction lines.",
  },
  {
    icon: ClipboardCheck,
    title: "3. Get Your Free Quote",
    description:
      "A local installer measures your home and gives you a firm, no-pressure quote.",
  },
];

export function GuidanceSection() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            New to Window Shopping? Start Here.
          </h2>
          <p className="mt-3 text-muted-foreground">
            Three simple steps to a window project that actually goes
            smoothly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
