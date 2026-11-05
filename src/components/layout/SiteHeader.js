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
} from "lucide-react";

const divisions = [
  {
    name: "SSP Realty",
    href: "/solutions/realty",
    description: "Real estate solutions",
  },
  {
    name: "SSP Properties",
    href: "/solutions/properties",
    description: "Residential and commercial properties",
  },
  {
    name: "SSP Wealth",
    href: "/solutions/wealth",
    description: "Property investment opportunities",
  },
  {
    name: "SSP Infrastructure",
    href: "/solutions/infrastructure",
    description: "Infrastructure development",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "What We Do", href: "/solutions" },
  { name: "Careers", href: "/partner" },
  { name: "Insights", href: "/insights" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE;
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        setServicesOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const wasLocked = document.body.classList.contains("overflow-hidden");
    document.body.classList.add("overflow-hidden");

    return () => {
      if (!wasLocked) document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300 bg-white shadow-[0_4px_25px_rgba(0,0,0,0.08)]"
    >
      {/* Top utility bar */}
      <div
        className="hidden lg:block border-b transition-all duration-300 border-gray-100 bg-[#163D32]"
      >
        <div className="mx-auto flex h-10 max-w-[1280px] items-center justify-between px-12 text-xs text-white">
          <p>Building Trust. Creating Futures.</p>

          <div className="flex items-center gap-6">
            <a
              href={phone ? `tel:${phone}` : "/contact"}
              className="flex items-center gap-2 hover:text-[#C6A15B]"
            >
              <Phone size={13} />
              {phone || "Contact our team"}
            </a>

            <a
              href={email ? `mailto:${email}` : "/contact"}
              className="flex items-center gap-2 hover:text-[#C6A15B]"
            >
              <Mail size={13} />
              {email || "Make an enquiry"}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div
        className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="relative z-50 flex h-full items-center"
        >
          <div className="flex items-center justify-center rounded-md px-2 py-1">
            <Image
              src="/images/ssp_logo.png?v=4"
              alt="Swayam Sampada Properties"
              width={600}
              height={640}
              priority
              unoptimized
              className="h-[68px] w-auto max-w-[190px] object-contain"
            />
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 xl:flex">
          {navLinks.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-sm font-medium transition-colors text-ssp-charcoal hover:text-ssp-green aria-[current=page]:text-ssp-green aria-[current=page]:underline aria-[current=page]:decoration-ssp-gold aria-[current=page]:underline-offset-8"
            >
              {link.name}
            </Link>
          ))}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-2 text-sm font-medium transition-colors text-ssp-charcoal hover:text-ssp-green aria-[current=page]:text-ssp-green aria-[current=page]:underline aria-[current=page]:decoration-ssp-gold aria-[current=page]:underline-offset-8"
            >
              Services
              <ChevronDown
                size={15}
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-5">
                <div className="grid grid-cols-2 gap-3 border border-gray-100 bg-white p-5 shadow-xl">
                  {divisions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className="group p-4 transition-colors hover:bg-[#F8F6EF]"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-[#163D32]">
                          {item.name}
                        </h3>
                        <ArrowUpRight
                          size={16}
                          className="text-[#C6A15B] opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </div>

                      <p className="mt-2 text-xs text-gray-500">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.slice(3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className="text-sm font-medium transition-colors text-ssp-charcoal hover:text-ssp-green aria-[current=page]:text-ssp-green aria-[current=page]:underline aria-[current=page]:decoration-ssp-gold aria-[current=page]:underline-offset-8"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 bg-[#C6A15B] px-6 py-3 text-sm font-semibold text-[#163D32] transition-colors hover:bg-[#163D32] hover:text-white xl:flex"
        >
          Contact Us
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="relative z-50 xl:hidden text-[#163D32]"
        >
          {open ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-0 top-0 z-40 bg-white xl:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-7 pb-10 pt-32 lg:pt-44">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.slice(0, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
                className="border-b border-gray-100 py-5 text-lg font-medium text-[#163D32]"
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile services */}
            <div className="border-b border-gray-100">
              <button
                aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(!servicesOpen)}
                className="flex w-full items-center justify-between py-5 text-lg font-medium text-[#163D32]"
              >
                Services
                <ChevronDown
                  size={19}
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="flex flex-col pb-4 pl-4">
                  {divisions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-gray-600 hover:text-[#C6A15B]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
                onClick={closeMenu}
                className="border-b border-gray-100 py-5 text-lg font-medium text-[#163D32]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-8 flex items-center justify-center gap-2 bg-[#C6A15B] px-6 py-4 font-semibold text-ssp-dark"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>

          <div className="mt-auto space-y-4 pt-10 text-sm text-gray-600">
            <a href={phone ? `tel:${phone}` : "/contact"} className="flex items-center gap-3">
              <Phone size={17} />
              {phone || "Contact our team"}
            </a>

            <a
              href={email ? `mailto:${email}` : "/contact"}
              className="flex items-center gap-3"
            >
              <Mail size={17} />
              {email || "Make an enquiry"}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}