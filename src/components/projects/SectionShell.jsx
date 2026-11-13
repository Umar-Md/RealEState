

export default function SectionShell({ children, id, dark = false, cream = false, className = '' }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-28 overflow-hidden py-20 sm:py-24 lg:py-32 ${
        dark ? 'bg-[#10251F] text-white' :
        cream ? 'bg-[#F5F6EF]' : 'bg-white'
      } ${className}`}
    >
      {children}
    </section>
  );
}
