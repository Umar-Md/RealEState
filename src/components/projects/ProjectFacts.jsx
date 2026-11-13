

export default function ProjectFacts({ facts }) {
  if (!facts?.length) return null;

  return (
    <section className="relative z-10 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <dl className="-mt-10 grid grid-cols-2 overflow-hidden rounded-sm border border-ssp-green/10 bg-white shadow-[0_25px_80px_-30px_rgba(16,37,31,0.25)] md:grid-cols-4">
          {facts.map(([value, label], index) => (
            <div
              key={label}
              className={`group relative px-5 py-7 sm:px-8 sm:py-10 ${
                index !== facts.length - 1 ? 'border-r border-ssp-green/10' : ''
              } ${index >= 2 ? 'border-t border-ssp-green/10 md:border-t-0' : ''}`}
            >
              <span className="absolute left-0 top-0 h-[2px] w-0 bg-ssp-gold transition-all duration-500 group-hover:w-full" />
              <dt className="text-[10px] font-bold uppercase tracking-[0.17em] text-gray-400">
                {label}
              </dt>
              <dd className="mt-3 font-display text-3xl tracking-tight text-ssp-green sm:text-4xl lg:text-5xl">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
