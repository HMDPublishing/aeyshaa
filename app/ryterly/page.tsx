import type { Metadata } from "next";
import Link from "next/link";
import { Edit3, Layout, Globe, Megaphone, Palette, User, Phone, Mail, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Ryterly Publishing",
  description:
    "Ryterly Publishing — founded by Aeysha Mahmood. Professional book editing, design, publishing, and marketing services for self-published authors.",
  alternates: { canonical: "https://aeyshaa.com/ryterly" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ryterly Publishing",
  url: "https://ryterly.com",
  founder: { "@type": "Person", name: "Aeysha Mahmood" },
  description:
    "Full-service publishing company helping authors bring their stories to life.",
  email: "ryterly@gmail.com",
  sameAs: [
    "https://www.instagram.com/ryterly_publishing/",
    "https://www.linkedin.com/company/ryterly-publishing/",
  ],
};

const services = [
  {
    icon: Edit3,
    title: "Editorial Services",
    description:
      "Developmental editing, line editing, and meticulous proofreading — transforming your manuscript into a polished masterpiece.",
    features: ["Developmental Editing", "Line Editing", "Proofreading", "Beta Reading"],
  },
  {
    icon: Layout,
    title: "Book Design & Layout",
    description:
      "Custom cover design and professional interior formatting that makes your book look as good on shelves as in readers' hands.",
    features: ["Cover Design", "Interior Layout", "Typography", "Print-Ready Files"],
  },
  {
    icon: Globe,
    title: "Publishing & Distribution",
    description:
      "Global publishing and distribution through Amazon KDP, IngramSpark, Apple Books, and more — reaching readers worldwide.",
    features: ["Amazon KDP", "IngramSpark", "Apple Books", "ISBN Registration"],
  },
  {
    icon: Megaphone,
    title: "Book Marketing",
    description:
      "Strategic marketing campaigns that get your book discovered — from Amazon ads to social media launches.",
    features: ["Amazon Advertising", "Social Media", "Launch Strategy", "Press Releases"],
  },
  {
    icon: Palette,
    title: "Children's Book Illustration",
    description:
      "Beautiful custom illustrations that bring your story to life — hand-crafted to match your vision and enchant young readers.",
    features: ["Custom Illustrations", "Character Design", "Scene Illustrations", "Style Matching"],
  },
  {
    icon: User,
    title: "Author Branding",
    description:
      "Professional author platforms, website design, and brand identity — because every great author deserves a great presence.",
    features: ["Author Website", "Brand Identity", "Social Media Setup", "Author Bio & Press Kit"],
  },
];

export default function RyterlyPage() {
  return (
    <div className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      {/* HERO */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rosegold-dark via-rosegold to-rosegold-light">
        <div className="absolute inset-0 pointer-events-none opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full border border-white"
              style={{
                width: `${200 + i * 150}px`,
                height: `${200 + i * 150}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-white/60 mb-4 block">
            Full-Service Publishing
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl mb-4 leading-[1.1]">
            Ryterly Publishing
          </h1>
          <p className="font-cormorant text-2xl italic text-white/80 mb-6">
            &ldquo;The Art of Authorship, Perfected&rdquo;
          </p>
          <div className="w-16 h-px bg-white/40 mx-auto mb-8" />
          <p className="font-dmsans text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Founded by Aeysha Mahmood to help authors bring their stories to life with professional care, creative excellence, and genuine passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://ryterly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-rosegold px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Visit ryterly.com
              <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="border border-white/40 text-white px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT RYTERLY */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { num: "50+", label: "Books Published" },
              { num: "7", label: "Services Offered" },
              { num: "100%", label: "Author Focused" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-blush-gradient rounded-3xl p-8 border border-blush-100">
                <p className="font-playfair text-5xl text-rosegold mb-2">{stat.num}</p>
                <p className="font-dmsans text-sm text-softgray uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">Our Story</span>
            <h2 className="font-playfair text-4xl text-charcoal mb-6">
              Making Publishing <span className="text-rosegold italic">Personal</span>
            </h2>
            <p className="font-dmsans text-base text-softgray leading-relaxed mb-6">
              Ryterly Publishing was founded by Aeysha Mahmood to help authors bring their stories to life. What began as a small design studio has grown into a full-service creative publishing house dedicated to helping authors not just publish, but launch with genuine impact.
            </p>
            <p className="font-dmsans text-base text-softgray leading-relaxed">
              Our mission is to make publishing personal, powerful, and purposeful — because every story deserves to be beautifully told and widely read.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gradient-to-b from-blush-50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">What We Offer</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal">
              Services Designed for <span className="text-rosegold italic">Authors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-md shadow-rosegold/5 border border-blush-100 hover:shadow-xl hover:shadow-rosegold/10 transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-blush-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rosegold transition-colors duration-300">
                  <service.icon size={22} className="text-rosegold group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-playfair text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="font-dmsans text-sm text-softgray leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 font-dmsans text-xs text-softgray">
                      <span className="w-1.5 h-1.5 rounded-full bg-rosegold flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">Start Your Journey</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6">
            Ready to publish
            <br />
            <span className="text-rosegold italic">your story?</span>
          </h2>
          <p className="font-dmsans text-base text-softgray leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you have a manuscript ready or just an idea — Ryterly Publishing can help you turn it into a beautifully published book.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://ryterly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-rosegold text-white px-10 py-5 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-xl hover:shadow-rosegold/20 flex items-center justify-center gap-2 text-base"
            >
              Visit Ryterly Publishing
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="border-2 border-rosegold text-rosegold px-10 py-5 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold hover:text-white transition-all duration-300 flex items-center justify-center text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="tel:+447731922794"
              className="flex items-center gap-3 text-softgray hover:text-rosegold transition-colors group"
            >
              <div className="w-10 h-10 bg-blush-100 rounded-full flex items-center justify-center group-hover:bg-rosegold transition-colors">
                <Phone size={14} className="text-rosegold group-hover:text-white transition-colors" />
              </div>
              <span className="font-dmsans text-sm">+44 7731 922794</span>
            </a>
            <a
              href="mailto:ryterly@gmail.com"
              className="flex items-center gap-3 text-softgray hover:text-rosegold transition-colors group"
            >
              <div className="w-10 h-10 bg-blush-100 rounded-full flex items-center justify-center group-hover:bg-rosegold transition-colors">
                <Mail size={14} className="text-rosegold group-hover:text-white transition-colors" />
              </div>
              <span className="font-dmsans text-sm">ryterly@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
