"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const subjects = [
  "General Inquiry",
  "Book Collaboration",
  "Publishing Services",
  "Speaking & Events",
  "Media & Press",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Unable to send message. Please check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-rosegold/5 border border-blush-100 flex flex-col items-center justify-center text-center min-h-[400px]">
        <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-rosegold" />
        </div>
        <h3 className="font-playfair text-2xl text-charcoal mb-3">Message Sent!</h3>
        <p className="font-dmsans text-sm text-softgray leading-relaxed max-w-sm mb-6">
          Thank you for reaching out. Aeysha will get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-dmsans text-sm text-rosegold border-b border-rosegold/30 hover:border-rosegold transition-colors pb-0.5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-rosegold/5 border border-blush-100">
      <h3 className="font-playfair text-2xl text-charcoal mb-2">Send a Message</h3>
      <p className="font-dmsans text-sm text-softgray mb-8">
        Fill out the form below and Aeysha will get back to you within 2–3 business days.
      </p>

      {status === "error" && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-2xl px-4 py-3 mb-5">
          <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
          <p className="font-dmsans text-sm text-red-600">{errorMsg}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="font-dmsans text-xs uppercase tracking-widest text-softgray block mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              className="w-full px-5 py-3.5 rounded-2xl border border-blush-200 font-dmsans text-sm text-charcoal placeholder:text-softgray/40 focus:outline-none focus:border-rosegold bg-offwhite transition-colors"
            />
          </div>
          <div>
            <label className="font-dmsans text-xs uppercase tracking-widest text-softgray block mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
              className="w-full px-5 py-3.5 rounded-2xl border border-blush-200 font-dmsans text-sm text-charcoal placeholder:text-softgray/40 focus:outline-none focus:border-rosegold bg-offwhite transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="font-dmsans text-xs uppercase tracking-widest text-softgray block mb-2">
            Subject
          </label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full px-5 py-3.5 rounded-2xl border border-blush-200 font-dmsans text-sm text-charcoal focus:outline-none focus:border-rosegold bg-offwhite transition-colors appearance-none cursor-pointer"
          >
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-dmsans text-xs uppercase tracking-widest text-softgray block mb-2">
            Your Message *
          </label>
          <textarea
            name="message"
            required
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell Aeysha what's on your mind..."
            className="w-full px-5 py-3.5 rounded-2xl border border-blush-200 font-dmsans text-sm text-charcoal placeholder:text-softgray/40 focus:outline-none focus:border-rosegold bg-offwhite transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full bg-rosegold text-white py-4 rounded-2xl font-dmsans text-sm tracking-wide hover:bg-rosegold-dark transition-all duration-300 hover:shadow-lg hover:shadow-rosegold/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send size={16} />
              Send Message
            </>
          )}
        </button>

        <p className="font-dmsans text-xs text-softgray/60 text-center">
          Your information is kept private and never shared.
        </p>
      </form>
    </div>
  );
}
