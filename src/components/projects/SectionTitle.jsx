import SectionEyebrow from './SectionEyebrow';

export default function SectionTitle({ label, title, description, light = false }) {
  return (
    <div className="max-w-3xl">
      {label && <SectionEyebrow light={light}>{label}</SectionEyebrow>}
      <h2 className={`font-display text-3xl leading-[1.12] tracking-[-0.045em] sm:text-4xl lg:text-[3.4rem] ${
        light ? 'text-white' : 'text-ssp-dark'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-2xl text-sm leading-8 sm:text-base ${
          light ? 'text-white/65' : 'text-gray-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
