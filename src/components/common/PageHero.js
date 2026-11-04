import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function PageHero({
  eyebrow = "SWAYAM SAMPADA PROPERTIES",
  title,
  description,
  image = "photo-1600607687939-ce8a6c25118c",
  cta = "Book a Free Consultation",
}) {
  return (
    <section className="relative min-h-[390px] md:min-h-[470px] flex items-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/${image}?auto=format&fit=crop&w=2000&q=85)`,
        }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container-wide relative py-20">
        <p className="text-ssp-gold text-[11px] tracking-[.25em] font-bold mb-5">
          {eyebrow}
        </p>
        <h1 className="display-title text-4xl md:text-6xl max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-white/80 max-w-2xl leading-7 text-sm md:text-base">
            {description}
          </p>
        )}
        <Link href="/contact" className="btn-primary mt-8">
          {cta}
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
