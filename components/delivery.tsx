import { MapPin } from 'lucide-react';

export function Delivery() {
  return (
    <section className="relative overflow-hidden bg-brand text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 48px)',
        }}
      />
      <div className="container-edge relative flex flex-col items-start justify-between gap-8 py-14 sm:flex-row sm:items-center lg:py-16">
        <div className="flex items-center gap-5">
          <span className="flex h-12 w-12 items-center justify-center border border-paper/30">
            <MapPin className="h-5 w-5" />
          </span>
          <div>
            <span className="eyebrow text-paper/70">Delivery</span>
            <h2 className="display mt-1 text-[clamp(1.6rem,3vw,2.4rem)] text-paper">
              Delivery Across Pakistan
            </h2>
          </div>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-paper/80">
          No matter where you are located in Pakistan, we provide safe, secure and
          timely delivery right to your doorstep — from single parcels to fleet-wide
          consignments.
        </p>
      </div>
    </section>
  );
}
