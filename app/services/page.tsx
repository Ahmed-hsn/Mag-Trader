'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ServiceCards } from '@/components/service-cards';
import { Delivery } from '@/components/delivery';
import { useReveal } from '@/hooks/use-reveal';

export default function ServicesPage() {
  useReveal();
  return (
    <>
      <Navbar />
      <main className="bg-ink pt-28">
        <section className="container-edge py-20 sm:py-28 lg:py-36">
          <div className="reveal max-w-4xl">
            <span className="eyebrow text-accent">Our capabilities</span>
            <h1 className="display mt-5 text-[clamp(3.2rem,8vw,7.5rem)] text-paper">
              Built for every <span className="italic text-brand-light">brand moment.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper/65 sm:text-lg">
              Explore the complete MAG Traders service line. Choose a department, share your brief and we will take care of the details from artwork to delivery.
            </p>
          </div>
          <div className="reveal reveal-delay-2 mt-16 lg:mt-24">
            <ServiceCards />
          </div>
        </section>
        <Delivery />
      </main>
      <Footer />
    </>
  );
}
