import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Aeysha Mahmood",
  description:
    "Get in touch with Aeysha Mahmood for book collaborations, publishing enquiries, or speaking events.",
  alternates: { canonical: "https://aeyshaa.com/contact" },
};


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
