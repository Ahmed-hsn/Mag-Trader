'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhyUs } from '@/components/why-us';
import { Delivery } from '@/components/delivery';
import { useReveal } from '@/hooks/use-reveal';

export default function WhyUsPage() {
  useReveal();
  return (
    <>
      <Navbar />
      <main className="bg-ink pt-20">
        <WhyUs />
        <Delivery />
      </main>
      <Footer />
    </>
  );
}
