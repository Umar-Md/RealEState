import { companyContact } from '../../data/contactData';
import Image from 'next/image';
import CalBooking from '../../components/booking/CalBooking';
import { CAL_IS_CONFIGURED } from '../../lib/cal-embed';

export const metadata = {
  title: 'Book a Meeting with Swayam Sampada',
  description: 'Discuss your property requirements with Satish Reddy at Swayam Sampada.',
  alternates: { canonical: '/booking' },
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo.png` },
};

export default function BookingPage() {
  return (
    <section className="min-w-0 bg-ssp-cream px-3 pb-16 pt-28 sm:px-6 sm:pb-24 xl:pt-36">
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto mb-10 max-w-2xl px-3 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ssp-green">SWAYAM SAMPADA</p>
          <h1 className="mt-4 font-display text-4xl leading-tight tracking-tight text-ssp-dark sm:text-5xl">Let’s talk about your next step.</h1>
          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">{CAL_IS_CONFIGURED ? 'Choose an available date and time to discuss your property requirements.' : 'Connect with our team for guidance on your property requirements.'}</p>
        </header>
        <div className="grid min-w-0 gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="self-start rounded-3xl bg-ssp-green p-7 text-white sm:p-8" aria-label="Swayam Sampada meeting details">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo-transparent.png`} alt="Swayam Sampada logo" width={160} height={84} className="h-auto w-36 object-contain" priority />
            <h2 className="mt-5 font-display text-3xl">Swayam Sampada</h2>
            <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-white/65">Properties Private Limited</p>
            <div className="mt-7 border-t border-white/15 pt-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ssp-gold">Your contact</p>
              <h3 className="mt-2 text-xl font-semibold">Satish Reddy</h3>
              <a href={`tel:${companyContact.telephone}`} className="mt-3 inline-flex min-h-11 items-center text-base text-white underline decoration-ssp-gold underline-offset-4 hover:text-ssp-gold">{companyContact.phone}</a>
              <a href={companyContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-2 flex min-h-11 items-center justify-center rounded-full border border-ssp-gold/50 px-4 py-2 text-sm font-semibold text-ssp-gold transition-colors hover:bg-ssp-gold hover:text-ssp-green">Chat on WhatsApp</a>
              <p className="mt-5 text-sm leading-7 text-white/75">Discuss residential and commercial properties, open plots, and your real estate requirements with our team.</p>
            </div>
            <p className="mt-7 text-xs leading-6 text-ssp-gold">Connecting Properties. Creating Assets. Building Wealth.</p>
          </aside>
          <CalBooking />
        </div>
      </div>
    </section>
  );
}
