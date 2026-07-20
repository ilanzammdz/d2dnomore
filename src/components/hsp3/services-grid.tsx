import {
  LeakRepairIcon,
  DrainCleaningIcon,
  WaterHeaterIcon,
  RepipingIcon,
  SumpPumpIcon,
  EmergencyServiceIcon,
} from "@/components/hsp3/service-icons";

const SERVICES = [
  {
    icon: LeakRepairIcon,
    name: "Leak Repair",
    description: "Fast diagnosis and repair for hidden and visible leaks before they cause real damage.",
  },
  {
    icon: DrainCleaningIcon,
    name: "Drain Cleaning",
    description: "Clear slow and clogged drains at the source, not just the symptom.",
  },
  {
    icon: WaterHeaterIcon,
    name: "Water Heaters",
    description: "Repair, replacement, and installation for tank and tankless water heaters.",
  },
  {
    icon: RepipingIcon,
    name: "Repiping",
    description: "Full or partial repiping for aging, corroded, or undersized plumbing systems.",
  },
  {
    icon: SumpPumpIcon,
    name: "Sump Pumps",
    description: "Installation, repair, and battery backup for basement and crawlspace sump pumps.",
  },
  {
    icon: EmergencyServiceIcon,
    name: "Emergency Service",
    description: "Burst pipes and major leaks don't wait for business hours — neither do we.",
  },
] as const;

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            What We Handle
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Full-Service Residential Plumbing
          </h2>
          <p className="mt-3 text-muted-foreground">
            From a dripping faucet to a full repipe, one call covers it all.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, name, description }) => (
            <div
              key={name}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-heading text-base font-bold text-card-foreground">
                  {name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
