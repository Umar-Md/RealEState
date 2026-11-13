import { ShieldCheck } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';
import SectionShell from './SectionShell';

export default function VerificationSection() {
  const section = {
  "id": "promoter",
  "title": "Promoter details",
  "type": "verification-note",
  "paragraphs": [
    "Promoter identity is pending verification. The supplied materials name different entities, so no promoter name is displayed until the correct details are confirmed."
  ]
};
  return (
    <SectionShell id={section.id} cream>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="max-w-4xl border-l-2 border-ssp-gold bg-white p-7 shadow-sm sm:p-10">
          <div className="flex items-start gap-5">
            <ShieldCheck size={27} className="mt-1 shrink-0 text-ssp-green" />
            <div>
              <SectionEyebrow>Information and verification</SectionEyebrow>
              <h2 className="font-display text-3xl text-ssp-dark">
                {section.title}
              </h2>
              <div className="mt-6 space-y-4">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-8 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
