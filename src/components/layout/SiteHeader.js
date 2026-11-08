"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowUpRight,
  Building2,
  House,
  TrendingUp,
  Landmark,
} from "lucide-react";

const divisions = [
  {
    number: "01",
    name: "SSP Realty",
    href: "/solutions/realty",
    description: "Verified listings, marketing and buying support.",
    Icon: Building2,
  },
  {
    number: "02",
    name: "SSP Properties",
    href: "/solutions/properties",
    description: "Residential and commercial property solutions.",
    Icon: House,
  },
  {
    number: "03",
    name: "SSP Wealth",
    href: "/solutions/wealth",
    description: "Property investment and asset advisory.",
    Icon: TrendingUp,
  },
  {
    number: "04",
    name: "SSP Infrastructure",
    href: "/solutions/infrastructure",
    description: "Infrastructure development and project partnerships.",
    Icon: Landmark,
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Insights", href: "/insights" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);

  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;

  const isActive = (href) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  };

  const solutionsActive = pathname.startsWith("/solutions");

const closeMenu = useCallback(() => {
  setOpen(false);
  setDivisionsOpen(false);
}, []);

  // ESCAPE AND RESIZE
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // CLOSE ON ROUTE CHANGE
  useEffect(() => {
    closeMenu();
  }, [pathname]);

  // PREVENT BACKGROUND SCROLL
  useEffect(() => {
    if (!open) return;

    const wasLocked = document.body.classList.contains("overflow-hidden");
    document.body.classList.add("overflow-hidden");

    return () => {
      if (!wasLocked) {
        document.body.classList.remove("overflow-hidden");
      }
    };
  }, [open]);

  // SHARED NAV LINK STYLE
  const desktopLinkClass = (active) =>
    `group relative px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
      active ? "text-[#D5B16D]" : "text-white hover:text-[#D5B16D]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-[100] w-full">
      {/* Mobile navigation */}
      <div className="relative z-[100] flex h-20 w-full items-center justify-between gap-4 border-b border-white/15 bg-[#102A23]/80 px-5 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 sm:px-8 xl:hidden">
        <Link href="/" onClick={closeMenu} aria-label="Swayam Sampada Properties Home" className="flex min-w-0 flex-col items-center gap-1">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-transparent.png`} alt="" width={80} height={38} priority unoptimized className="h-9 w-20 shrink-0 object-contain" />
          <span className="text-center text-[9px] font-semibold uppercase leading-tight tracking-[0.14em]">SWAYAM SAMPADA<span className="mt-0.5 block text-[8px] tracking-[0.12em] text-[#D5B16D]">PROPERTIES PVT.LTD</span></span>
        </Link>
        <div className="flex shrink-0 items-center gap-2">
          <a href={phone ? `tel:${phone}` : "/contact"} aria-label="Call our team" className="hidden min-[380px]:flex h-11 w-11 items-center justify-center rounded-full border border-current/25"><Phone size={18} /></a>
          <button type="button" onClick={() => setOpen((prev) => !prev)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" className="flex h-11 w-11 items-center justify-center rounded-full border border-current/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D5B16D]">
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="hidden w-full border-b border-white/15 bg-[#102A23]/80 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl backdrop-saturate-150 xl:block">
        <div className="w-full px-8 2xl:px-16">
          <div className="flex h-24 w-full items-center justify-between gap-8">
            {/* LOGO */}
            <Link
              href="/"
              onClick={closeMenu}
              aria-label="Swayam Sampada Properties Home"
              className="relative flex shrink-0 flex-col items-center gap-1"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-transparent.png`}
                alt="Swayam Sampada Properties"
                width={140}
                height={140}
                priority
                unoptimized
                className="h-10 w-24 object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="text-center text-[11px] font-semibold leading-tight tracking-[0.14em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                SWAYAM SAMPADA
                <span className="mt-0.5 block text-[9px] tracking-[0.12em] text-[#D5B16D]">PROPERTIES PVT.LTD</span>
              </span>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-3 py-1.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]"
            >
              {navLinks.slice(0, 2).map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={desktopLinkClass(active)}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#A7803E] transition-all duration-300 ${
                        active
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* OUR DIVISIONS MEGAMENU DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setDivisionsOpen(true)}
                onMouseLeave={() => setDivisionsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setDivisionsOpen((prev) => !prev)}
                  aria-expanded={divisionsOpen}
                  className={`group relative flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold tracking-wide transition-colors ${
                    divisionsOpen || solutionsActive
                      ? "text-[#D5B16D]"
                      : "text-white hover:text-[#D5B16D]"
                  }`}
                >
                  Our Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      divisionsOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#A7803E] transition-all duration-300 ${
                      solutionsActive || divisionsOpen
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                    }`}
                  />
                </button>

                {/* DROPDOWN MENU */}
                <div
                  className={`absolute left-1/2 top-full z-[120] w-[640px] -translate-x-1/2 pt-4 transition-all duration-200 ${
                    divisionsOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-2xl border border-[#C6A15B]/30 bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)]">
                    <div className="grid grid-cols-2 gap-2 p-2">
                      {divisions.map((division) => {
                        const Icon = division.Icon;
                        const active = isActive(division.href);

                        return (
                          <Link
                            key={division.href}
                            href={division.href}
                            onClick={() => setDivisionsOpen(false)}
                            className={`group flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-[#C6A15B]/40 hover:bg-[#F8F6EF] ${
                              active ? "border-[#C6A15B]/40 bg-[#F8F6EF]" : ""
                            }`}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#102A23] text-[#D5B16D] transition-colors duration-200 group-hover:bg-[#C6A15B] group-hover:text-[#102A23]">
                              <Icon size={20} strokeWidth={1.7} />
                            </div>

                            <div className="flex flex-col justify-between">
                              <div className="flex items-center justify-between">
                                <h3 className="text-[13px] font-bold text-[#163D32]">
                                  {division.name}
                                </h3>
                                <ArrowUpRight
                                  size={13}
                                  className="text-[#A7803E] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                />
                              </div>
                              <p className="mt-1 text-[11px] leading-relaxed text-[#515852]">
                                {division.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-1 flex items-center justify-between rounded-xl bg-[#102A23] px-4 py-3 text-[#F8F6EF]">
                      <p className="text-[11px] font-medium text-white/80">
                        Explore our complete ecosystem of solutions.
                      </p>
                      <Link
                        href="/solutions"
                        onClick={() => setDivisionsOpen(false)}
                        className="flex items-center gap-1.5 rounded-lg bg-[#C6A15B] px-3 py-1.5 text-[11px] font-bold text-[#102A23] transition-colors hover:bg-white"
                      >
                        Explore All
                        <ArrowUpRight size={13} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={desktopLinkClass(active)}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#A7803E] transition-all duration-300 ${
                        active
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* ACTION CTA BUTTONS */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="group flex h-10 items-center gap-2 rounded-full bg-[#102A23] px-5 text-[12px] font-bold tracking-wide text-[#D5B16D] shadow-sm transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#102A23] hover:shadow-md"
              >
                <span>Book Consultation</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 3. MOBILE FULLSCREEN OVERLAY MENU                             */}
      {/* ------------------------------------------------------------- */}
      <div
        id="mobile-navigation"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-[90] bg-white transition-all duration-300 xl:hidden ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24 sm:px-10">
          <div className="mb-5 border-b border-[#EAE7DF] pb-6">
            <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#A7803E]">
              SWAYAM SAMPADA PROPERTIES
            </p>
            <h2 className="font-serif text-3xl leading-tight text-[#163D32]">
              Discover a world of
              <span className="block italic text-[#A7803E]">
                possibilities.
              </span>
            </h2>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.slice(0, 2).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-[#EAE7DF] py-5 text-[16px] font-semibold transition-colors hover:text-[#A7803E] ${
                  isActive(link.href) ? "text-[#A7803E]" : "text-[#163D32]"
                }`}
              >
                <span>{link.name}</span>
                <span className="text-[10px] tracking-widest text-[#A7803E]">
                  0{index + 1}
                </span>
              </Link>
            ))}

            <div className="border-b border-[#EAE7DF]">
              <button
                type="button"
                aria-expanded={divisionsOpen}
                onClick={() => setDivisionsOpen((value) => !value)}
                className={`flex w-full items-center justify-between py-5 text-[16px] font-semibold transition-colors ${
                  solutionsActive ? "text-[#A7803E]" : "text-[#163D32]"
                }`}
              >
                <span>Our Services</span>
                <ChevronDown
                  size={19}
                  className={`text-[#A7803E] transition-transform duration-300 ${
                    divisionsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  divisionsOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <Link
                    href="/solutions"
                    onClick={closeMenu}
                    className="mb-2 flex items-center justify-between bg-[#F8F6EF] px-4 py-3 text-xs font-semibold text-[#163D32]"
                  >
                    Explore All Solutions
                    <ArrowUpRight size={15} />
                  </Link>

                  {divisions.map((item) => {
                    const Icon = item.Icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 border-b border-gray-100 py-4 text-sm text-[#163D32] transition-colors hover:text-[#A7803E]"
                      >
                        <Icon size={17} className="text-[#A7803E]" />
                        {item.name}
                        <ArrowUpRight
                          size={14}
                          className="ml-auto text-gray-400"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-[#EAE7DF] py-5 text-[16px] font-semibold transition-colors hover:text-[#A7803E] ${
                  isActive(link.href) ? "text-[#A7803E]" : "text-[#163D32]"
                }`}
              >
                <span>{link.name}</span>
                <span className="text-[10px] tracking-widest text-[#A7803E]">
                  0{index + 3}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="group mt-8 flex min-h-14 w-full items-center justify-between bg-[#C6A15B] px-6 py-3 text-sm font-bold tracking-wide text-[#163D32] transition-all duration-300 hover:bg-[#163D32] hover:text-white"
          >
            <span>Book a Consultation</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#163D32] text-[#D5B16D] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
              <ArrowUpRight size={18} />
            </span>
          </Link>

          <div className="mt-auto space-y-4 border-t border-[#EAE7DF] pt-7 text-xs text-[#515852]">
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#A7803E]">
              GET IN TOUCH
            </p>

            <a
              href={phone ? `tel:${phone}` : "/contact"}
              className="flex items-center gap-3 transition-colors hover:text-[#163D32]"
            >
              <Phone size={16} className="text-[#163D32]" />
              {phone || "Contact our team"}
            </a>

            <a
              href={email ? `mailto:${email}` : "/contact"}
              className="flex items-center gap-3 transition-colors hover:text-[#163D32]"
            >
              <Mail size={16} className="text-[#163D32]" />
              {email || "Make an enquiry"}
            </a>

            <p className="pt-3 text-[9px] tracking-[0.15em] text-gray-400">
              SWAYAM SAMPADA PROPERTIES PVT. LTD.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
