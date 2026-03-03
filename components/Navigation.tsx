"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-offwhite/90 backdrop-blur-md shadow-sm border-b border-blush-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="font-playfair text-xl md:text-2xl text-charcoal tracking-wide group-hover:text-rosegold transition-colors duration-300">
              Aeysha Mahmood
            </span>
            <span className="text-[10px] text-rosegold tracking-[0.2em] uppercase font-dmsans">
              Author &amp; Storyteller
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-dmsans text-sm tracking-wide transition-colors duration-300 group ${
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
              className="bg-rosegold text-white px-5 py-2 rounded-full text-sm font-dmsans tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-md"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal hover:text-rosegold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-offwhite/95 backdrop-blur-md border-t border-blush-100 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-dmsans text-base tracking-wide transition-colors ${
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
            className="bg-rosegold text-white px-5 py-3 rounded-full text-sm font-dmsans tracking-wide text-center hover:bg-rosegold-dark transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
