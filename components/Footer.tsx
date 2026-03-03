import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Aeysha" },
  { href: "/books", label: "My Books" },
  { href: "/ryterly", label: "Ryterly Publishing" },
  { href: "/contact", label: "Contact" },
];

const bookLinks = [
  { label: "Lilly & Tommy", href: "/books#lilly-tommy" },
  { label: "History's Wildest Tales", href: "/books#history" },
];


export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blush-50 to-blush-100 border-t border-blush-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="font-playfair text-2xl text-charcoal mb-3">
              Aeysha Mahmood
            </h3>
            <p className="text-sm text-rosegold tracking-[0.15em] uppercase font-dmsans mb-4">
              Author &amp; Storyteller
            </p>
            <p className="font-dmsans text-softgray text-sm leading-relaxed max-w-xs">
              Writing stories that spark imagination, build courage, and remind
              young readers that every story matters.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/storiesbyaeysha/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-softgray hover:text-rosegold hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold"
                aria-label="Follow Aeysha on Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/aeysha-mahmood-4b2684183/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-softgray hover:text-rosegold hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold"
                aria-label="Connect with Aeysha on LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://www.amazon.com/stores/author/B0DPVSXWCY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-softgray hover:text-rosegold hover:shadow-md transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-rosegold"
                aria-label="Aeysha Mahmood on Amazon"
              >
                <Image
                  src="/assets/amazon-logo.png"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg text-charcoal mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-dmsans text-sm text-softgray hover:text-rosegold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-rosegold/30 group-hover:w-6 group-hover:bg-rosegold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Books & Connect */}
          <div>
            <h4 className="font-playfair text-lg text-charcoal mb-5">My Books</h4>
            <ul className="space-y-3 mb-8">
              {bookLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-dmsans text-sm text-softgray hover:text-rosegold transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-rosegold/30 group-hover:w-6 group-hover:bg-rosegold transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-playfair text-lg text-charcoal mb-3">Publishing</h4>
            <a
              href="https://ryterly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dmsans text-sm text-softgray hover:text-rosegold transition-colors flex items-center gap-2 group"
            >
              <span className="w-4 h-px bg-rosegold/30 group-hover:w-6 group-hover:bg-rosegold transition-all duration-300" />
              Ryterly Publishing
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blush-200 pt-8 flex items-center justify-center">
          <p className="font-dmsans text-sm text-softgray">
            © 2026 Aeysha Mahmood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
