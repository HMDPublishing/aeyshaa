import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, BookOpen, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Aeysha Mahmood — Author & Founder of Ryterly Publishing",
  description:
    "Learn about Aeysha Mahmood — children's book author, book designer, and founder of Ryterly Publishing. Discover her journey from book designer to published author.",
};

const values = [
  {
    icon: Heart,
    title: "Storytelling with Heart",
    description:
      "Writing books that spark imagination, build curiosity, and remind young readers that every story matters — told with warmth and genuine care.",
  },
  {
    icon: BookOpen,
    title: "Empowering Authors",
    description:
      "Helping writers publish with confidence through Ryterly Publishing — from first draft to global distribution, every step of the journey.",
  },
  {
    icon: Sparkles,
    title: "Craft & Care",
    description:
      "Every book deserves beautiful design, meticulous attention to detail, and the kind of polish that transforms a good book into a great one.",
  },
];

const funFacts = [
  { emoji: "🌸", label: "Favourite Colour", value: "Pink (obviously!)" },
  { emoji: "📖", label: "Fun History Fact", value: "Australia once declared war on emus — and lost!" },
  { emoji: "☕", label: "Writing Fuel", value: "Tea and determination" },
  { emoji: "✨", label: "Superpower", value: "Turning manuscripts into masterpieces" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-blush-200/30 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-rosegold/10 blur-2xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">
              The Author
            </span>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.1]">
              About <span className="text-rosegold italic">Aeysha</span>
            </h1>
            <div className="w-16 h-px bg-rosegold mx-auto mb-6" />
            <p className="font-cormorant text-xl text-softgray italic leading-relaxed">
              Author, book designer, and the woman behind Ryterly Publishing — on a mission to make every story beautifully told.
            </p>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Image */}
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blush-100 to-blush-200 -z-10" />
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-rosegold/10">
                <Image
                  src="/assets/Aeysha-headshot.webp"
                  alt="Aeysha Mahmood"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rosegold/20 via-transparent to-transparent" />
              </div>
              {/* Floating name tag */}
              <div className="absolute -bottom-6 left-8 right-8 bg-white rounded-2xl p-4 shadow-xl border border-blush-100">
                <p className="font-playfair text-lg text-charcoal">Aeysha Mahmood</p>
                <p className="font-dmsans text-xs text-rosegold tracking-widest uppercase mt-1">
                  Author · Designer · Publisher
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="lg:col-span-3 pt-8">
              <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">Her Story</span>
              <h2 className="font-playfair text-4xl text-charcoal mb-8 leading-tight">
                From designing books to writing — and helping others do the same
              </h2>
              <div className="space-y-5 font-dmsans text-softgray leading-relaxed text-base">
                <p>
                  Aeysha Mahmood is a published author, book designer, and the founder of Ryterly Publishing. Her journey began with a love for beautifully crafted books — first designing them for others, then writing her own.
                </p>
                <p>
                  Her debut children&apos;s book, <em className="text-charcoal font-medium">&ldquo;Lilly &amp; Tommy: A Cat&apos;s Adventure,&rdquo;</em> tells the heartwarming story of a little girl&apos;s bravery in rescuing her beloved cat. Her second book, <em className="text-charcoal font-medium">&ldquo;History&apos;s Wildest Tales for Curious Kids,&rdquo;</em> takes young readers on a wild journey through 50 unbelievable true stories from history.
                </p>
                <p>
                  Beyond writing, Aeysha founded Ryterly Publishing to help other authors achieve their publishing dreams. From editing and design to marketing and global distribution, Ryterly provides end-to-end support for self-published authors.
                </p>
                <p>
                  Aeysha believes that every story deserves to be told with care, creativity, and craft. Whether she&apos;s writing for young readers or helping fellow authors navigate the publishing world, her mission remains the same: to make great books that connect, inspire, and endure.
                </p>
              </div>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/books"
                  className="inline-flex items-center gap-2 bg-rosegold text-white px-7 py-3.5 rounded-full font-dmsans text-sm hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rosegold/20 group"
                >
                  Read My Books <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://ryterly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-rosegold text-rosegold px-7 py-3.5 rounded-full font-dmsans text-sm hover:bg-rosegold hover:text-white transition-all duration-300 group"
                >
                  Visit Ryterly <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-24 bg-gradient-to-b from-blush-50 to-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">What Drives Her</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal">
              Values &amp; <span className="text-rosegold italic">Mission</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-lg shadow-rosegold/5 border border-blush-100 hover:shadow-xl hover:shadow-rosegold/10 transition-all duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 bg-blush-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon size={24} className="text-rosegold" />
                </div>
                <h3 className="font-playfair text-xl text-charcoal mb-3">{value.title}</h3>
                <p className="font-dmsans text-sm text-softgray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUN FACTS SECTION */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">Getting to Know Her</span>
            <h2 className="font-playfair text-4xl text-charcoal">
              A Few Fun <span className="text-rosegold italic">Facts</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {funFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-center gap-5 bg-gradient-to-br from-blush-50 to-cream rounded-3xl p-6 border border-blush-100"
              >
                <span className="text-4xl flex-shrink-0">{fact.emoji}</span>
                <div>
                  <p className="font-dmsans text-xs uppercase tracking-widest text-rosegold mb-1">{fact.label}</p>
                  <p className="font-playfair text-lg text-charcoal">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-blush-gradient">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl text-charcoal mb-4">
            Let&apos;s <span className="text-rosegold italic">Connect</span>
          </h2>
          <p className="font-dmsans text-base text-softgray mb-8">
            Whether you&apos;re a reader, a fellow author, or curious about publishing — Aeysha loves hearing from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-rosegold text-white px-8 py-4 rounded-full font-dmsans text-sm hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg group"
            >
              Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 border border-rosegold text-rosegold px-8 py-4 rounded-full font-dmsans text-sm hover:bg-rosegold hover:text-white transition-all duration-300"
            >
              Explore My Books
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
