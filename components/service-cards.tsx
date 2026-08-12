'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES } from '@/lib/content';

/* ─── Compact homepage cards (4 main categories) ─── */
export function ServiceCards({ compact = false }: { compact?: boolean }) {
  const services = compact ? SERVICES.slice(0, 4) : SERVICES;

  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${compact ? 'lg:grid-cols-4' : 'lg:grid-cols-2'}`}>
      {services.map((service) => (
        <article
          key={service.id}
          className="group relative overflow-hidden rounded-sm border border-paper/10 bg-ink-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent/70 hover:shadow-[0_24px_60px_-24px_rgba(249,115,22,0.55)]"
        >
          {/* Fixed height image container — no aspect-ratio, no fill, always has height */}
          <div className="relative h-56 overflow-hidden">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-700 ease-out group-hover:scale-110"
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

/* ─── Full services page: individual cards grouped by category ─── */
export function ServiceCategoryGrid() {
  return (
    <div className="space-y-20 lg:space-y-28">
      {SERVICE_CATEGORIES.map((category, catIndex) => (
        <section key={category.id}>
          {/* Category header */}
          <div className="mb-10 flex items-end gap-6 border-b border-paper/10 pb-6">
            <div>
              <span className="font-mono text-[11px] tracking-widest text-accent">
                {String(catIndex + 1).padStart(2, '0')}
              </span>
              <h2 className="display mt-2 text-3xl text-paper sm:text-4xl">{category.label}</h2>
            </div>
            <span className="mb-1 ml-auto font-mono text-[11px] tracking-widest text-paper/40">
              {category.services.length} services
            </span>
          </div>

          {/* Individual service cards — plain <img> for guaranteed visibility on all devices */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {category.services.map((service) => (
              <article
                key={service.id}
                className="group overflow-hidden rounded-sm border border-paper/10 bg-ink-soft transition-all duration-500 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_20px_50px_-20px_rgba(249,115,22,0.5)]"
              >
                {/* Image wrapper — explicit fixed height, no fill/aspect-ratio tricks */}
                <div className="relative h-40 overflow-hidden sm:h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-55" />
                  {/* Category badge */}
                  <span className="absolute left-3 top-3 rounded-full border border-accent/40 bg-ink/70 px-2.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
                    {service.category}
                  </span>
                  {/* Hover arrow */}
                  <span className="absolute bottom-3 right-3 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full bg-accent text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3 className="text-sm font-semibold leading-snug text-paper transition-colors duration-300 group-hover:text-accent-light">
                    {service.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5">
                    <Check className="h-3 w-3 flex-shrink-0 text-accent" />
                    <span className="text-[9px] uppercase tracking-[0.12em] text-paper/50">
                      Available Now
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
