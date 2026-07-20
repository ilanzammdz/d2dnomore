import { AppointmentBooking } from "@/components/hsp3/appointment-booking";

export function BookAppointmentSection() {
  return (
    <section id="booking" className="relative bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Get Started
          </span>
        </div>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Book Your Plumber
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Pick a day and time that works for you. For anything that
          can&apos;t wait, call our 24/7 emergency line instead.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-6">
        <AppointmentBooking />
      </div>
    </section>
  );
}
