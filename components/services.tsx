import { ServiceCards } from '@/components/service-cards';
import { SectionHeading } from '@/components/section-heading';

export function Services({ compact = false }: { compact?: boolean }) {
  return (
    <section className="relative bg-ink py-24 sm:py-32 lg:py-40">
      <div className="container-edge">
        <SectionHeading
          index="01"
          eyebrow="What We Do"
          title={
            <>
              Four departments, <span className="italic text-accent">one standard.</span>
            </>
          }
          description="From concept to completion, every service is delivered with dedicated expertise, reliable production and a premium finish."
          className="[&_h2]:text-paper [&_p]:text-paper/65 [&_span.eyebrow]:text-paper/60"
        />
        <div className="mt-12 lg:mt-16">
          <ServiceCards compact={compact} />
        </div>
      </div>
    </section>
  );
}
