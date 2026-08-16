'use client';

import Image from 'next/image';

const SERVICES = [
{
    label: 'Offset Printing',
    image: 'https://images.unsplash.com/photo-1715154470884-1c2be0b0129f?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Digital Printing',
    image: 'https://images.unsplash.com/photo-1741447096161-a6b4e3398d0e?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Large Format Printing',
    image: 'https://images.unsplash.com/photo-1736386348749-54b655726a0c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Flex Printing',
    image: 'https://sc01.alicdn.com/kf/Ha7beb7c4bbcb49a791b900a5adfaa8cea.jpg',
  },
  {
    label: 'Banner Printing',
    image: 'https://images.unsplash.com/photo-1624951518564-aca827daaee7?q=80&w=1170&auto=format&fit=crop',
  },
  {
    label: 'Vinyl Printing',
    image: 'https://www.thevehiclewrappingcentre.com/wp-content/uploads/Print-1-1024x796.jpg',
  },
  {
    label: 'Brochures, Flyers & Leaflets',
    image: 'https://images.unsplash.com/photo-1695634621375-0b66a9d5d1bc?w=600&auto=format&fit=crop&q=60',
  },
  {
    label: 'Business Cards',
    image: 'https://images.unsplash.com/photo-1599590984817-0c15f31b1fa5?w=600&auto=format&fit=crop&q=60',
  },
  {
    label: 'Letterheads & Envelopes',
    image: 'https://plus.unsplash.com/premium_photo-1681487591275-4c38e89b1d5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGV0dGVyaGVhZCUyMGFuZCUyMGVudmVsb3B8ZW58MHx8MHx8fDA%3D',
  },
  {
    label: 'Company Profiles',
    image: 'https://images.unsplash.com/photo-1692255359792-bc8bf9985925?w=600&auto=format&fit=crop&q=60',
  },
  {
    label: 'Catalogs & Booklets',
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
  },
  {
    label: 'Wedding & Invitation Cards',
    image: 'https://images.unsplash.com/photo-1710961716412-5e246a002e99?w=600&auto=format&fit=crop&q=60',
  },
  {
    label: 'Product Packaging',
    image: 'https://images.unsplash.com/photo-1617825295690-28ae56c56135?w=600&auto=format&fit=crop&q=60',
  },
  {
    label: 'Stickers & Labels',
    image: 'https://images.unsplash.com/photo-1750224981218-9c4176ccf172?q=80&w=1170&auto=format&fit=crop',
  },
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden py-5">
      <div className="mask-fade-edges flex">
        <div className="flex shrink-0 animate-marquee items-center gap-4">
          {[...SERVICES, ...SERVICES].map((service, i) => (
            <div
              key={`${service.label}-${i}`}
              className="group relative h-32 w-44 overflow-hidden rounded-sm bg-transparent"
            >
              <Image
                src={service.image}
                alt={service.label}
                fill
                sizes="176px"
                className="object-cover opacity-80 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
