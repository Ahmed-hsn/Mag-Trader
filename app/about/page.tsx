'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { About } from '@/components/about';
import { useReveal } from '@/hooks/use-reveal';

export default function AboutPage() {
  useReveal();
  return (
    <>
      <Navbar />
      <main className="bg-ink pt-20">
        <About />
      </main>
      <Footer />
    </>
  );
}
