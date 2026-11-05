import Link from "next/link";
import ArchitecturalImage from "./ArchitecturalImage";
import { ArrowUpRight } from "lucide-react";

export default function PageHero({
  eyebrow = "SWAYAM SAMPADA PROPERTIES",
  title,
  description,
  image = "photo-1600607687939-ce8a6c25118c",
  ctaHref = "/contact",
  cta = "Book a Free Consultation",
}) {
  return (
    <section className="relative isolate min-h-[540px] md:min-h-[620px] lg:min-h-[660px] pt-20 lg:pt-[120px] flex items-center overflow-hidden bg-[#163D32] text-white">
      {/* Background Image */}
      <ArchitecturalImage image={image} priority className="-z-20" />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10251F]/95 via-[#10251F]/75 to-[#10251F]/20" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#10251F]/50 via-transparent to-[#10251F]/20" />

      {/* Hero Content */}
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 py-20 md:py-24">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-7">
            <span className="w-10 h-[2px] bg-[#C6A15B]" />

            <p className="text-[#E3C58A] text-[10px] md:text-xs tracking-[0.28em] font-semibold uppercase">
              {eyebrow}
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight max-w-4xl">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="mt-7 text-white/80 max-w-2xl text-sm md:text-base leading-7 md:leading-8">
              {description}
            </p>
          )}

          {/* CTA */}
          {cta && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-4 mt-9 px-7 py-4 bg-[#C6A15B] text-[#163D32] text-xs font-bold tracking-wide transition-all duration-300 hover:bg-white motion-safe:hover:-translate-y-1 group"
            >
              {cta}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1"
              />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C6A15B] via-[#C6A15B]/40 to-transparent" />
    </section>
  );
}
