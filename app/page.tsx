'use client';

import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { HeroSlider } from '@/components/hero-slider';
import { Marquee } from '@/components/marquee';
import { Services } from '@/components/services';
import { Delivery } from '@/components/delivery';
import { Footer } from '@/components/footer';
import { useReveal } from '@/hooks/use-reveal';

export default function Home() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <Marquee />
        <Services compact />
        <section className="relative overflow-hidden bg-ink-soft py-20 sm:py-28">
          <div className="container-edge grid items-end gap-8 lg:grid-cols-12">
            <div className="reveal lg:col-span-8">
              <span className="eyebrow text-accent">A complete brand partner</span>
              <h2 className="display mt-5 max-w-3xl text-[clamp(2.2rem,5vw,5rem)] text-paper">
                Make your next impression <span className="italic text-brand-light">count.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-2 lg:col-span-4">
              <p className="text-sm leading-relaxed text-paper/65">
                MAG Traders brings printing, branding, corporate essentials and office technology together under one dependable roof.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-accent hover:text-accent-light transition-colors">
                Meet MAG Traders <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-20 text-accent/5">
            <Sparkles className="h-80 w-80" strokeWidth={0.5} />
          </div>
        </section>
        <Delivery />
      </main>
      <Footer />
    </>
  );
}
