'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { getProjectImageSrc } from '@/lib/project-image';

function MissingPlan({ assetPath }) {
  return (
    <div className="flex min-h-64 flex-col items-center justify-center bg-[#F3F4EF] px-6 py-12 text-center sm:min-h-80">
      <p className="font-display text-xl text-ssp-dark">Master plan image slot</p>
      <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600">
        Add the original, unmodified blueprint at this path to display and zoom the layout:
      </p>
      <code className="mt-3 break-all rounded bg-white px-3 py-2 text-xs text-ssp-green">
        {assetPath}
      </code>
    </div>
  );
}

export default function MasterPlanViewer({ plan }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isOpen]);

  if (imageFailed) {
    return <MissingPlan assetPath={plan.assetPath} />;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full overflow-hidden rounded-xl border border-ssp-green/15 bg-white p-3 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ssp-gold sm:p-5"
        aria-label="Open the Central Park master plan for a closer look"
      >
        <span className="relative block aspect-square w-full bg-[#F3F4EF]">
          <Image
            src={getProjectImageSrc(plan.src)}
            alt={plan.alt}
            fill
            sizes="(max-width: 639px) calc(100vw - 88px), 490px"
            className="object-contain"
            onError={() => setImageFailed(true)}
          />
        </span>
        <span className="absolute bottom-6 right-6 inline-flex items-center gap-2 bg-ssp-green px-4 py-2.5 text-xs font-semibold text-white transition-colors group-hover:bg-ssp-dark">
          <Maximize2 size={15} aria-hidden="true" />
          Zoom layout
        </span>
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-ssp-dark/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Central Park master plan"
        >
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            onClick={() => setIsOpen(false)}
            aria-label="Close master plan"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center bg-white text-ssp-dark transition-colors hover:bg-ssp-gold"
            aria-label="Close master plan"
          >
            <X size={21} aria-hidden="true" />
          </button>
          <div className="relative z-[1] h-[82vh] w-full max-w-[1500px]">
            <Image
              src={getProjectImageSrc(plan.src)}
              alt={plan.alt}
              fill
              sizes="100vw"
              className="object-contain"
              onError={() => setImageFailed(true)}
            />
          </div>
        </div>
      )}
    </>
  );
}
