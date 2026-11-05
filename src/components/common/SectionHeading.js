export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}>
      {eyebrow && (
        <p className={`text-[11px] font-semibold uppercase tracking-[0.22em] mb-4 ${light ? "text-ssp-gold" : "text-ssp-green"}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display tracking-[-0.035em] leading-[1.08] text-3xl md:text-5xl ${light ? "text-white" : "text-ssp-dark"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 leading-7 text-sm md:text-base ${light ? "text-white/65" : "text-gray-600"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
