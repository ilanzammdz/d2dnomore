"use client";

import { useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { Button } from "@/components/hsp2/ui/button";

const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1783125127082-3fb6c1bccd72?w=800&q=80&auto=format&fit=crop",
    alt: "Modern stone home with large black-frame windows",
  },
  {
    src: "https://images.unsplash.com/photo-1782852634404-972610f87807?w=800&q=80&auto=format&fit=crop",
    alt: "Classic white farmhouse with black-trimmed windows",
  },
  {
    src: "https://images.unsplash.com/photo-1721932423849-e9033192b190?w=800&q=80&auto=format&fit=crop",
    alt: "Living room with large black-frame picture windows",
  },
  {
    src: "https://images.unsplash.com/photo-1783587616528-a37972228563?w=800&q=80&auto=format&fit=crop",
    alt: "Close-up of professional window installation tools",
  },
];

const BLOG_POSTS = [
  {
    title: "5 Signs You Need New Windows",
    excerpt: "Drafts, fog between panes, and stuck sashes are more than annoying — they're costing you money.",
  },
  {
    title: "Understanding Energy Star Ratings",
    excerpt: "U-factor, SHGC, and what they actually mean for your monthly utility bill.",
  },
  {
    title: "Choosing the Right Window Style for Your Home",
    excerpt: "A quick guide to matching window styles to your home's architecture and climate.",
  },
];

export function GallerySection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="gallery" className="border-t border-border py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Inspiration
          </span>
          <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            See It In Real Homes
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="font-heading text-xl font-bold text-foreground">
              From the Blog
            </h3>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.title}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h4 className="font-heading text-sm font-bold text-card-foreground">
                    {post.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
            <h3 className="font-heading text-lg font-bold">
              Get Window Buying Tips
            </h3>
            <p className="mt-2 text-sm text-primary-foreground/80">
              One email a month. No spam, unsubscribe anytime.
            </p>
            {submitted ? (
              <p className="mt-4 text-sm font-medium">
                You&apos;re on the list — thanks for subscribing!
              </p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="mt-4 flex flex-col gap-2 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="h-10 flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:ring-2 focus:ring-primary-foreground/40"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="h-10 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
