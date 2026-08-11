'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const WORDS = [
  'Offset Printing',
  'Digital Printing',
  'Large Format',
  'Flex & Banners',
  'Vinyl',
  'Brochures',
  'Business Cards',
  'Catalogs',
  'Sign Boards',
  'Hoardings',
  'Vehicle Branding',
  'Corporate Gifts',
  'Stationery',
  'IT Solutions',
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-paper/10 bg-ink-soft py-5">
      <div className="mask-fade-edges flex">
        <div className="flex shrink-0 animate-marquee items-center">
          {WORDS.map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-serif text-lg italic text-paper/70">{w}</span>
              <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0 animate-marquee items-center" aria-hidden>
          {WORDS.map((w, i) => (
            <span key={i} className="flex items-center">
              <span className="px-6 font-serif text-lg italic text-paper/70">{w}</span>
              <span className="text-brand">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
