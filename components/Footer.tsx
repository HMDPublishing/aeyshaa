import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";

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
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/ryterly_publishing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-softgray hover:text-rosegold hover:shadow-md transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com/company/ryterly_publishing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-softgray hover:text-rosegold hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://youtube.com/@ryterly_publishing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-softgray hover:text-rosegold hover:shadow-md transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={16} />
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
        <div className="border-t border-blush-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-dmsans text-sm text-softgray">
            © 2025 Aeysha Mahmood. All rights reserved.
          </p>
          <p className="font-dmsans text-xs text-softgray/70">
            Website by{" "}
            <span className="text-rosegold/70">HMD Publishing</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
