export type ServiceItem = { label: string; desc: string };

export type IndividualService = {
  id: string;
  title: string;
  image: string;
  alt: string;
  category: string;
};

export type ServiceCategory = {
  id: string;
  label: string;
  services: IndividualService[];
};

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

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'printing',
    label: 'Printing',
    services: [
      {
        id: 'offset-printing',
        title: 'Offset Printing',
        image: 'https://images.unsplash.com/photo-1693031630369-bd429a57f115?w=600&auto=format&fit=crop&q=60',
        alt: 'Industrial offset printing machine',
        category: 'Printing',
      },
      {
        id: 'digital-printing',
        title: 'Digital Printing',
        image: 'https://images.unsplash.com/photo-1706895040634-62055892cbbb?q=80&w=1170&auto=format&fit=crop',
        alt: 'Digital printing machine producing vibrant prints',
        category: 'Printing',
      },
      {
        id: 'large-format-printing',
        title: 'Large Format Printing',
        image: 'https://images.unsplash.com/photo-1676474506722-4bf98059b74a?w=600&auto=format&fit=crop&q=60',
        alt: 'Large format printing for banners and displays',
        category: 'Printing',
      },
      {
        id: 'flex-printing',
        title: 'Flex Printing',
        image: 'https://images.unsplash.com/photo-1676474508989-40ddb421e426?w=600&auto=format&fit=crop&q=60',
        alt: 'Flex printing for shop fronts and events',
        category: 'Printing',
      },
      {
        id: 'banner-printing',
        title: 'Banner Printing',
        image: 'https://images.unsplash.com/photo-1624951518564-aca827daaee7?q=80&w=1170&auto=format&fit=crop',
        alt: 'Banner printing for events and advertising',
        category: 'Printing',
      },
      {
        id: 'vinyl-printing',
        title: 'Vinyl Printing',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=60',
        alt: 'Vinyl printing for glass, walls and vehicles',
        category: 'Printing',
      },
      {
        id: 'brochures-flyers-leaflets',
        title: 'Brochures, Flyers & Leaflets',
        image: 'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=600&auto=format&fit=crop&q=60',
        alt: 'Brochures, flyers and leaflets printing',
        category: 'Printing',
      },
      {
        id: 'business-cards',
        title: 'Business Cards',
        image: 'https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?w=600&auto=format&fit=crop&q=60',
        alt: 'Premium business cards printing',
        category: 'Printing',
      },
      {
        id: 'letterheads-envelopes',
        title: 'Letterheads & Envelopes',
        image: 'https://plus.unsplash.com/premium_photo-1681487591275-4c38e89b1d5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGV0dGVyaGVhZCUyMGFuZCUyMGVudmVsb3B8ZW58MHx8MHx8fDA%3D',
        alt: 'Letterheads and envelopes printing',
        category: 'Printing',
      },
      {
        id: 'company-profiles',
        title: 'Company Profiles',
        image: 'https://images.unsplash.com/photo-1692255359792-bc8bf9985925?w=600&auto=format&fit=crop&q=60',
        alt: 'Company profile booklets and printing',
        category: 'Printing',
      },
      {
        id: 'catalogs-booklets',
        title: 'Catalogs & Booklets',
        image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
        alt: 'Product catalogs and booklet printing',
        category: 'Printing',
      },
      {
        id: 'wedding-invitation-cards',
        title: 'Wedding & Invitation Cards',
        image: 'https://images.unsplash.com/photo-1710961716412-5e246a002e99?w=600&auto=format&fit=crop&q=60',
        alt: 'Elegant wedding and invitation card printing',
        category: 'Printing',
      },
      {
        id: 'product-packaging',
        title: 'Product Packaging',
        image: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135?w=600&auto=format&fit=crop&q=60',
        alt: 'Custom product packaging and boxes',
        category: 'Printing',
      },
      {
        id: 'stickers-labels',
        title: 'Stickers & Labels',
        image: 'https://images.unsplash.com/photo-1750224981218-9c4176ccf172?q=80&w=1170&auto=format&fit=crop',
        alt: 'Custom stickers and label printing',
        category: 'Printing',
      },
    ],
  },
  {
    id: 'branding',
    label: 'Branding',
    services: [
      {
        id: 'sign-boards',
        title: 'Sign Boards',
        image: 'https://images.unsplash.com/photo-1593505681742-8cbb6f44de25?w=600&auto=format&fit=crop&q=60',
        alt: 'Custom sign boards for businesses',
        category: 'Branding',
      },
      {
        id: 'hoardings',
        title: 'Hoardings',
        image: 'https://images.unsplash.com/photo-1739115517835-4b07f4d7d959?w=600&auto=format&fit=crop&q=60',
        alt: 'Large outdoor hoardings and billboards',
        category: 'Branding',
      },
      {
        id: 'outdoor-advertising',
        title: 'Outdoor Advertising',
        image: 'https://images.unsplash.com/photo-1557858310-9052820906f7?w=600&auto=format&fit=crop&q=60',
        alt: 'Outdoor advertising campaigns',
        category: 'Branding',
      },
      {
        id: 'indoor-branding',
        title: 'Indoor Branding',
        image: 'https://images.unsplash.com/photo-1696098917564-6967d4a69ea1?w=600&auto=format&fit=crop&q=60',
        alt: 'Indoor branding solutions and wall graphics',
        category: 'Branding',
      },
      {
        id: 'vehicle-branding',
        title: 'Vehicle Branding',
        image: 'https://images.unsplash.com/photo-1778498978944-010ca953e72d?w=600&auto=format&fit=crop&q=60',
        alt: 'Vehicle wraps and fleet branding',
        category: 'Branding',
      },
      {
        id: 'exhibition-event-branding',
        title: 'Exhibition & Event Branding',
        image: 'https://images.unsplash.com/photo-1711390811937-1b061eaf28ea?w=600&auto=format&fit=crop&q=60',
        alt: 'Exhibition stalls and event branding',
        category: 'Branding',
      },
      {
        id: 'advertising-campaigns',
        title: 'Advertising Campaigns',
        image: 'https://images.unsplash.com/photo-1587161584760-f51779fb276a?w=600&auto=format&fit=crop&q=60',
        alt: 'Creative advertising campaign design',
        category: 'Branding',
      },
      {
        id: 'promotional-materials',
        title: 'Promotional Materials',
        image: 'https://images.unsplash.com/photo-1712903277236-67ff1a9cbbcd?w=600&auto=format&fit=crop&q=60',
        alt: 'Branded promotional materials and collateral',
        category: 'Branding',
      },
      {
        id: 'corporate-branding-solutions',
        title: 'Corporate Branding Solutions',
        image: 'https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?w=600&auto=format&fit=crop&q=60',
        alt: 'End-to-end corporate branding solutions',
        category: 'Branding',
      },
    ],
  },
  {
    id: 'corporate',
    label: 'Corporate',
    services: [
      {
        id: 'rubber-stamps',
        title: 'Rubber Stamps',
        image: 'https://images.unsplash.com/photo-1611075551111-dfda5f9c6f02?w=600&auto=format&fit=crop&q=60',
        alt: 'Official rubber stamps for businesses',
        category: 'Corporate',
      },
      {
        id: 'company-seals',
        title: 'Company Seals',
        image: 'https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?w=600&auto=format&fit=crop&q=60',
        alt: 'Official company seals and embossing stamps',
        category: 'Corporate',
      },
      {
        id: 'trophies-shields-awards',
        title: 'Trophies, Shields & Awards',
        image: 'https://images.unsplash.com/photo-1665680674724-3a3b3368e036?w=600&auto=format&fit=crop&q=60',
        alt: 'Custom trophies, shields and recognition awards',
        category: 'Corporate',
      },
      {
        id: 'customized-tshirts',
        title: 'Customized T-Shirts',
        image: 'https://images.unsplash.com/photo-1696086152586-09a0855dbc9c?w=600&auto=format&fit=crop&q=60',
        alt: 'Custom branded t-shirts for corporate teams',
        category: 'Corporate',
      },
      {
        id: 'corporate-gift-items',
        title: 'Corporate Gift Items',
        image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&auto=format&fit=crop&q=60',
        alt: 'Curated corporate gift items and sets',
        category: 'Corporate',
      },
      {
        id: 'new-product-launch-kits',
        title: 'New Product Launch Kits',
        image: 'https://images.unsplash.com/photo-1610187224288-3edae8c38ae8?w=600&auto=format&fit=crop&q=60',
        alt: 'Product launch kits and packaging',
        category: 'Corporate',
      },
    ],
  },
  {
    id: 'office-it',
    label: 'Office & IT',
    services: [
      {
        id: 'complete-office-stationery',
        title: 'Complete Office Stationery',
        image: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3',
        alt: 'Complete office stationery supplies',
        category: 'Office & IT',
      },
      {
        id: 'computer-laptop-sales',
        title: 'Computer & Laptop Sales',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=60',
        alt: 'Business-grade computers and laptops',
        category: 'Office & IT',
      },
      {
        id: 'laptop-computer-accessories',
        title: 'Laptop & Computer Accessories',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=60',
        alt: 'Laptop and computer peripherals and accessories',
        category: 'Office & IT',
      },
      {
        id: 'office-supplies',
        title: 'Office Supplies',
        image: 'https://images.unsplash.com/photo-1654931800100-2ecf6eee7c64?w=600&auto=format&fit=crop&q=60',
        alt: 'Bulk office supplies for organizations',
        category: 'Office & IT',
      },
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
