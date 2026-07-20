import {
  DoubleHungIcon,
  CasementIcon,
  SlidingIcon,
  AwningIcon,
  BayBowIcon,
  GardenIcon,
  PictureIcon,
  HopperIcon,
  GeometricIcon,
  EgressIcon,
} from "@/components/hsp2/window-style-icons";

const STYLES = [
  {
    icon: DoubleHungIcon,
    name: "Double-Hung",
    description: "Two sashes that slide up and down independently for easy cleaning and airflow.",
  },
  {
    icon: CasementIcon,
    name: "Casement",
    description: "Hinged at the side and opened with a crank for a tight, energy-efficient seal.",
  },
  {
    icon: SlidingIcon,
    name: "Sliding",
    description: "Panels glide side to side — a great fit for spaces above counters and patios.",
  },
  {
    icon: AwningIcon,
    name: "Awning",
    description: "Hinged at the top and opens outward, so you can ventilate even in the rain.",
  },
  {
    icon: BayBowIcon,
    name: "Bay & Bow",
    description: "Angled, multi-panel windows that add square footage and flood a room with light.",
  },
  {
    icon: GardenIcon,
    name: "Garden",
    description: "A boxed-out window with a shelf, perfect for herbs and small plants in the kitchen.",
  },
  {
    icon: PictureIcon,
    name: "Picture",
    description: "A large, fixed pane that frames the view and maximizes natural light.",
  },
  {
    icon: HopperIcon,
    name: "Hopper",
    description: "Hinged at the bottom and tilts inward — common for basements and bathrooms.",
  },
  {
    icon: GeometricIcon,
    name: "Geometric",
    description: "Custom shapes — arches, triangles, and circles — for architectural accents.",
  },
  {
    icon: EgressIcon,
    name: "Egress",
    description: "Sized and rated to meet safety code as a bedroom or basement exit point.",
  },
] as const;

export function WindowStylesGrid() {
  return (
    <section id="styles" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Shop by Style
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            A Window for Every Room
          </h2>
          <p className="mt-3 text-muted-foreground">
            Every style is available across our full range of collections and
            finishes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {STYLES.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-5 text-center transition-colors hover:border-primary/40"
            >
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon />
              </div>
              <h3 className="font-heading text-sm font-bold text-card-foreground">
                {name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
