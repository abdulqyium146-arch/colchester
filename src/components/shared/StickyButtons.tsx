"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, ArrowUp } from "lucide-react";
import { COMPANY } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function StickyButtons() {
  const [visible, setVisible] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={cn(
        "fixed right-4 sm:right-6 bottom-6 z-40 flex flex-col items-end gap-3 transition-all duration-500",
        visible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      )}
    >
      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-lg hover:bg-slate-700 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Get Quote */}
      <Link
        href="/contact"
        className="flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-200 hover:scale-105 group"
      >
        <MessageSquare className="w-4 h-4 text-amber-400" />
        <span className="text-sm font-semibold hidden sm:block">Get Free Quote</span>
      </Link>

      {/* Phone CTA */}
      <a
        href={`tel:${COMPANY.phonePlain}`}
        className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-white px-4 py-3 rounded-full shadow-2xl shadow-amber-200 transition-all duration-200 hover:scale-105 animate-pulse-amber"
        aria-label="Call us now"
      >
        <Phone className="w-4 h-4" />
        <span className="text-sm font-semibold hidden sm:block">{COMPANY.phone}</span>
      </a>
    </div>
  );
}
