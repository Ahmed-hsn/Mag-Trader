import { ADVANTAGES } from '@/lib/content';
import { SectionHeading } from '@/components/section-heading';

export function WhyUs() {
  return (
    <section id="why-us" className="relative bg-ink py-24 text-paper sm:py-32 lg:py-40">
      {/* faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="container-edge relative">
        <SectionHeading
          index="§"
          eyebrow="Why Choose Us"
          title={
            <>
              The difference is in the{' '}
              <span className="italic text-brand-light">detail.</span>
            </>
          }
          description="Eight reasons clients across Pakistan trust MAG Traders with their brand."
          className="text-paper [&_h2]:text-paper [&_p]:text-paper/70 [&_span.eyebrow]:text-paper/70"
        />

        <div className="mt-16 grid gap-px bg-paper/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {ADVANTAGES.map((a) => (
            <div
              key={a.n}
              className="reveal group relative bg-ink p-7 transition-colors duration-500 hover:bg-ink-soft lg:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[11px] tracking-widest text-brand-light">
                  {a.n}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-paper/20 transition-colors duration-500 group-hover:bg-brand" />
              </div>
              <h3 className="mt-6 font-serif text-xl leading-snug text-paper">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/55">{a.desc}</p>
              <span className="mt-6 block h-px w-0 bg-brand transition-all duration-500 ease-premium group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
