"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/books", label: "Books" },
  { href: "/ryterly", label: "Ryterly" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-offwhite/90 backdrop-blur-md shadow-sm border-b border-blush-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" aria-label="Aeysha Mahmood — Home">
            <Image
              src="/assets/aeysha-logo.png"
              alt="Aeysha Mahmood"
              width={42}
              height={42}
              className="h-9 md:h-[42px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`relative font-dmsans text-sm tracking-wide transition-colors duration-300 group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold focus-visible:ring-offset-2 rounded-sm ${
                  pathname === link.href
                    ? "text-rosegold"
                    : "text-charcoal hover:text-rosegold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-rosegold transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-rosegold text-white px-5 py-2.5 rounded-full text-sm font-dmsans tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold focus-visible:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button — minimum 44×44px touch target */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center text-charcoal hover:text-rosegold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold rounded-full"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-offwhite/95 backdrop-blur-md border-t border-blush-100 px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
              className={`font-dmsans text-base tracking-wide transition-colors py-3 px-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold ${
                pathname === link.href
                  ? "text-rosegold font-medium"
                  : "text-charcoal hover:text-rosegold"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-rosegold text-white px-5 py-3.5 rounded-full text-sm font-dmsans tracking-wide text-center hover:bg-rosegold-dark transition-all mt-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold focus-visible:ring-offset-2"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
