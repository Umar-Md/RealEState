import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, MessageCircle, FileCheck2 } from "lucide-react";
import { companyContact } from "@/data/contactData";

const companyLinks = [
  ["About Us", "/about"],
  ["Vision & Mission", "/about/vision-mission"],
  ["Strategic Approach", "/about/strategic-approach"],
  ["Our Story & Journey", "/about/story-journey"],
  ["Leadership & Management", "/about/leadership-management"],
  ["What We Do", "/solutions"],
  ["Careers", "/careers"],
  ["Insights", "/insights"],
];
const groups = [
  ["Solutions", [
    ["SSP Realty", "/solutions/realty"],
    ["SSP Properties", "/solutions/properties"],
    ["SSP Wealth", "/solutions/wealth"],
    ["SSP Infrastructure", "/solutions/infrastructure"],
  ]],
  ["Explore", [
    ["Central Park", "/projects/central-park"],
    ["Video Insights", "/insights#video-insights"],
    ["FAQs", "/faqs"],
    ["Contact Us", "/contact"],
  ]],
];
const linkStyle = "inline-flex min-h-11 items-center py-2 text-sm leading-6 text-white/85 transition-colors hover:text-[#E5C78E] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C78E]";

export default function SiteFooter() {
  return (
    <footer className="border-t-2 border-ssp-gold bg-[#0C241D] text-white">
      <div className="mx-auto max-w-[1280px] px-5 pb-10 pt-14 sm:px-8 lg:px-12 lg:pt-16">
        <div className="grid grid-cols-12 gap-x-8 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <Link href="/" aria-label="Swayam Sampada Properties home" className="inline-flex items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C78E]">
              <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-transparent.png`} alt="" width={128} height={136} unoptimized className="h-24 w-24 object-contain" />
              <span className="text-sm font-semibold leading-relaxed tracking-[0.12em]">SWAYAM SAMPADA<span className="mt-1 block text-xs tracking-[0.1em] text-[#E5C78E]">PROPERTIES PVT. LTD.</span></span>
            </Link>
            <p className="mt-6 max-w-sm font-display text-2xl leading-snug sm:text-3xl">Connecting Properties.<br />Creating Assets.<br />Building Wealth.</p>
            <p className="mt-4 text-sm leading-6 text-white/80">Your Real Estate Growth Partner.</p>
            <Link href="/contact" className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#E5C78E] px-6 py-3 text-sm font-bold text-[#0C241D] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C78E]">Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>

          <nav aria-label="Footer company" className="col-span-12 sm:col-span-6 lg:col-span-4 lg:pt-5">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#E5C78E]">Company</h2>
            <div className="grid grid-cols-2 gap-x-6">
              {[companyLinks.slice(0, 4), companyLinks.slice(4)].map((links, index) => <ul key={index} className="space-y-1">{links.map(([label, href]) => <li key={href}><Link href={href} className={linkStyle}>{label}</Link></li>)}</ul>)}
            </div>
          </nav>
          {groups.map(([title, links]) => <nav key={title} aria-label={`Footer ${title.toLowerCase()}`} className="col-span-6 sm:col-span-3 lg:col-span-2 lg:pt-5">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[#E5C78E]">{title}</h2>
            <ul className="space-y-1">{links.map(([label, href]) => <li key={href}><Link href={href} className={linkStyle}>{label}</Link></li>)}</ul>
          </nav>)}
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <a href={`tel:${companyContact.telephone}`} className="group flex min-h-12 items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C78E]">
            <Phone size={21} className="shrink-0 text-[#E5C78E]" aria-hidden="true" />
            <span><span className="block text-xs font-semibold uppercase tracking-widest text-[#E5C78E]">Talk to our team</span><span className="mt-1 block text-base group-hover:underline">{companyContact.phone}</span></span>
          </a>
          <a href={companyContact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="group flex min-h-12 items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C78E]">
            <MessageCircle size={23} className="shrink-0 text-[#E5C78E]" aria-hidden="true" />
            <span><span className="block text-xs font-semibold uppercase tracking-widest text-[#E5C78E]">Stay connected</span><span className="mt-1 inline-flex items-center gap-2 text-sm group-hover:underline">Chat on WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></span></span>
          </a>
          <Link href="/projects/central-park#investment" className="group flex min-h-12 items-center gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C78E]">
            <FileCheck2 size={23} className="shrink-0 text-[#E5C78E]" aria-hidden="true" />
            <span><span className="block text-xs font-semibold uppercase tracking-widest text-[#E5C78E]">Before you decide</span><span className="mt-1 block text-sm group-hover:underline">Explore project documentation</span></span>
          </Link>
        </div>
      </div>
      <div className="border-t border-white/15 bg-black/10">
        <div className="mx-auto max-w-[1280px] px-5 py-7 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-4 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
            <p>&copy; {new Date().getFullYear()} Swayam Sampada Properties Pvt. Ltd. All rights reserved.</p>
            <nav aria-label="Legal" className="flex flex-wrap gap-x-6"><Link href="/privacy-policy" className={linkStyle}>Privacy Policy</Link><Link href="/terms" className={linkStyle}>Terms & Conditions</Link></nav>
          </div>
          <p className="mt-5 max-w-4xl border-t border-white/10 pt-5 text-xs leading-6 text-white/75">Prices, availability and approvals are subject to change. Confirm project approvals, promoter identity, TG-RERA applicability and commercial terms with the relevant authorities and project team before purchase.</p>
        </div>
      </div>
    </footer>
  );
}
