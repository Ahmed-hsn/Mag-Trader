'use client';

import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, ArrowUpRight, Check } from 'lucide-react';
import { CONTACT } from '@/lib/content';
import { SectionHeading } from '@/components/section-heading';

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative bg-ink py-24 text-paper sm:py-32 lg:py-40">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-5">
            <SectionHeading
              index="§"
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s build your{' '}
                  <span className="italic text-brand-light">brand.</span>
                </>
              }
              description="Get in touch for inquiries, quotes or project discussions. A single point of contact from quote to delivery."
              className="text-paper [&_h2]:text-paper [&_p]:text-paper/70 [&_span.eyebrow]:text-paper/70"
            />

            <div className="reveal mt-12 space-y-px">
              <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value={CONTACT.location} />
              <ContactRow
                icon={<Phone className="h-4 w-4" />}
                label="Phone"
                value={CONTACT.phone}
                href={CONTACT.phoneHref}
              />
              <ContactRow
                icon={<Mail className="h-4 w-4" />}
                label="Email"
                value={CONTACT.email}
                href={CONTACT.emailHref}
              />
              <ContactRow icon={<Clock className="h-4 w-4" />} label="Hours" value={CONTACT.hours} />
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 lg:pl-8">
            <form
              onSubmit={onSubmit}
              className="reveal grid gap-px bg-paper/10"
            >
              <Field label="Full name" name="name" placeholder="Your name" />
              <div className="grid sm:grid-cols-2 gap-px sm:gap-0">
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Phone" name="phone" placeholder="+92 ..." />
              </div>
              <div className="bg-ink-soft p-5">
                <label className="eyebrow text-paper/60">Service</label>
                <select
                  name="service"
                  className="mt-3 w-full bg-transparent border-b border-paper/20 py-2 text-paper outline-none focus:border-brand-light transition-colors"
                >
                  <option className="bg-ink">Printing</option>
                  <option className="bg-ink">Branding</option>
                  <option className="bg-ink">Corporate Offerings</option>
                  <option className="bg-ink">Office & IT Solutions</option>
                  <option className="bg-ink">Other</option>
                </select>
              </div>
              <div className="bg-ink-soft p-5">
                <label className="eyebrow text-paper/60">Project details</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your project, quantities, timeline…"
                  className="mt-3 w-full resize-none bg-transparent border-b border-paper/20 py-2 text-paper placeholder:text-paper/30 outline-none focus:border-brand-light transition-colors"
                />
              </div>
              <div className="bg-ink-soft p-5">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 bg-paper px-6 py-4 text-[12px] uppercase tracking-[0.2em] text-ink btn-sheen transition-colors duration-300 hover:bg-brand hover:text-paper sm:w-auto"
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Request Sent
                    </>
                  ) : (
                    <>
                      Request a Quote
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
                <p className="mt-4 text-[11px] text-paper/40">
                  We typically respond within 24 hours. This demo form does not store data.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center gap-5 border-t border-paper/10 py-5 transition-colors duration-300 hover:bg-paper/5">
      <span className="flex h-10 w-10 items-center justify-center border border-paper/15 text-brand-light">
        {icon}
      </span>
      <div>
        <p className="eyebrow text-paper/50">{label}</p>
        <p className="mt-1 text-lg text-paper">{value}</p>
      </div>
    </div>
  );
  if (href) return <a href={href}>{content}</a>;
  return content;
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="bg-ink-soft p-5">
      <label className="eyebrow text-paper/60">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-3 w-full bg-transparent border-b border-paper/20 py-2 text-paper placeholder:text-paper/30 outline-none focus:border-brand-light transition-colors"
      />
    </div>
  );
}
