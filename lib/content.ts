export type ServiceItem = { label: string; desc: string };

export type ServiceGroup = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  items: ServiceItem[];
};

export const HERO_SLIDES = [
  {
    image:
      'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Industrial printing machine processing paper sheets',
    caption: 'Offset Press',
    sub: 'High-volume commercial runs',
  },
  {
    image:
      'https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Detailed view of an industrial printing press',
    caption: 'Precision Machinery',
    sub: 'Ready-for-production technology',
  },
  {
    image:
      'https://images.pexels.com/photos/19316517/pexels-photo-19316517.png?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Close-up of an industrial printing press producing designs',
    caption: 'Print Finishing',
    sub: 'Flawless colour and detail',
  },
  {
    image:
      'https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=2000',
    alt: 'Hand applying ink to a printing press roller',
    caption: 'Ink & Craft',
    sub: 'Skilled printing craftsmanship',
  },
];

export const SERVICES: ServiceGroup[] = [
  {
    id: 'printing',
    index: '01',
    title: 'Printing',
    tagline: 'From short runs to high-volume press',
    description:
      'A full spectrum of commercial print — offset, digital, large format and specialty — produced on ready-for-production machinery with strict colour control.',
    image:
      'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Industrial printing machine processing paper sheets',
    items: [
      { label: 'Offset Printing', desc: 'High-volume commercial offset runs.' },
      { label: 'Digital Printing', desc: 'Fast, short-run prints with same-day turnaround.' },
      { label: 'Large Format Printing', desc: 'High-resolution prints for billboards and oversized displays.' },
      { label: 'Flex & Banner Printing', desc: 'Durable flex media for shop fronts and event standees.' },
      { label: 'Vinyl Printing', desc: 'Cut and printed vinyl for glass, walls and vehicle fleets.' },
      { label: 'Marketing Materials', desc: 'Brochures, flyers, leaflets, business cards, letterheads, envelopes.' },
      { label: 'Publications', desc: 'Company profiles, catalogs and booklets.' },
      { label: 'Specialty Printing', desc: 'Wedding & invitation cards, product packaging, stickers & labels.' },
    ],
  },
  {
    id: 'branding',
    index: '02',
    title: 'Branding',
    tagline: 'Signage, campaigns and brand presence',
    description:
      'Indoor and outdoor brand systems built to be seen — from acrylic sign boards and hoardings to vehicle wraps and full advertising campaigns.',
    image:
      'https://images.pexels.com/photos/28028559/pexels-photo-28028559.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Vibrant street view with outdoor billboards',
    items: [
      { label: 'Signage & Outdoor', desc: 'Sign boards (acrylic, ACP, backlit), hoardings, outdoor advertising.' },
      { label: 'Indoor & Events', desc: 'Wall graphics, standees, exhibition stalls, kiosks and backdrops.' },
      { label: 'Vehicle Branding', desc: 'Custom wraps and decals for fleets of any size.' },
      { label: 'Advertising Campaigns', desc: 'Concept-led campaigns across media.' },
      { label: 'Promotional Materials', desc: 'Collateral that carries the brand forward.' },
      { label: 'Corporate Branding', desc: 'End-to-end corporate identity solutions.' },
    ],
  },
  {
    id: 'corporate',
    index: '03',
    title: 'Corporate Offerings',
    tagline: 'Official items, gifts and launch kits',
    description:
      'The detail layer of a brand — seals, awards, gifts and launch kits — produced to a standard that matches the rest of your identity.',
    image:
      'https://images.pexels.com/photos/6345332/pexels-photo-6345332.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Elegant gift boxes on a marble surface',
    items: [
      { label: 'Rubber Stamps', desc: 'Official stamps and company seals.' },
      { label: 'Trophies & Awards', desc: 'Trophies, shields and recognition awards.' },
      { label: 'Corporate Gifts', desc: 'Curated gift items for clients and teams.' },
      { label: 'Customized T-Shirts', desc: 'Branded apparel, printed to order.' },
      { label: 'Product Launch Kits', desc: 'Packaging to press collateral for new launches.' },
    ],
  },
  {
    id: 'office-it',
    index: '04',
    title: 'Office & IT Solutions',
    tagline: 'Stationery and business-grade hardware',
    description:
      'The supply line behind the brand — complete office stationery, bulk supply contracts and business-grade computing equipment with warranty.',
    image:
      'https://images.pexels.com/photos/3944802/pexels-photo-3944802.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Office supplies arranged on a wooden desk',
    items: [
      { label: 'Office Stationery', desc: 'Files, registers and forms — complete range.' },
      { label: 'Office Supplies', desc: 'Bulk supply contracts for organisations.' },
      { label: 'Computer & Laptop Sales', desc: 'Business-grade hardware with warranty.' },
      { label: 'Accessories', desc: 'Peripherals and networking gear.' },
    ],
  },
];

export const ADVANTAGES = [
  {
    n: '01',
    title: 'Premium Quality Printing',
    desc: 'Sharp colours and flawless finishing on every job.',
  },
  {
    n: '02',
    title: 'Modern Printing Technology',
    desc: 'Ready-for-production offset, digital and large-format machinery.',
  },
  {
    n: '03',
    title: 'Affordable & Competitive Prices',
    desc: 'Transparent, volume-scalable pricing.',
  },
  {
    n: '04',
    title: 'Creative Design Team',
    desc: 'In-house designers turning briefs into brand-ready artwork.',
  },
  {
    n: '05',
    title: 'Fast Turnaround Time',
    desc: 'Tight deadlines handled without losing quality.',
  },
  {
    n: '06',
    title: 'Professional Customer Support',
    desc: 'A single point of contact from quote to delivery.',
  },
  {
    n: '07',
    title: 'Customized Solutions',
    desc: 'Tailored sizes, materials and finishes.',
  },
  {
    n: '08',
    title: 'Nationwide Delivery',
    desc: 'Safe, secure and timely delivery anywhere in Pakistan.',
  },
];

export const PILLARS = [
  {
    label: 'Quality',
    desc: 'Premium materials and finishing, inspected before dispatch.',
  },
  {
    label: 'Creative',
    desc: 'Designs that make brands stand apart from the crowd.',
  },
  {
    label: 'Reliable',
    desc: 'On-time delivery, every time — nationwide.',
  },
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Why Us', href: '/why-us' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const CONTACT = {
  phone: '+92 321 5851936',
  phoneHref: 'tel:+923215851936',
  email: 'info@magtraders.com',
  emailHref: 'mailto:info@magtraders.com',
  hours: 'Monday – Sunday, 10:00 AM – 11:00 PM',
  location: 'Pakistan — nationwide delivery',
};

export const STATS = [
  { value: '4', suffix: '', label: 'Dedicated departments' },
  { value: '30', suffix: '+', label: 'Service lines in production' },
  { value: '7', suffix: 'd', label: 'Open weekly, 10am – 11pm' },
  { value: '24', suffix: 'h', label: 'Quote response target' },
];
