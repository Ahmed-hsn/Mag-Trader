import Image from 'next/image';
import Link from 'next/link';

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="MAG Traders home">
      <Image
        src="/images/mag-traders-logo.png"
        alt="MAG Traders"
        width={140}
        height={70}
        className="h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105"
        priority
      />
      <span className={`flex flex-col justify-center leading-none ${dark ? 'text-paper' : 'text-ink'}`}>
        <span className="font-serif text-[18px] tracking-[0.08em] font-bold">MAG TRADERS</span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.28em] opacity-50">Pvt. Ltd.</span>
      </span>
    </Link>
  );
}
