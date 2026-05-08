"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X, Shield, Star } from "lucide-react";
import { COMPANY } from "@/lib/utils";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Roof Inspections", href: "/roof-inspections" },
      { label: "Roof Surveys", href: "/roof-surveys" },
      { label: "Drone Roof Inspections", href: "/drone-roof-inspections" },
      { label: "Homebuyer Roof Reports", href: "/homebuyer-roof-reports" },
      { label: "Commercial Roof Surveys", href: "/commercial-roof-surveys" },
      { label: "Emergency Roof Inspection", href: "/emergency-roof-inspection" },
      { label: "Insurance Roof Assessments", href: "/insurance-roof-assessments" },
      { label: "Roof Leak Investigation", href: "/roof-leak-investigation" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="bg-slate-900 text-slate-300 text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{COMPANY.rating}/5 — {COMPANY.reviewCount} verified reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Fully insured & CAA approved drone operators</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <Phone className="w-3.5 h-3.5" />
            <a href={`tel:${COMPANY.phonePlain}`} className="hover:text-amber-300 transition-colors">
              {COMPANY.phone}
            </a>
            <span className="text-slate-500 mx-1">—</span>
            <span className="text-slate-300 font-normal">24/7 Emergency Response</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100"
            : "bg-white shadow-sm border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                <span className="text-white font-black text-lg">A1</span>
              </div>
              <div className="hidden sm:block">
                <div className="font-black text-slate-900 text-lg leading-tight">
                  A1 Roof Repairs
                </div>
                <div className="text-amber-600 text-xs font-semibold tracking-wide uppercase">
                  Colchester • Essex
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>

                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                              pathname === child.href
                                ? "bg-amber-50 text-amber-700"
                                : "text-slate-700 hover:bg-slate-50 hover:text-amber-600"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-amber-600 bg-amber-50"
                        : "text-slate-600 hover:text-amber-600 hover:bg-amber-50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phonePlain}`}
                className="hidden md:flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{COMPANY.phone}</span>
              </a>
              <Link
                href="/contact"
                className="hidden sm:flex bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-200 items-center gap-2"
              >
                Get Free Quote
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white">
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setMobileServices(!mobileServices)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          mobileServices && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileServices && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-amber-200 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm font-semibold transition-colors",
                      pathname === item.href
                        ? "bg-amber-50 text-amber-600"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <a
                  href={`tel:${COMPANY.phonePlain}`}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  {COMPANY.phone}
                </a>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 rounded-xl bg-amber-500 text-white font-semibold text-sm"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
