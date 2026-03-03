import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, ShoppingCart, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Books by Aeysha Mahmood — Children's Books for Curious Young Minds",
  description:
    "Explore Aeysha Mahmood's children's books: 'Lilly & Tommy: A Cat's Adventure' and 'History's Wildest Tales for Curious Kids.' Stories that spark wonder.",
};

const lillyThemes = ["Friendship", "Bravery", "Responsibility", "Adventure", "Empathy", "Pets"];
const historyChapters = [
  "Weird Weapons & Wild Warriors",
  "Strange Science & Bizarre Experiments",
  "Royal Ridiculousness",
  "Extraordinary Food Fails",
  "Terrible Transportation Disasters",
  "Peculiar Pets & Animal Antics",
  "Fashion Failures Through the Ages",
  "Mysterious Mysteries",
  "Revolutionary Rebels",
  "Famous Lasts",
];

export default function BooksPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* PAGE HEADER */}
      <section className="relative py-20 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-blush-200/30 blur-3xl animate-float" />
          <div className="absolute bottom-5 left-10 w-48 h-48 rounded-full bg-rosegold/10 blur-2xl animate-float-slow" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="font-dmsans text-xs tracking-[0.2em] uppercase text-rosegold mb-4 block">
            Stories That Inspire
          </span>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-charcoal mb-6 leading-[1.1]">
            My <span className="text-rosegold italic">Books</span>
          </h1>
          <div className="w-16 h-px bg-rosegold mx-auto mb-6" />
          <p className="font-cormorant text-xl text-softgray italic max-w-2xl mx-auto">
            Each book is a world waiting to be discovered — written with love, designed with care.
          </p>
        </div>
      </section>

      {/* BOOK 1: LILLY & TOMMY */}
      <section id="lilly-tommy" className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-blush-gradient rounded-3xl blur-xl opacity-50 scale-95" />
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-blush-200 to-blush-300 rounded-2xl opacity-40 blur-lg group-hover:opacity-60 transition-opacity" />
                  <div className="relative w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-rosegold/20 rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/assets/Lily-tommy-book-cover.png"
                      alt="Lilly & Tommy: A Cat's Adventure"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 288px, 320px"
                    />
                  </div>
                  {/* Stars */}
                  <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-3 py-2 shadow-lg border border-blush-100">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={10} className="fill-rosegold text-rosegold" />
                      ))}
                    </div>
                    <p className="font-dmsans text-[9px] text-softgray">Heartwarming!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Book Details */}
            <div>
              <div className="flex gap-3 mb-4">
                <span className="bg-blush-100 text-rosegold text-xs px-3 py-1.5 rounded-full font-dmsans tracking-wide">Children&apos;s Picture Book</span>
                <span className="bg-blush-100 text-rosegold text-xs px-3 py-1.5 rounded-full font-dmsans tracking-wide">Ages 3–7</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-2 leading-tight">
                Lilly &amp; Tommy:
              </h2>
              <h2 className="font-playfair text-4xl md:text-5xl text-rosegold italic mb-6 leading-tight">
                A Cat&apos;s Adventure
              </h2>
              <p className="font-dmsans text-base text-softgray leading-relaxed mb-8">
                Once upon a time, there was a little girl named Lilly who had a fluffy, grey Persian cat named Tommy. When Tommy escapes through the garden gate, Lilly must overcome her fears and find the courage to rescue her best friend. With the kind help of neighbour Mrs. Rose, Lilly discovers that bravery isn&apos;t the absence of fear — it&apos;s doing what needs to be done for the ones you love.
              </p>
              <p className="font-dmsans text-base text-softgray leading-relaxed mb-8">
                A heartwarming tale about friendship, bravery, and the unbreakable bond between a child and their beloved pet.
              </p>

              {/* Themes */}
              <div className="mb-8">
                <p className="font-dmsans text-xs uppercase tracking-widest text-softgray mb-3">Key Themes</p>
                <div className="flex flex-wrap gap-2">
                  {lillyThemes.map((theme) => (
                    <span key={theme} className="bg-blush-50 border border-blush-200 text-charcoal text-xs px-4 py-1.5 rounded-full font-dmsans">
                      {theme}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="group bg-rosegold text-white px-7 py-3.5 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rosegold/20 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={15} />
                  Available Now
                </a>
                <a
                  href="#"
                  className="group border border-rosegold text-rosegold px-7 py-3.5 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <BookOpen size={15} />
                  Read Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-24 bg-gradient-to-b from-offwhite to-blush-50">
        <div className="absolute inset-x-0 bottom-0 h-px bg-blush-200" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blush-100 border border-blush-200 flex items-center justify-center">
          <BookOpen size={18} className="text-rosegold" />
        </div>
      </div>

      {/* BOOK 2: HISTORY'S WILDEST TALES */}
      <section id="history" className="py-24 bg-blush-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Book Details - Left */}
            <div className="order-2 lg:order-1">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-white text-rosegold text-xs px-3 py-1.5 rounded-full font-dmsans tracking-wide border border-blush-200">Children&apos;s Non-Fiction</span>
                <span className="bg-white text-rosegold text-xs px-3 py-1.5 rounded-full font-dmsans tracking-wide border border-blush-200">Ages 8–12</span>
                <span className="bg-rosegold text-white text-xs px-3 py-1.5 rounded-full font-dmsans tracking-wide">Ryterly Publishing</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-charcoal mb-2 leading-tight">
                History&apos;s Wildest Tales
              </h2>
              <h2 className="font-playfair text-3xl text-rosegold italic mb-6 leading-tight">
                for Curious Kids
              </h2>
              <p className="font-cormorant text-lg italic text-softgray mb-6 leading-relaxed">
                &ldquo;Unbelievable True Stories and Bizarre Facts About the Weird and Wonderful Past&rdquo;
              </p>
              <p className="font-dmsans text-base text-softgray leading-relaxed mb-6">
                Did you know Australia once declared war on birds — and lost? Or that a pigeon was awarded a medal for bravery? From emperors who made their horses government officials to floods made entirely of molasses, this book is packed with 50 wild, weird, and wonderful true stories that prove history is anything but boring.
              </p>
              <p className="font-dmsans text-base text-softgray leading-relaxed mb-8">
                Perfect for curious kids ages 8–12 who love learning facts that make everyone say &ldquo;No way!&rdquo;
              </p>

              {/* ISBN */}
              <div className="bg-white rounded-2xl p-5 border border-blush-200 mb-8">
                <p className="font-dmsans text-xs uppercase tracking-widest text-softgray mb-3">ISBN Information</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-dmsans text-xs text-softgray">Paperback</span>
                    <span className="font-dmsans text-xs text-charcoal font-medium">978-1-83556-581-0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-dmsans text-xs text-softgray">Hardcover</span>
                    <span className="font-dmsans text-xs text-charcoal font-medium">978-1-83556-582-7</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-dmsans text-xs text-softgray">eBook</span>
                    <span className="font-dmsans text-xs text-charcoal font-medium">978-1-83556-583-4</span>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="group bg-rosegold text-white px-7 py-3.5 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rosegold/20 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={15} />
                  Available Now
                </a>
                <a
                  href="#"
                  className="group border border-rosegold text-rosegold px-7 py-3.5 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <BookOpen size={15} />
                  Read Preview
                </a>
              </div>
            </div>

            {/* Book Cover & Chapters - Right */}
            <div className="order-1 lg:order-2">
              <div className="flex justify-center mb-10">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-rosegold/20 to-blush-200 rounded-2xl blur-lg group-hover:opacity-80 transition-opacity" />
                  <div className="relative w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-rosegold/20 -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/assets/history-wildest-tales.webp"
                      alt="History's Wildest Tales for Curious Kids"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 288px, 320px"
                    />
                  </div>
                </div>
              </div>

              {/* Chapters Grid */}
              <div>
                <p className="font-dmsans text-xs uppercase tracking-widest text-softgray mb-4 text-center">Inside the Book — 10 Wild Chapters</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {historyChapters.map((chapter, i) => (
                    <div
                      key={chapter}
                      className="bg-white rounded-xl px-4 py-3 border border-blush-100 flex items-center gap-3 hover:border-rosegold/30 transition-colors"
                    >
                      <span className="w-6 h-6 bg-blush-100 text-rosegold text-xs font-dmsans font-bold rounded-full flex items-center justify-center flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="font-dmsans text-xs text-charcoal leading-snug">{chapter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl text-charcoal mb-4">
            Questions or <span className="text-rosegold italic">bulk orders?</span>
          </h2>
          <p className="font-dmsans text-base text-softgray mb-8">
            For school orders, book clubs, events, or any questions about the books — get in touch.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rosegold text-white px-8 py-4 rounded-full font-dmsans text-sm hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg group"
          >
            Contact Aeysha <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
