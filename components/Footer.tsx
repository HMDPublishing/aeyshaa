import Link from "next/link";
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

function AmazonIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.439-2.186 1.439-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.699-3.182v.684zm3.186 7.705c-.209.189-.512.201-.745.076-1.047-.872-1.234-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.927 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.099v-.41c0-.753.06-1.642-.384-2.294-.385-.578-1.124-.816-1.775-.816-1.205 0-2.277.618-2.54 1.897-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66C5.7 2.167 8.796 1 11.558 1c1.415 0 3.263.376 4.379 1.445C17.271 3.585 17.158 5.09 17.158 6.725v5.17c0 1.553.645 2.237 1.252 3.073.214.298.261.659-.012.883-.678.567-1.885 1.617-2.548 2.206l-.706-.262z" />
      <path d="M20.553 18.591c-1.761 1.301-4.315 1.993-6.516 1.993-3.083 0-5.856-1.14-7.951-3.038-.165-.149-.018-.352.181-.236 2.263 1.317 5.061 2.109 7.953 2.109 1.949 0 4.094-.404 6.067-1.239.298-.127.548.195.266.411z" />
      <path d="M21.301 17.733c-.226-.289-1.494-.137-2.063-.069-.172.021-.199-.13-.043-.238.009-.007 1.009-.709 2.05-.504.288.054.332.342.056.811z" />
    </svg>
  );
}

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
                <AmazonIcon size={17} />
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
