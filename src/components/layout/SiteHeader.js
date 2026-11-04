"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/solutions" },
  { label: "Who We Are", href: "/about" },
  { label: "Services", href: "/solutions", dropdown: true },
  { label: "Careers", href: "/partner" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blog", href: "/insights" },
];
const divisions = [
  ["SSP Realty", "/solutions/realty"],
  ["SSP Properties", "/solutions/properties"],
  ["SSP Wealth", "/solutions/wealth"],
  ["SSP Infrastructure", "/solutions/infrastructure"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#e9eee9]">
      <div className="container-wide h-[78px] flex items-center justify-between gap-5">
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setOpen(false)}
        >
          <span className="w-11 h-11 bg-ssp-green text-ssp-gold flex items-center justify-center font-serif text-xl">
            SSP
          </span>
          <span className="leading-tight">
            <strong className="block text-[13px] tracking-wide text-ssp-dark">
              SWAYAM SAMPADA
            </strong>
            <small className="text-[10px] tracking-[.19em] text-gray-500">
              PROPERTIES PVT LTD
            </small>
          </span>
        </Link>
        <nav className="hidden xl:flex items-center gap-5">
          {links.map((link, i) => (
            <div className="relative" key={link.label + i}>
              {link.dropdown ? (
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-[12px] font-semibold text-gray-700 hover:text-ssp-green flex items-center gap-1"
                >
                  {link.label}
                  <ChevronDown size={13} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  className="text-[12px] font-semibold text-gray-700 hover:text-ssp-green"
                >
                  {link.label}
                </Link>
              )}
              {link.dropdown && servicesOpen && (
                <div className="absolute top-8 left-0 w-60 bg-white shadow-xl border border-gray-100 py-2">
                  {divisions.map(([name, href]) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-sm hover:bg-ssp-cream hover:text-ssp-green"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="hidden xl:block">
          <Link href="/contact" className="btn-primary">
            Book a Free Consultation <ArrowUpRight size={15} />
          </Link>
        </div>
        <button
          aria-label="Toggle navigation"
          className="xl:hidden p-2 text-ssp-dark"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="xl:hidden border-t bg-white px-5 py-4 max-h-[75vh] overflow-auto">
          {links.map((link, i) => (
            <Link
              key={link.label + i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 border-b border-gray-100 text-sm font-semibold"
            >
              {link.label}
            </Link>
          ))}
          <div className="pl-4 py-2">
            {divisions.map(([name, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-gray-600"
              >
                {name}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-3 w-full"
          >
            Book a Free Consultation <ArrowUpRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}
