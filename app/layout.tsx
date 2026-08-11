import './globals.css';
import type { Metadata } from 'next';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});
const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  title: 'MAG Traders (Pvt.) Ltd. — Printing, Branding & Advertising',
  description:
    'Your complete printing, branding & advertising solution. Offset, digital, large format, signage, corporate supplies and office/IT equipment — delivered nationwide across Pakistan.',
  keywords: [
    'printing Pakistan',
    'offset printing',
    'digital printing',
    'large format printing',
    'branding',
    'signage',
    'corporate supplies',
    'MAG Traders',
  ],
  openGraph: {
    title: 'MAG Traders (Pvt.) Ltd.',
    description:
      'Your complete printing, branding & advertising solution — delivered nationwide across Pakistan.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
