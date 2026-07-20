import { Check } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/hsp2/ui/tabs";
import { Button } from "@/components/hsp2/ui/button";

interface Collection {
  name: string;
  material: string;
  description: string;
  features: string[];
  colors: number;
}

const REPLACEMENT: Collection[] = [
  {
    name: "Heritage Series",
    material: "Vinyl",
    description:
      "Our best-selling line — a dependable, energy-efficient window for classic replacement projects.",
    features: ["Double-pane low-E glass", "Fusion-welded frame", "10-year warranty"],
    colors: 6,
  },
  {
    name: "Summit Collection",
    material: "Vinyl / Fiberglass",
    description:
      "Reinforced frames and premium glass packages for homes in harsher climates.",
    features: ["Triple-pane available", "Argon gas fill", "Limited lifetime warranty"],
    colors: 9,
  },
  {
    name: "EcoGuard Series",
    material: "Vinyl",
    description:
      "Our most energy-efficient replacement window, built around ENERGY STAR performance targets.",
    features: ["ENERGY STAR Most Efficient", "Low U-factor glass", "10-year warranty"],
    colors: 6,
  },
];

const NEW_CONSTRUCTION: Collection[] = [
  {
    name: "Foundation Series",
    material: "Vinyl",
    description:
      "A cost-conscious option for builders that doesn't cut corners on performance.",
    features: ["Nail-fin installation", "Double-pane low-E glass", "10-year warranty"],
    colors: 5,
  },
  {
    name: "Crestline Collection",
    material: "Fiberglass",
    description:
      "Rigid, low-expansion frames built for precise new-construction installs.",
    features: ["Slim sightlines", "Paintable exterior", "Limited lifetime warranty"],
    colors: 8,
  },
  {
    name: "Vantage Series",
    material: "Wood / Aluminum-Clad",
    description:
      "A premium wood-interior window with a low-maintenance exterior clad finish.",
    features: ["Real wood interior", "Aluminum-clad exterior", "20-year warranty"],
    colors: 12,
  },
];

function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <div className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">
        {collection.material}
      </span>
      <h3 className="mt-1 font-heading text-xl font-bold text-card-foreground">
        {collection.name}
      </h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {collection.description}
      </p>
      <ul className="mt-4 flex flex-col gap-2">
        {collection.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-card-foreground">
            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
            {feature}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        {collection.colors} exterior color options
      </p>
      <Button variant="outline" className="mt-5 w-full">
        Learn More
      </Button>
    </div>
  );
}

export function ProductCollections() {
  return (
    <section id="collections" className="border-y border-border bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Product Collections
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Built for Your Project
          </h2>
          <p className="mt-3 text-muted-foreground">
            Whether you&apos;re replacing old windows or building new, there&apos;s
            a collection engineered for it.
          </p>
        </div>

        <Tabs defaultValue="replacement" className="mt-12">
          <TabsList className="mx-auto grid w-full max-w-sm grid-cols-2">
            <TabsTrigger value="replacement">Replacement</TabsTrigger>
            <TabsTrigger value="new-construction">New Construction</TabsTrigger>
          </TabsList>
          <TabsContent value="replacement" className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {REPLACEMENT.map((c) => (
                <CollectionCard key={c.name} collection={c} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="new-construction" className="mt-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {NEW_CONSTRUCTION.map((c) => (
                <CollectionCard key={c.name} collection={c} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
