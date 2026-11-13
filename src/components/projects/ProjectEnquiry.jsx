import Link from 'next/link';
import { Phone, MessageCircle, CalendarDays } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function ProjectEnquiry({ project }) {
  const contact = project.contact || {};

  if (!project.showEnquiry && !contact.phone && !contact.whatsapp) {
    return null;
  }

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[#10251F] py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[340px] w-[340px] rounded-full border border-ssp-gold/15" />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-16">
        <div>
          <SectionEyebrow light>Let's take the next step</SectionEyebrow>
          <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your next opportunity
            <span className="block text-ssp-gold">starts with a conversation.</span>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-white/60">
            Connect with our team to learn more about {project.title}.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:min-w-[260px]">
          {contact.whatsapp && (
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-14 items-center justify-center gap-3 bg-ssp-gold px-6 text-xs font-bold uppercase tracking-wider text-ssp-dark transition-colors hover:bg-white"
            >
              <MessageCircle size={17} /> WhatsApp Us
            </a>
          )}

          {contact.phone && (
            <a
              href={`tel:${contact.phone}`}
              className="flex min-h-14 items-center justify-center gap-3 border border-white/30 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-ssp-gold hover:text-ssp-gold"
            >
              <Phone size={17} /> Call Our Team
            </a>
          )}

          {project.cta?.href && (
            <Link
              href={project.cta.href}
              className="flex min-h-14 items-center justify-center gap-3 border border-white/30 px-6 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:border-ssp-gold hover:text-ssp-gold"
            >
              <CalendarDays size={17} /> {project.cta.label || 'Enquire Now'}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
