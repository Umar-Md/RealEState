export default function ProjectDisclaimer({ disclaimer }) {
  if (!disclaimer) return null;

  return (
    <div className="border-t border-ssp-green/10 bg-[#F5F6EF] px-5 py-8 sm:px-10 lg:px-16">
      <p className="mx-auto max-w-[1280px] text-xs leading-7 text-gray-500">
        {disclaimer}
      </p>
    </div>
  );
}
