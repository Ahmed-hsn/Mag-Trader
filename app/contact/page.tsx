'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import { useReveal } from '@/hooks/use-reveal';

export default function ContactPage() {
  useReveal();
  return (
    <>
      <Navbar />
      <main className="bg-ink pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
