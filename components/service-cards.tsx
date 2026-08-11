import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '@/lib/content';

export function ServiceCards({ compact = false }: { compact?: boolean }) {
  const services = compact ? SERVICES.slice(0, 4) : SERVICES;

  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${compact ? 'lg:grid-cols-4' : 'lg:grid-cols-2'}`}>
      {services.map((service, index) => (
        <article
          key={service.id}
          className="group relative overflow-hidden rounded-sm border border-paper/10 bg-ink-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent/70 hover:shadow-[0_24px_60px_-24px_rgba(249,115,22,0.55)]"
        >
          <div className={`${compact ? 'aspect-[4/3]' : 'aspect-[16/8]' } relative overflow-hidden`}>
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes={compact ? '(max-width: 640px) 100vw, 25vw' : '(max-width: 1024px) 100vw, 50vw'}
              className="object-cover transition duration-700 ease-premium group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-70" />
            <div className="absolute left-5 top-5 flex items-center gap-3 text-paper">
              <span className="font-mono text-[11px] tracking-widest">{service.index}</span>
              <span className="h-px w-6 bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.2em]">{service.tagline}</span>
            </div>
            <span className="absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <div className="p-6 lg:p-7">
            <h3 className="display text-2xl text-paper transition-colors duration-300 group-hover:text-accent-light">
              {service.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-paper/60">{service.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.items.slice(0, compact ? 3 : 5).map((item) => (
                <span key={item.label} className="inline-flex items-center gap-1.5 border border-paper/10 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.12em] text-paper/60 transition-colors group-hover:border-brand-light/40 group-hover:text-paper/80">
                  <Check className="h-3 w-3 text-accent" />
                  {item.label}
                </span>
              ))}
            </div>
            {compact && (
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent-light">
                Explore service
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
