"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    author: "Sarah Thompson",
    location: "Colchester",
    service: "Homebuyer Roof Report",
    rating: 5,
    date: "March 2025",
    text: "Absolutely worth every penny. A1 found a serious issue with the chimney stack and lead flashing that would have cost us over £4,000 to fix — we had no idea. The report was incredibly detailed with clear photographs and plain English explanations. We used it to successfully negotiate £3,500 off the purchase price.",
    verified: true,
  },
  {
    id: 2,
    author: "James Hadley",
    location: "Chelmsford",
    service: "Commercial Roof Survey",
    rating: 5,
    date: "February 2025",
    text: "We manage several commercial properties across Essex and use A1 Roof Repairs for all our annual roof surveys. Consistent quality, detailed reports and they always highlight issues in order of priority. The drone surveys have been particularly valuable for our larger industrial units.",
    verified: true,
  },
  {
    id: 3,
    author: "Patricia Moore",
    location: "Braintree",
    service: "Drone Roof Inspection",
    rating: 5,
    date: "January 2025",
    text: "Incredible technology — the drone footage showed us exactly what was going on with our roof tiles without anyone having to climb up. The inspector was professional, thorough and explained everything clearly. Report came through the very next morning. Highly recommended.",
    verified: true,
  },
  {
    id: 4,
    author: "Robert Clarke",
    location: "Colchester",
    service: "Emergency Roof Inspection",
    rating: 5,
    date: "December 2024",
    text: "Called A1 after storm damage left tiles missing and water coming through the ceiling. They were there within hours, made a proper assessment, provided a detailed emergency report for our insurance claim and gave us brilliant advice on securing the roof overnight. Exceptional service under pressure.",
    verified: true,
  },
  {
    id: 5,
    author: "Helen Watkins",
    location: "Clacton-on-Sea",
    service: "Roof Inspection",
    rating: 5,
    date: "November 2024",
    text: "Used A1 after getting wildly varying quotes from local roofers. Their independent inspection told us exactly what needed doing — turns out one quote was for unnecessary work. Saved us over £2,000. I&apos;ll never get roofing work done without an independent inspection first.",
    verified: true,
  },
  {
    id: 6,
    author: "David Simmons",
    location: "Witham",
    service: "Insurance Roof Assessment",
    rating: 5,
    date: "October 2024",
    text: "My insurer was disputing our storm damage claim. A1&apos;s independent assessment report was exactly what we needed — professionally written, clearly evidenced and accepted by the insurer without question. Claim settled in full within two weeks of submitting the report.",
    verified: true,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const max = testimonials.length - visible;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section className="bg-slate-50 py-20 lg:py-28" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
              Customer Reviews
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What Our Clients Say
              <br />
              <span className="text-gradient">About Their Inspection</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-4xl font-black text-slate-900">4.9</div>
              <div className="flex gap-0.5 justify-end my-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-sm text-slate-500">347 verified reviews</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
              <button
                onClick={next}
                disabled={current >= max}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {testimonials.slice(current, current + visible).map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-8 h-8 text-amber-100" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-slate-500 text-xs">{t.location} • {t.service}</div>
                </div>
                <div className="text-right">
                  {t.verified && (
                    <span className="text-green-600 text-xs font-semibold block">✓ Verified</span>
                  )}
                  <span className="text-slate-400 text-xs">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-amber-500 w-6" : "bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
          <p className="text-slate-700 font-semibold mb-2">
            Join hundreds of satisfied clients across Colchester and Essex
          </p>
          <p className="text-slate-500 text-sm mb-4">
            Independent roof inspections from £149 — written report delivered within 24 hours
          </p>
          <a
            href="tel:+443335675656"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Book Your Inspection Today
          </a>
        </div>
      </div>
    </section>
  );
}
