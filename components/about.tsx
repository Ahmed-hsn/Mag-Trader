import Image from 'next/image';
import { PILLARS, STATS } from '@/lib/content';
import { SectionHeading } from '@/components/section-heading';

export function About() {
  return (
    <section id="about" className="relative bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + image */}
          <div className="lg:col-span-6">
            <SectionHeading
              index="§"
              eyebrow="About Us"
              title={
                <>
                  A trusted partner for{' '}
                  <span className="italic text-brand">brand identity.</span>
                </>
              }
            />
            <div className="reveal mt-10 group relative aspect-[5/4] w-full overflow-hidden bg-ink/5">
              <Image
                src="https://images.pexels.com/photos/6621000/pexels-photo-6621000.jpeg?auto=compress&cs=tinysrgb&w=1400"
                alt="Craftsman operating a printing press"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-paper">
                <span className="text-[10px] uppercase tracking-[0.25em]">
                  Craftsmanship
                </span>
                <span className="font-mono text-[10px] tracking-widest">EST. PAKISTAN</span>
              </div>
            </div>
          </div>

          {/* Right: copy + pillars + stats */}
          <div className="lg:col-span-6 lg:pl-8">
            <div className="reveal space-y-6 text-base leading-relaxed text-paper/70">
              <p>
                MAG Traders (Pvt.) Ltd. is a trusted partner for corporate printing,
                outdoor advertising and office essentials across Pakistan — combining
                modern printing technology with an in-house creative team to deliver
                work that meets a consistent, premium standard.
              </p>
              <p>
                From the first proof to final delivery, every project moves through a
                single point of contact — so the brief, the artwork and the finished
                product stay aligned.
              </p>
            </div>

            {/* Pillars */}
            <div className="reveal mt-12 grid gap-6 sm:grid-cols-3">
              {PILLARS.map((p, i) => (
                <div key={p.label} className="border-l border-paper/15 pl-5">
                  <span className="font-mono text-[11px] tracking-widest text-brand">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl text-paper">{p.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/55">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="reveal mt-14 grid grid-cols-2 gap-px border-y border-paper/10 bg-paper/10 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-ink-soft px-5 py-6">
                  <div className="flex items-baseline">
                    <span className="display text-4xl text-paper">{s.value}</span>
                    <span className="text-2xl text-brand">{s.suffix}</span>
                  </div>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-paper/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
