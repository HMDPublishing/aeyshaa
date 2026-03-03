import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Sparkles, BookOpen, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Aeysha Mahmood — Author. Storyteller. Publishing Visionary.",
  description:
    "From children's tales that spark imagination to wild history that makes kids say 'No way!' — Aeysha Mahmood writes books that bring stories to life.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blush-200/30 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blush-300/20 blur-3xl animate-float-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rosegold/5 blur-3xl" />
          {/* Floating dots */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-rosegold/20 animate-float"
              style={{
                top: `${20 + i * 12}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${5 + i}s`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-blush-100 text-rosegold px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase font-dmsans mb-8">
              <Sparkles size={12} />
              Children&apos;s Book Author &amp; Publisher
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-6">
              Aeysha
              <br />
              <span className="text-rosegold italic">Mahmood</span>
            </h1>
            <p className="font-cormorant text-xl md:text-2xl text-softgray italic mb-4 leading-relaxed">
              Author. Storyteller. Publishing Visionary.
            </p>
            <p className="font-dmsans text-base md:text-lg text-softgray leading-relaxed mb-10 max-w-lg">
              From children&apos;s tales that spark imagination to wild history that
              makes kids say &apos;No way!&apos; — I write books that bring stories to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/books"
                className="group bg-rosegold text-white px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rosegold/20 flex items-center justify-center gap-2"
              >
                Explore My Books
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://ryterly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group border-2 border-rosegold text-rosegold px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Visit Ryterly Publishing
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-rosegold/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-8 rounded-full border border-blush-200/50" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-rosegold/10">
                <Image
                  src="/assets/Aeysha-headshot.webp"
                  alt="Aeysha Mahmood — Author"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 420px"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-blush-100">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-rosegold" />
                  <span className="font-dmsans text-xs font-medium text-charcoal">Published Author</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-rosegold rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-white fill-white" />
                  ))}
                </div>
                <p className="font-dmsans text-[10px] text-white mt-0.5">2 Books Published</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-dmsans text-xs text-softgray/50 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-rosegold/50 to-transparent" />
        </div>
      </section>

      {/* FEATURED BOOKS SECTION */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">My Stories</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4">
              Books That Spark
              <span className="text-rosegold italic"> Wonder</span>
            </h2>
            <div className="w-16 h-px bg-rosegold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Book 1 Card */}
            <div className="group bg-gradient-to-br from-blush-50 to-cream rounded-3xl p-8 border border-blush-100 hover:shadow-2xl hover:shadow-rosegold/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-36 rounded-xl overflow-hidden shadow-xl shadow-rosegold/10 group-hover:shadow-2xl group-hover:shadow-rosegold/20 transition-all duration-500 group-hover:-rotate-2">
                    <Image
                      src="/assets/lilly-and-tommy-book-cover.webp"
                      alt="Lilly & Tommy: A Cat's Adventure"
                      fill
                      className="object-cover object-center"
                      sizes="96px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-blush-100 text-rosegold text-xs px-3 py-1 rounded-full font-dmsans mb-3 tracking-wide">
                    Picture Book · Ages 3–7
                  </span>
                  <h3 className="font-playfair text-xl text-charcoal mb-2 leading-tight">
                    Lilly &amp; Tommy: A Cat&apos;s Adventure
                  </h3>
                  <p className="font-dmsans text-sm text-softgray leading-relaxed mb-4">
                    A heartwarming tale of friendship, bravery, and the unbreakable bond between a little girl and her beloved fluffy grey Persian cat.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Friendship", "Bravery", "Adventure"].map((tag) => (
                      <span key={tag} className="text-xs font-dmsans text-rosegold/70 bg-white px-2 py-1 rounded-full border border-blush-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/books#lilly-tommy" className="inline-flex items-center gap-1 text-rosegold font-dmsans text-sm font-medium hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Book 2 Card */}
            <div className="group bg-gradient-to-br from-blush-50 to-cream rounded-3xl p-8 border border-blush-100 hover:shadow-2xl hover:shadow-rosegold/10 transition-all duration-500 hover:-translate-y-1">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="relative w-24 h-36 rounded-xl overflow-hidden shadow-xl shadow-rosegold/10 group-hover:shadow-2xl group-hover:shadow-rosegold/20 transition-all duration-500 group-hover:-rotate-2">
                    <Image
                      src="/assets/history-wildest-tales.webp"
                      alt="History's Wildest Tales for Curious Kids"
                      fill
                      className="object-cover object-center"
                      sizes="96px"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="inline-block bg-blush-100 text-rosegold text-xs px-3 py-1 rounded-full font-dmsans mb-3 tracking-wide">
                    Non-Fiction · Ages 8–12
                  </span>
                  <h3 className="font-playfair text-xl text-charcoal mb-2 leading-tight">
                    History&apos;s Wildest Tales for Curious Kids
                  </h3>
                  <p className="font-dmsans text-sm text-softgray leading-relaxed mb-4">
                    50 wild, weird, and wonderful true stories from history — proving that the past is stranger (and funnier) than fiction!
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["History", "Non-Fiction", "Funny"].map((tag) => (
                      <span key={tag} className="text-xs font-dmsans text-rosegold/70 bg-white px-2 py-1 rounded-full border border-blush-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href="/books#history" className="inline-flex items-center gap-1 text-rosegold font-dmsans text-sm font-medium hover:gap-3 transition-all">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 font-dmsans text-sm text-rosegold border-b border-rosegold/30 pb-1 hover:border-rosegold transition-colors"
            >
              View All Books <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW SECTION */}
      <section className="py-24 bg-gradient-to-br from-blush-50 via-cream to-blush-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-rosegold/10 blur-2xl" />
              <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl shadow-rosegold/10">
                <Image
                  src="/assets/Aeysha-headshot.webp"
                  alt="Aeysha Mahmood"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 80vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rosegold/20 to-transparent" />
              </div>
              {/* Decorative corner element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-dashed border-rosegold/20" />
            </div>

            <div>
              <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">About the Author</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-6 leading-[1.2]">
                The woman behind
                <br />
                <span className="text-rosegold italic">the stories</span>
              </h2>
              <p className="font-dmsans text-base text-softgray leading-relaxed mb-6">
                Aeysha Mahmood is a children&apos;s book author, book designer, and founder of Ryterly Publishing. With a passion for beautifully crafted stories, she writes books that spark curiosity, build courage, and remind young readers that every story matters.
              </p>
              <p className="font-dmsans text-base text-softgray leading-relaxed mb-8">
                Her journey began with a love for beautifully crafted books — first designing them for others, then writing her own, and now helping other authors do the same through Ryterly Publishing.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-rosegold border border-rosegold px-6 py-3 rounded-full font-dmsans text-sm hover:bg-rosegold hover:text-white transition-all duration-300 group"
              >
                Read More About Aeysha
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RYTERLY SECTION */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-rosegold to-rosegold-dark rounded-3xl p-10 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border border-white"
                  style={{
                    width: `${150 + i * 100}px`,
                    height: `${150 + i * 100}px`,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
            <div className="relative">
              <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-white/60 mb-4 block">Publishing Services</span>
              <h2 className="font-playfair text-4xl md:text-5xl mb-6">
                Ryterly Publishing
              </h2>
              <p className="font-cormorant text-xl italic text-white/80 mb-4">
                &ldquo;The Art of Authorship, Perfected&rdquo;
              </p>
              <p className="font-dmsans text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
                Beyond writing, Aeysha helps authors bring their stories to life through Ryterly Publishing — offering professional editing, design, and publishing services that transform manuscripts into masterpieces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://ryterly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white text-rosegold px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Discover Ryterly
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/ryterly"
                  className="border border-white/40 text-white px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE SECTION */}
      <section className="py-24 bg-gradient-to-b from-blush-50 to-offwhite">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="relative">
            <span className="font-cormorant text-[180px] leading-none text-rosegold/10 absolute -top-16 left-1/2 -translate-x-1/2 select-none">
              &ldquo;
            </span>
            <blockquote className="relative font-cormorant text-3xl md:text-4xl lg:text-5xl italic text-charcoal leading-relaxed mb-8">
              Every story deserves to be beautifully told and impeccably published.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-rosegold" />
              <span className="font-dmsans text-sm text-rosegold tracking-widest uppercase">
                Aeysha Mahmood
              </span>
              <div className="w-12 h-px bg-rosegold" />
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CONTACT SECTION */}
      <section className="py-24 bg-blush-gradient">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">Let&apos;s Connect</span>
          <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4">
            Stay <span className="text-rosegold italic">Connected</span>
          </h2>
          <p className="font-dmsans text-base text-softgray leading-relaxed mb-10">
            Join Aeysha&apos;s community for book updates, writing tips, and publishing insights.
          </p>

          <form className="bg-white rounded-3xl p-8 shadow-xl shadow-rosegold/5 border border-blush-100 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3.5 rounded-2xl border border-blush-200 font-dmsans text-sm text-charcoal placeholder:text-softgray/50 focus:outline-none focus:border-rosegold bg-offwhite transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3.5 rounded-2xl border border-blush-200 font-dmsans text-sm text-charcoal placeholder:text-softgray/50 focus:outline-none focus:border-rosegold bg-offwhite transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-rosegold text-white py-4 rounded-2xl font-dmsans text-sm tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rosegold/20 flex items-center justify-center gap-2"
            >
              <Heart size={16} />
              Subscribe to Newsletter
            </button>
          </form>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <span className="font-dmsans text-xs text-softgray uppercase tracking-widest">Follow Along</span>
            <div className="flex gap-4">
              {[
                { label: "Instagram", href: "https://www.instagram.com/storiesbyaeysha/", icon: "IG" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/aeysha-mahmood-4b2684183/", icon: "LI" },
                { label: "Amazon", href: "https://www.amazon.com/stores/author/B0DPVSXWCY", icon: "AM" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xs font-dmsans text-rosegold font-semibold hover:bg-rosegold hover:text-white shadow-md hover:shadow-rosegold/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
