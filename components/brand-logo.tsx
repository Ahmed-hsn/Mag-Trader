import Image from 'next/image';
import Link from 'next/link';

export function BrandLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="MAG Traders home">
      <Image
        src="/images/mag-traders-logo.svg"
        alt="MAG Traders"
        width={48}
        height={48}
        className="h-11 w-11 object-contain transition-transform duration-500 group-hover:rotate-3"
      />
      <span className={`flex flex-col leading-none ${dark ? 'text-paper' : 'text-ink'}`}>
        <span className="font-serif text-[17px] tracking-tight">MAG Traders</span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.28em] opacity-55">Pvt. Ltd.</span>
      </span>
    </Link>
  );
}
