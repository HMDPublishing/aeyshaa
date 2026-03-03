import type { Metadata } from "next";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Aeysha Mahmood — Get in Touch",
  description:
    "Contact Aeysha Mahmood for book inquiries, publishing services, speaking events, or general questions. Based in the United Kingdom.",
};

function AmazonIcon({ size = 17 }: { size?: number }) {
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

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* HEADER */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-blush-200/30 blur-3xl" />
          <div className="absolute bottom-5 left-10 w-48 h-48 rounded-full bg-rosegold/10 blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">Say Hello</span>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.1]">
            Get in <span className="text-rosegold italic">Touch</span>
          </h1>
          <div className="w-16 h-px bg-rosegold mx-auto mb-6" />
          <p className="font-cormorant text-xl text-softgray italic max-w-xl mx-auto">
            Whether you&apos;re a reader, a fellow author, or curious about publishing — Aeysha loves hearing from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl text-charcoal mb-8">
                Let&apos;s <span className="text-rosegold italic">connect</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blush-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail size={18} className="text-rosegold" />
                  </div>
                  <div>
                    <p className="font-dmsans text-xs uppercase tracking-widest text-softgray mb-1">Email</p>
                    <a href="mailto:aeyshamahmood@gmail.com" className="font-dmsans text-sm text-charcoal hover:text-rosegold transition-colors">
                      aeyshamahmood@gmail.com
                    </a>
                    <br />
                    <a href="mailto:ryterly@gmail.com" className="font-dmsans text-xs text-softgray hover:text-rosegold transition-colors">
                      ryterly@gmail.com (Publishing)
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-blush-100 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={18} className="text-rosegold" />
                  </div>
                  <div>
                    <p className="font-dmsans text-xs uppercase tracking-widest text-softgray mb-1">Location</p>
                    <p className="font-dmsans text-sm text-charcoal">Based in the United Kingdom</p>
                    <p className="font-dmsans text-xs text-softgray mt-0.5">Available worldwide for publishing projects</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="font-dmsans text-xs uppercase tracking-widest text-softgray mb-4">Follow Along</p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/storiesbyaeysha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-blush-50 border border-blush-200 rounded-xl flex items-center justify-center text-softgray hover:text-white hover:bg-rosegold hover:border-rosegold transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={17} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aeysha-mahmood-4b2684183/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-blush-50 border border-blush-200 rounded-xl flex items-center justify-center text-softgray hover:text-white hover:bg-rosegold hover:border-rosegold transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={17} />
                  </a>
                  <a
                    href="https://www.amazon.com/stores/author/B0DPVSXWCY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-blush-50 border border-blush-200 rounded-xl flex items-center justify-center text-softgray hover:text-white hover:bg-rosegold hover:border-rosegold transition-all duration-300"
                    aria-label="Amazon Author Page"
                  >
                    <AmazonIcon size={17} />
                  </a>
                </div>
              </div>

              {/* Ryterly Link */}
              <div className="mt-10 bg-gradient-to-br from-blush-50 to-cream rounded-3xl p-6 border border-blush-100">
                <p className="font-playfair text-lg text-charcoal mb-2">Publishing Enquiries?</p>
                <p className="font-dmsans text-sm text-softgray mb-4">
                  For book publishing services, visit Ryterly Publishing directly.
                </p>
                <a
                  href="https://ryterly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-rosegold text-white px-5 py-2.5 rounded-full font-dmsans text-xs tracking-wide hover:bg-rosegold-dark transition-all"
                >
                  Visit ryterly.com →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
