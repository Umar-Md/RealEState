import Image from 'next/image';
import { getProjectImageSrc } from '@/lib/project-image';
import SectionTitle from './SectionTitle';
import SectionShell from './SectionShell';

export default function TextSection({ section, index, children }) {
  const cream = index % 2 === 1;
  const hasImage = Boolean(section.image?.src);

  return (
    <SectionShell id={section.id} cream={cream}>
      <div className={`mx-auto grid max-w-[1440px] items-start gap-12 px-5 sm:px-10 lg:px-16 ${
        hasImage ? 'lg:grid-cols-[0.9fr_1.1fr]' : 'lg:grid-cols-[0.8fr_1.2fr]'
      } lg:gap-24`}>
        <div className="lg:sticky lg:top-36">
          <SectionTitle
            label={section.id.replaceAll('-', ' ')}
            title={section.title}
            description={section.intro}
          />
        </div>

        <div>
          {hasImage && (
            <div className="group relative mb-10 aspect-[16/10] overflow-hidden rounded-sm">
              <Image
                src={getProjectImageSrc(section.image.src)}
                alt={section.image.alt || section.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10251F]/30 to-transparent" />
            </div>
          )}

          <div className="space-y-6">
            {children}
          </div>

          {section.bullets?.length > 0 && (
            <div className="mt-10 grid gap-px overflow-hidden border border-ssp-green/10 bg-ssp-green/10 sm:grid-cols-2">
              {section.bullets.map((item, index) => (
                <div
                  key={item}
                  className="flex items-start gap-4 bg-white p-5 transition-colors hover:bg-ssp-cream"
                >
                  <span className="font-display text-lg text-ssp-gold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-medium leading-6 text-ssp-dark">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SectionShell>
  );
}
