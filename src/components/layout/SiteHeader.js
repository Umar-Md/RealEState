"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Phone,
  Mail,
  Building2,
  Home,
  TrendingUp,
  Landmark,
} from "lucide-react";

/* ---------- CONFIG (edit these) ---------- */
const CONTACT = {
  phone: "+91 98765 43210", // TODO: replace with real number
  phoneHref: "tel:+919876543210",
  email: "info@sspproperties.in", // TODO: replace with real email
};

const links = [
  { label: "Home", href: "/", exact: true },
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/solutions", exact: true },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Careers", href: "/partner" },
  { label: "Insights", href: "/insights" },
];

const divisions = [
  {
    name: "SSP Realty",
    href: "/solutions/realty",
    desc: "Residential & commercial sales and leasing",
    icon: Building2,
  },
  {
    name: "SSP Properties",
    href: "/solutions/properties",
    desc: "Curated plots, villas and apartments",
    icon: Home,
  },
  {
    name: "SSP Wealth",
    href: "/solutions/wealth",
    desc: "Real-estate led investment advisory",
    icon: TrendingUp,
  },
  {
    name: "SSP Infrastructure",
    href: "/solutions/infrastructure",
    desc: "Development & large-scale projects",
    icon: Landmark,
  },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef(null);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  /* scroll + keyboard */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  /* close everything on route change */
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* close desktop dropdown on outside click */
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenus = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const isActive = (link) => {
    if (link.dropdown) return pathname.startsWith("/solutions/");
    if (link.exact) return pathname === link.href;
    return pathname.startsWith(link.href);
  };

  const linkColor = (active) =>
    transparent
      ? `text-white/90 hover:text-[#D5B36A] ${active ? "text-[#D5B36A]" : ""}`
      : `text-[#303A35] hover:text-[#173F32] ${active ? "text-[#173F32]" : ""}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
          transparent
            ? "bg-gradient-to-b from-black/50 to-transparent"
            : "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(23,63,50,0.08),0_8px_30px_-12px_rgba(0,0,0,0.12)]"
        }`}
      >
        {/* ---------- UTILITY BAR ---------- */}
        <div
          className={`hidden lg:block overflow-hidden transition-all duration-500 ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          } ${
            transparent
              ? "border-b border-white/10 text-white/80"
              : "bg-[#173F32] text-white/85"
          }`}
        >
          <div className="container-wide h-10 flex items-center justify-between text-[12px] tracking-wide">
            <p className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D5B36A]" />
              Trusted real estate partners across Hyderabad
            </p>
            <div className="flex items-center gap-6">
              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-2 hover:text-[#D5B36A] transition-colors"
              >
                <Phone size={12} />
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2 hover:text-[#D5B36A] transition-colors"
              >
                <Mail size={12} />
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        {/* ---------- MAIN BAR ---------- */}
        <div
          className={`container-wide flex items-center justify-between gap-6 transition-all duration-500 ${
            scrolled ? "h-[72px]" : "h-[84px]"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenus}
            aria-label="Swayam Sampada Properties – Home"
            className="shrink-0"
          >
            <div
              className={`inline-flex rounded-md transition-all duration-500 ${
                transparent ? "bg-white p-1.5 shadow-lg" : "bg-transparent"
              }`}
            >
              <Image
                src="/images/ssp_logo.jpeg"
                alt="Swayam Sampada Properties"
                width={0}
                height={0}
                sizes="200px"
                priority
                className="h-14 w-auto"
              />
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav ref={navRef} className="hidden xl:flex items-center gap-8">
            {links.map((link) => {
              const active = isActive(link);
              const underline = (
                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#D5B36A] transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover/link:w-full"
                  }`}
                />
              );

              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      className={`group/link relative flex items-center gap-1.5 text-[13px] font-medium tracking-wide transition-colors duration-300 ${linkColor(
                        active || servicesOpen
                      )}`}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                      {underline}
                    </button>

                    {/* MEGA DROPDOWN */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[520px] transition-all duration-300 ${
                        servicesOpen
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 translate-y-2 invisible"
                      }`}
                    >
                      <div className="bg-white rounded-lg shadow-2xl ring-1 ring-black/5 overflow-hidden">
                        <div className="px-6 pt-5 pb-3 flex items-center justify-between">
                          <p className="text-[10px] uppercase tracking-[0.25em] text-[#B8964A] font-semibold">
                            Our Divisions
                          </p>
                          <Link
                            href="/solutions"
                            onClick={closeMenus}
                            className="text-[12px] text-[#173F32] font-medium hover:underline"
                          >
                            View all
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-1 p-3 pt-0">
                          {divisions.map(({ name, href, desc, icon: Icon }) => (
                            <Link
                              key={href}
                              href={href}
                              onClick={closeMenus}
                              className="group flex gap-3 p-3 rounded-md hover:bg-[#F5F5EF] transition-colors"
                            >
                              <span className="shrink-0 w-10 h-10 rounded-md bg-[#173F32]/5 text-[#173F32] grid place-items-center group-hover:bg-[#173F32] group-hover:text-[#D5B36A] transition-colors">
                                <Icon size={18} />
                              </span>
                              <span className="min-w-0">
                                <span className="flex items-center gap-1 text-sm font-semibold text-[#173F32]">
                                  {name}
                                  <ArrowUpRight
                                    size={13}
                                    className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                                  />
                                </span>
                                <span className="block text-[12px] leading-snug text-gray-500 mt-0.5">
                                  {desc}
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="bg-[#173F32] px-6 py-3.5 flex items-center justify-between text-[12px] text-white/80">
                          <span>Not sure where to start?</span>
                          <Link
                            href="/contact"
                            onClick={closeMenus}
                            className="text-[#D5B36A] font-semibold hover:underline"
                          >
                            Talk to an advisor →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenus}
                  className={`group/link relative text-[13px] font-medium tracking-wide transition-colors duration-300 ${linkColor(
                    active
                  )}`}
                >
                  {link.label}
                  {underline}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden xl:flex items-center gap-4 shrink-0">
            <a
              href={CONTACT.phoneHref}
              aria-label="Call us"
              className={`w-11 h-11 rounded-full grid place-items-center border transition-all duration-300 ${
                transparent
                  ? "border-white/40 text-white hover:bg-white hover:text-[#173F32]"
                  : "border-[#173F32]/20 text-[#173F32] hover:bg-[#173F32] hover:text-white"
              }`}
            >
              <Phone size={16} />
            </a>
            <Link
              href="/contact"
              className={`group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 ${
                transparent
                  ? "bg-white text-[#173F32] hover:bg-[#D5B36A]"
                  : "bg-[#173F32] text-white hover:bg-[#245746]"
              }`}
            >
              Book a Consultation
              <span
                className={`w-8 h-8 rounded-full grid place-items-center transition-transform duration-300 group-hover:rotate-45 ${
                  transparent ? "bg-[#173F32] text-white" : "bg-[#D5B36A] text-[#173F32]"
                }`}
              >
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => {
              setOpen((v) => !v);
              setServicesOpen(false);
            }}
            className={`xl:hidden w-11 h-11 rounded-full grid place-items-center border transition-colors ${
              transparent
                ? "border-white/40 text-white"
                : "border-[#173F32]/20 text-[#173F32]"
            }`}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ---------- MOBILE DRAWER ---------- */}
      <div
        className={`xl:hidden fixed inset-0 z-40 bg-white transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div className="h-full overflow-y-auto pt-[100px] pb-8 px-6 flex flex-col">
          <nav className="flex-1">
            {links.map((link, i) => (
              <div
                key={link.label}
                className={`border-b border-gray-100 transition-all duration-500 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              >
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      className="w-full flex items-center justify-between py-5 text-xl font-medium text-[#173F32]"
                    >
                      {link.label}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ${
                        servicesOpen ? "grid-rows-[1fr] pb-3" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        {divisions.map(({ name, href, desc, icon: Icon }) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={closeMenus}
                            className="flex items-center gap-3 py-3 px-2 rounded-md active:bg-[#F5F5EF]"
                          >
                            <span className="w-10 h-10 rounded-md bg-[#173F32]/5 text-[#173F32] grid place-items-center">
                              <Icon size={18} />
                            </span>
                            <span>
                              <span className="block text-[15px] font-semibold text-[#173F32]">
                                {name}
                              </span>
                              <span className="block text-[12px] text-gray-500">
                                {desc}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={closeMenus}
                    className={`flex items-center justify-between py-5 text-xl font-medium ${
                      isActive(link) ? "text-[#B8964A]" : "text-[#173F32]"
                    }`}
                  >
                    {link.label}
                    <ArrowUpRight size={18} className="opacity-40" />
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-3">
            <Link
              href="/contact"
              onClick={closeMenus}
              className="flex items-center justify-center gap-3 w-full rounded-full bg-[#173F32] text-white px-5 py-4 text-sm font-semibold active:bg-[#245746]"
            >
              Book a Free Consultation
              <ArrowUpRight size={16} />
            </Link>
            <a
              href={CONTACT.phoneHref}
              className="flex items-center justify-center gap-3 w-full rounded-full border border-[#173F32]/20 text-[#173F32] px-5 py-4 text-sm font-semibold"
            >
              <Phone size={16} />
              {CONTACT.phone}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="block text-center text-[13px] text-gray-500 pt-2"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}