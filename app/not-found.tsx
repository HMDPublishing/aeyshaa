import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-6">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blush-200/30 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rosegold/10 blur-3xl" />
      </div>

      <div className="relative text-center max-w-lg mx-auto">
        {/* Large 404 */}
        <p className="font-playfair text-[140px] md:text-[180px] leading-none text-rosegold/15 select-none font-bold mb-0">
          404
        </p>

        <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center mx-auto -mt-8 mb-8 border border-blush-200">
          <BookOpen size={20} className="text-rosegold" />
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4 leading-tight">
          Page Not <span className="text-rosegold italic">Found</span>
        </h1>

        <p className="font-dmsans text-base text-softgray leading-relaxed mb-10 max-w-sm mx-auto">
          Looks like this page wandered off like Tommy the cat. Let&apos;s get
          you back to somewhere familiar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="group bg-rosegold text-white px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rosegold/20 flex items-center justify-center gap-2"
          >
            Back to Home
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="/books"
            className="border-2 border-rosegold text-rosegold px-8 py-4 rounded-full font-dmsans text-sm tracking-wide hover:bg-rosegold hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
          >
            Explore My Books
          </Link>
        </div>
      </div>
    </div>
  );
}
