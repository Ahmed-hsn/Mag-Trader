import Link from 'next/link';
import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '@/lib/content';
import { BrandLogo } from '@/components/brand-logo';

export function Footer() {
  return (
    <footer className="relative bg-ink-soft text-paper">
      {/* Top CTA band */}
      <div className="container-edge border-b border-paper/10 py-14">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="display max-w-2xl text-[clamp(2rem,4vw,3.4rem)] text-paper">
            Ready to start your{' '}
            <span className="italic text-accent">next project?</span>
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-accent px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-ink btn-sheen transition-all duration-300 hover:bg-accent-light hover:shadow-[0_8px_24px_-8px_hsl(var(--accent)/0.6)]"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="container-edge grid gap-12 py-16 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="lg:col-span-5">
          <BrandLogo dark />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
            Your complete printing, branding &amp; advertising solution — delivering
            premium products, creative design and reliable service across Pakistan.
          </p>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-3">
          <span className="eyebrow text-paper/50">Navigate</span>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="nav-link text-sm text-paper/70 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <span className="eyebrow text-paper/50">Contact</span>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={CONTACT.phoneHref} className="group flex items-center gap-3 text-paper/70 hover:text-accent transition-colors">
                <Phone className="h-4 w-4 text-accent" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="group flex items-center gap-3 text-paper/70 hover:text-accent transition-colors">
                <Mail className="h-4 w-4 text-accent" />
                {CONTACT.email}
              </a>
            </li>
            <li className="text-paper/55">{CONTACT.hours}</li>
            <li className="text-paper/55">{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-paper/10">
        <div className="container-edge flex flex-col items-center justify-between gap-3 py-6 text-[11px] text-paper/50 sm:flex-row">
          <span>© 2026 MAG Traders (Pvt.) Ltd. All rights reserved.</span>
          <span className="font-mono tracking-widest uppercase">Printing · Branding · Advertising</span>
        </div>
      </div>
    </footer>
  );
}
