import Image from 'next/image';
import Link from 'next/link';
import { getProjectImageSrc } from '@/lib/project-image';

export default function NimzLocationMap() {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#163D32]/15 bg-white">
      <div className="bg-[#163D32] px-5 py-5 text-white sm:px-7">
        <p className="text-xs uppercase tracking-[0.18em] text-[#E5C98F]">NIMZ main layout & Central Park</p>
        <h3 className="mt-2 font-display text-2xl">An industrial region. Your residential address.</h3>
      </div>
      <div className="relative">
        <Image src={getProjectImageSrc('/images/nimz-main-layout.png')} alt="NIMZ main layout from the supplied investment guide, with Chilkepalli at the lower right" width={909} height={964} sizes="(min-width: 1024px) 60vw, 100vw" className="h-auto w-full" />
        <svg viewBox="0 0 909 964" className="pointer-events-none absolute inset-0 h-full w-full" role="img" aria-label="Dotted illustrative connections from NIMZ to Jarasagham Mandal and to Chilkepalli, where Central Park is located">
          <path d="M 640 475 C 770 550 730 690 866 820" fill="none" stroke="#10251F" strokeWidth="10" />
          <path d="M 640 475 C 770 550 730 690 866 820" fill="none" stroke="#FFE2A2" strokeWidth="5" strokeDasharray="2 13" strokeLinecap="round" />
          <path d="M 640 475 C 690 440 735 445 790 475" fill="none" stroke="#10251F" strokeWidth="10" />
          <path d="M 640 475 C 690 440 735 445 790 475" fill="none" stroke="#FFE2A2" strokeWidth="5" strokeDasharray="2 13" strokeLinecap="round" />
          <circle cx="790" cy="475" r="10" fill="#FFE2A2" stroke="#163D32" strokeWidth="4" />
          <rect x="680" y="544" width="210" height="40" rx="8" fill="#163D32" stroke="#E5C98F" strokeWidth="2" />
          <text x="785" y="570" textAnchor="middle" fill="#FFE2A2" fontSize="19" fontWeight="600">Jarasagham Mandal</text>
          <circle cx="640" cy="475" r="10" fill="#FFE2A2" stroke="#163D32" strokeWidth="4" />
          <circle cx="866" cy="820" r="12" fill="#FFE2A2" stroke="#163D32" strokeWidth="4" />
          <rect x="448" y="740" width="390" height="94" rx="10" fill="#163D32" stroke="#E5C98F" strokeWidth="2" />
          <text x="466" y="769" fill="white" fontSize="24" fontWeight="700">CENTRAL PARK</text>
          <text x="466" y="794" fill="#FFE2A2" fontSize="19">Site location: Chilkepalli</text>
          <text x="466" y="819" fill="#FFE2A2" fontSize="19">Kohir X Roads</text>
          <rect x="435" y="225" width="330" height="50" rx="8" fill="#163D32" />
          <text x="453" y="258" fill="white" fontSize="25" fontWeight="700">NIMZ MAIN LAYOUT</text>
        </svg>
      </div>
      <figcaption className="space-y-4 p-5 text-sm leading-7 text-[#46534C] sm:p-7">
        <p>Central Park's site location is Chilkepalli, in the Kohir X Roads area. Explore its location alongside the NIMZ manufacturing region and NH-65 connectivity.</p>
        <p className="text-xs leading-6 text-gray-500">Base map: supplied NIMZ investment guide, page 12. Central Park location: supplied SSP project locator. Dotted lines show approximate location relationships to Jarasagham Mandal and the Chilkepalli site, not surveyed boundaries, roads or measured distances. The existing blue house icon belongs to the source map and does not mark Central Park.</p>
        <div className="flex flex-wrap gap-5 font-semibold text-[#163D32]"><Link href="/projects/central-park">Explore Central Park →</Link><Link href="/booking">Plan a site visit →</Link><a href={getProjectImageSrc('/images/nimz-main-layout.png')} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">View original map</a></div>
      </figcaption>
    </figure>
  );
}
