'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { HERO_SLIDES } from '@/lib/content';

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      {/* Slides */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-premium',
              i === index ? 'opacity-100' : 'opacity-0'
            )}
            aria-hidden={i !== index}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className={cn(
                'h-full w-full object-cover',
                i === index && mounted ? 'animate-ken-burns' : ''
              )}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 bg-ink/20" />

      {/* Crop marks (decorative) */}
      <CropMarks />

      {/* Content */}
      <div className="container-edge relative z-10 flex h-full flex-col justify-end pb-16 sm:pb-20 lg:pb-24">
        <div className="max-w-4xl">
          <div
            className={cn(
              'transition-all duration-1000 ease-premium',
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
          >
            <div className="flex items-center gap-3 text-paper/70">
              <span className="h-px w-10 bg-brand" />
              <span className="eyebrow text-paper/80">Printing · Branding · Advertising</span>
            </div>
          </div>

          <h1
            className={cn(
              'mt-6 display text-paper text-[clamp(2.6rem,7vw,5.6rem)] transition-all duration-1000 ease-premium',
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: mounted ? '120ms' : '0ms' }}
          >
            Welcome to{' '}
            <span className="italic text-paper/90">MAG Traders</span>{' '}
            <span className="text-brand">(Pvt.) Ltd.</span>
          </h1>

          <p
            className={cn(
              'mt-6 max-w-xl text-lg leading-relaxed text-paper/75 transition-all duration-1000 ease-premium',
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: mounted ? '240ms' : '0ms' }}
          >
            Your complete printing, branding &amp; advertising solution — high-quality
            products, creative design and reliable service to help you build a lasting
            brand identity.
          </p>

          <div
            className={cn(
              'mt-10 flex flex-col gap-4 sm:flex-row sm:items-center transition-all duration-1000 ease-premium',
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: mounted ? '360ms' : '0ms' }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-paper px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-ink btn-sheen transition-colors duration-300 hover:bg-brand hover:text-paper"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 border border-paper/30 px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-paper transition-colors duration-300 hover:border-paper hover:bg-paper/5"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Slide indicator */}
        <div className="mt-12 flex items-center gap-6 text-paper/60">
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show ${s.caption}`}
                className="group relative h-[2px] w-10 overflow-hidden bg-paper/20"
              >
                <span
                  className={cn(
                    'absolute inset-y-0 left-0 bg-paper transition-all duration-500 ease-premium',
                    i === index ? 'w-full' : 'w-0 group-hover:w-1/3'
                  )}
                />
              </button>
            ))}
          </div>
          <span className="font-mono text-[11px] tracking-wider text-paper/70">
            {String(index + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
          </span>
          <span className="hidden sm:block text-paper/50 text-[11px] tracking-widest uppercase">
            {HERO_SLIDES[index].caption}
          </span>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 right-7 z-10 hidden lg:flex flex-col items-center gap-2 text-paper/50">
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-rl]">
          Scroll
        </span>
        <span className="h-12 w-px bg-paper/30 relative overflow-hidden">
          <span className="absolute top-0 left-0 h-1/2 w-full bg-paper animate-[fade-in_1.4s_ease-in-out_infinite_alternate]" />
        </span>
      </div>
    </section>
  );
}

function CropMarks() {
  const base = 'absolute h-5 w-5 border-paper/30';
  return (
    <div aria-hidden className="pointer-events-none">
      <span className={`${base} left-6 top-24 border-l border-t`} />
      <span className={`${base} right-6 top-24 border-r border-t`} />
      <span className={`${base} left-6 bottom-6 border-l border-b`} />
      <span className={`${base} right-6 bottom-6 border-r border-b`} />
    </div>
  );
}
