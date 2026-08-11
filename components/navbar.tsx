'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { NAV_LINKS } from '@/lib/content';
import { BrandLogo } from '@/components/brand-logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium',
        scrolled
          ? 'bg-ink/80 backdrop-blur-xl border-b border-paper/10 shadow-[0_1px_30px_-12px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <nav className="container-edge flex h-[68px] items-center justify-between lg:h-[76px]">
        <BrandLogo dark />

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'nav-link text-[13px] tracking-wide transition-colors duration-300',
                  active ? 'text-paper is-active' : 'text-paper/65 hover:text-paper'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-[12px] uppercase tracking-[0.18em] text-ink btn-sheen transition-all duration-300 hover:bg-accent-light hover:shadow-[0_8px_24px_-8px_hsl(var(--accent)/0.6)]"
          >
            Get a Quote
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 items-center justify-center text-paper"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className="relative z-50">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-[68px] z-40 bg-ink transition-all duration-500 ease-premium',
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div className="container-edge flex flex-col py-10">
          <span className="eyebrow text-accent mb-8">Menu</span>
          <div className="flex flex-col divide-y divide-paper/10">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-baseline justify-between py-5 transition-all duration-500 ease-premium"
                style={{
                  transform: open ? 'translateY(0)' : 'translateY(12px)',
                  opacity: open ? 1 : 0,
                  transitionDelay: open ? `${120 + i * 60}ms` : '0ms',
                }}
              >
                <span className="font-serif text-3xl tracking-tight text-paper group-hover:text-accent transition-colors duration-300">
                  {link.label}
                </span>
                <span className="text-[11px] text-paper/40 tracking-widest">
                  0{i + 1}
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-[12px] uppercase tracking-[0.2em] text-ink btn-sheen"
          >
            Get a Quote
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
