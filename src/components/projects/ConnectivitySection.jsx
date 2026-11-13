import Image from 'next/image';
import { getProjectImageSrc } from '@/lib/project-image';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';
import SectionTitle from './SectionTitle';
import SectionShell from './SectionShell';

export default function ConnectivitySection({ project }) {
  const section = {
  "id": "connectivity",
  "title": "Location and connectivity",
  "type": "connectivity",
  "image": {
    "src": "/images/cp.png",
    "alt": "Central Park location map showing Kohir X Roads, NH-65 and surrounding destinations."
  },
  "paragraphs": [
    "Find Central Park at Kohir X Roads on NH-65, along the Hyderabad–Zaheerabad corridor. Explore the location map to get a closer look at the surrounding area."
  ]
};
  const location = section.locationLabel || project.location;
  const corridor = section.corridorLabel || project.corridorLabel;

  return (
    <SectionShell id={section.id} cream>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <SectionTitle
          label="LOCATION ADVANTAGE"
          title={section.title}
          description={section.paragraphs?.[0]}
        />

        <div className="mt-14 grid overflow-hidden rounded-sm bg-[#10251F] shadow-[0_30px_80px_-35px_rgba(16,37,31,0.5)] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative overflow-hidden p-8 text-white sm:p-12 lg:p-14">
            <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-white/10" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-ssp-gold/20" />

            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ssp-gold/30 bg-ssp-gold/10 text-ssp-gold">
                <MapPin size={22} />
              </span>

              <p className="mt-9 text-[10px] font-bold uppercase tracking-[0.24em] text-ssp-gold">
                {project.title}
              </p>

              <h3 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
                Connected to what matters.
              </h3>

              {section.paragraphs?.slice(1).map((paragraph) => (
                <p key={paragraph} className="mt-5 text-sm leading-8 text-white/60">
                  {paragraph}
                </p>
              ))}

              <div className="mt-10 border-y border-white/15 py-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Project location
                </p>
                <p className="mt-2 text-lg font-medium">{location}</p>

                {corridor && (
                  <>
                    <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                      Connectivity corridor
                    </p>
                    <p className="mt-2 text-sm text-ssp-gold">{corridor}</p>
                  </>
                )}
              </div>

              {section.mapUrl && (
                <a
                  href={section.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.15em] text-ssp-gold transition-colors hover:text-white"
                >
                  Open Google Maps <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          <div className="min-w-0 bg-white p-4 sm:p-7">
            {section.image?.src ? (
              <a
                href={getProjectImageSrc(section.image.src)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[5/4] overflow-hidden bg-ssp-cream"
              >
                <Image
                  src={getProjectImageSrc(section.image.src)}
                  alt={section.image.alt || 'Project location map'}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#10251F] px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-white">
                  View full map <Maximize2 size={13} />
                </span>
              </a>
            ) : (
              <div className="flex aspect-[5/4] items-center justify-center bg-ssp-cream text-center text-sm text-gray-500">
                Verified location map to be added.
              </div>
            )}

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-ssp-green/10 pt-5 text-xs text-gray-500">
              <span>{location}</span>
              <MapPin size={17} className="text-ssp-green" />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
