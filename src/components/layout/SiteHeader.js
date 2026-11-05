
"use client";

import { useEffect, useState } from "react";
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
  { name: "Careers", href: "/partner" },
  { name: "Insights", href: "/insights" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);

  const transparent = !scrolled && !open;

  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;

  const isActive = (href) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
  };

  const solutionsActive = pathname.startsWith("/solutions");

  const closeMenu = () => {
    setOpen(false);
    setDivisionsOpen(false);
  };

  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setDivisionsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setOpen(false);
        setDivisionsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setDivisionsOpen(false);
  }, [pathname]);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      }`}
    >
      {/* TOP UTILITY BAR */}

      <div
        className={`hidden h-9 border-b lg:block transition-colors duration-300 ${
          transparent
            ? "border-white/20 bg-black/15"
            : "border-[#163D32] bg-[#163D32]"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8 xl:px-12">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C6A15B]" />
            <p className="text-[10px] font-medium tracking-[0.12em] text-white/90">
              BUILDING TRUST. CREATING FUTURES.
            </p>
          </div>

          <div className="flex items-center gap-7 text-[11px] text-white/90">
            <a
              href={phone ? `tel:${phone}` : "/contact"}
              className="flex items-center gap-2 transition-colors hover:text-[#C6A15B]"
            >
              <Phone size={13} className="text-[#C6A15B]" />
              {phone || "Contact our team"}
            </a>

            <span className="h-3 w-px bg-white/25" />

            <a
              href={email ? `mailto:${email}` : "/contact"}
              className="flex items-center gap-2 transition-colors hover:text-[#C6A15B]"
            >
              <Mail size={13} className="text-[#C6A15B]" />
              {email || "Make an enquiry"}
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}

      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 xl:px-12">
        {/* LOGO */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Swayam Sampada Properties Home"
          className="relative z-50 flex h-full shrink-0 items-center"
        >
          <Image
            src="/images/ssp-logo.webp"
            alt="Swayam Sampada Properties"
            width={150}
            height={150}
            priority
            unoptimized
            className="h-[62px] w-auto max-w-[180px] object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 xl:flex 2xl:gap-9"
        >
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`group relative py-3 text-[13px] font-semibold tracking-wide transition-colors ${
                transparent
                  ? "text-white hover:text-[#C6A15B]"
                  : "text-[#2B2B2D] hover:text-[#163D32]"
              }`}
            >
              {link.name}

              <span
                className={`absolute bottom-1 left-0 h-[2px] bg-[#C6A15B] transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* OUR DIVISIONS DROPDOWN */}

          <div
            className="relative"
            onMouseEnter={() => setDivisionsOpen(true)}
            onMouseLeave={() => setDivisionsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setDivisionsOpen((prev) => !prev)}
              aria-expanded={divisionsOpen}
              className={`group flex items-center gap-2 py-3 text-[13px] font-semibold tracking-wide transition-colors ${
                divisionsOpen || solutionsActive
                  ? transparent
                    ? "text-[#C6A15B]"
                    : "text-[#163D32]"
                  : transparent
                    ? "text-white hover:text-[#C6A15B]"
                    : "text-[#2B2B2D] hover:text-[#163D32]"
              }`}
            >
              Our Divisions

              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  divisionsOpen ? "rotate-180" : ""
                }`}
              />

              <span
                className={`absolute bottom-1 left-0 h-[2px] bg-[#C6A15B] transition-all duration-300 ${
                  solutionsActive || divisionsOpen
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>

            {/* COMPACT DROPDOWN PANEL */}

            <div
              className={`absolute left-1/2 top-full z-50 w-[680px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                divisionsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
              }`}
            >
              <div className="overflow-hidden border border-[#C6A15B]/20 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.16)]">
                {/* DIVISION LINKS */}

                <div className="grid grid-cols-4 gap-1 p-3">
                  {divisions.map((division) => {
                    const Icon = division.Icon;
                    const active = isActive(division.href);

                    return (
                      <Link
                        key={division.href}
                        href={division.href}
                        onClick={() => setDivisionsOpen(false)}
                        className={`group flex min-h-[145px] flex-col border border-transparent p-3 transition-all duration-200 hover:border-[#C6A15B]/30 hover:bg-[#F8F6EF] ${
                          active ? "border-[#C6A15B]/30 bg-[#F8F6EF]" : ""
                        }`}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-[9px] font-semibold tracking-widest text-[#C6A15B]">
                            {division.number}
                          </span>

                          <ArrowUpRight
                            size={13}
                            className="text-[#163D32] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                          />
                        </div>

                        <div className="mb-3 flex h-9 w-9 items-center justify-center bg-[#163D32] text-[#C6A15B] transition-colors duration-200 group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
                          <Icon size={18} strokeWidth={1.7} />
                        </div>

                        <h3 className="mb-1 text-[12px] font-semibold leading-tight text-[#163D32]">
                          {division.name}
                        </h3>

                        <p className="text-[10px] leading-[1.5] text-[#2B2B2D]/65">
                          {division.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>

                {/* DROPDOWN FOOTER */}

                <div className="flex items-center justify-between border-t border-[#163D32]/10 bg-[#F8F6EF] px-5 py-3">
                  <p className="text-[11px] text-[#2B2B2D]/65">
                    Discover our integrated real estate solutions.
                  </p>

                  <Link
                    href="/solutions"
                    onClick={() => setDivisionsOpen(false)}
                    className="flex items-center gap-2 text-[11px] font-semibold text-[#163D32] transition-colors hover:text-[#B58B42]"
                  >
                    Explore All Solutions
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* REMAINING LINKS */}

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`group relative py-3 text-[13px] font-semibold tracking-wide transition-colors ${
                transparent
                  ? "text-white hover:text-[#C6A15B]"
                  : "text-[#2B2B2D] hover:text-[#163D32]"
              }`}
            >
              {link.name}

              <span
                className={`absolute bottom-1 left-0 h-[2px] bg-[#C6A15B] transition-all duration-300 ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA */}

        <Link
          href="/contact"
          className="group hidden min-h-11 items-center gap-3 rounded-full bg-[#C6A15B] py-1.5 pl-6 pr-1.5 text-[12px] font-bold tracking-wide text-[#163D32] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B] xl:inline-flex"
        >
          <span>Contact Us</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#163D32] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
            <ArrowUpRight size={17} />
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className={`relative z-50 flex h-11 w-11 items-center justify-center border transition-all duration-300 xl:hidden ${
            transparent
              ? "border-white/40 text-white hover:bg-white/10"
              : "border-[#163D32]/15 text-[#163D32] hover:bg-[#F8F6EF]"
          }`}
        >
          {open ? (
            <X size={23} strokeWidth={1.7} />
          ) : (
            <Menu size={23} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}

      <div
        id="mobile-navigation"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-white xl:hidden transition-all duration-300 ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28 sm:px-10">
          {/* MOBILE INTRO */}

          <div className="mb-5 border-b border-[#EAE7DF] pb-6">
            <p className="mb-2 text-[9px] font-bold tracking-[0.25em] text-[#C6A15B]">
              SWAYAM SAMPADA PROPERTIES
            </p>

            <h2 className="font-serif text-3xl leading-tight text-[#163D32]">
              Discover a world of
              <span className="block italic text-[#C6A15B]">
                possibilities.
              </span>
            </h2>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-col">
            {/* PRIMARY LINKS */}

            {navLinks.slice(0, 2).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-[#EAE7DF] py-5 text-[16px] font-semibold transition-colors hover:text-[#C6A15B] ${
                  isActive(link.href) ? "text-[#C6A15B]" : "text-[#163D32]"
                }`}
              >
                <span>{link.name}</span>

                <span className="text-[10px] tracking-widest text-[#C6A15B]">
                  0{index + 1}
                </span>
              </Link>
            ))}

            {/* MOBILE DIVISIONS */}

            <div className="border-b border-[#EAE7DF]">
              <button
                type="button"
                aria-expanded={divisionsOpen}
                onClick={() => setDivisionsOpen((value) => !value)}
                className={`flex w-full items-center justify-between py-5 text-[16px] font-semibold transition-colors ${
                  solutionsActive ? "text-[#C6A15B]" : "text-[#163D32]"
                }`}
              >
                <span>Our Divisions</span>

                <ChevronDown
                  size={19}
                  className={`text-[#C6A15B] transition-transform duration-300 ${
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
                        className="flex items-center gap-3 border-b border-gray-100 py-4 text-sm text-[#163D32] transition-colors hover:text-[#C6A15B]"
                      >
                        <Icon size={17} className="text-[#C6A15B]" />

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

            {/* REMAINING LINKS */}

            {navLinks.slice(2).map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={closeMenu}
                className={`flex items-center justify-between border-b border-[#EAE7DF] py-5 text-[16px] font-semibold transition-colors hover:text-[#C6A15B] ${
                  isActive(link.href) ? "text-[#C6A15B]" : "text-[#163D32]"
                }`}
              >
                <span>{link.name}</span>

                <span className="text-[10px] tracking-widest text-[#C6A15B]">
                  0{index + 3}
                </span>
              </Link>
            ))}
          </nav>

          {/* MOBILE CONTACT CTA */}

          <Link
            href="/contact"
            onClick={closeMenu}
            className="group mt-8 flex min-h-14 w-full items-center justify-between bg-[#C6A15B] px-6 py-3 text-sm font-bold tracking-wide text-[#163D32] transition-all duration-300 hover:bg-[#163D32] hover:text-white"
          >
            <span>Book a Consultation</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#163D32] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#C6A15B] group-hover:text-[#163D32]">
              <ArrowUpRight size={18} />
            </span>
          </Link>

          {/* CONTACT DETAILS */}

          <div className="mt-auto space-y-4 border-t border-[#EAE7DF] pt-7 text-xs text-gray-500">
            <p className="text-[9px] font-bold tracking-[0.2em] text-[#C6A15B]">
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
