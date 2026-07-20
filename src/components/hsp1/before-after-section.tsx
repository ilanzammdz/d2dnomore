import { ImageComparison } from "@/components/hsp1/ui/image-comparison-slider";

const CASES = [
  {
    title: "New Windows",
    description: "Drafty, foggy panes replaced with energy-efficient bay windows.",
    beforeImage: "/hsp1/comparisons/windows-before.jpg",
    afterImage: "/hsp1/comparisons/windows-after.jpg",
    altBefore: "Home with old, worn bay windows",
    altAfter: "Same home with new energy-efficient bay windows",
  },
  {
    title: "New Roof & Siding",
    description: "A full exterior refresh — aged roof and siding swapped for a modern, durable finish.",
    beforeImage: "/hsp1/comparisons/exterior-before.jpg",
    afterImage: "/hsp1/comparisons/exterior-after.jpg",
    altBefore: "Home with an aged roof and worn siding",
    altAfter: "Same home with a new roof and new siding",
  },
  {
    title: "New Siding & Trim",
    description: "Faded, damaged siding replaced with fresh color and crisp trim.",
    beforeImage: "/hsp1/comparisons/siding-before.jpg",
    afterImage: "/hsp1/comparisons/siding-after.jpg",
    altBefore: "Home with faded, worn siding",
    altAfter: "Same home with new siding and trim",
  },
] as const;

export function BeforeAfterSection() {
  return (
    <section className="relative bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            See The Difference
          </span>
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Before &amp; After
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Drag the slider to see how we transform worn-down homes into
          standout properties.
        </p>
      </div>

      <div className="mx-auto mt-16 flex max-w-5xl flex-col gap-16 px-6">
        {CASES.map((item) => (
          <div key={item.title}>
            <ImageComparison
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
              altBefore={item.altBefore}
              altAfter={item.altAfter}
            />
            <div className="mx-auto mt-5 max-w-xl text-center">
              <h3 className="font-heading text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
