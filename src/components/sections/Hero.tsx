"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Phone, Shield, Star, CheckCircle, ArrowRight, Zap } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export default function Hero() {
  const particleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = particleRef.current;
    if (!el) return;
    // Create subtle floating particles
    for (let i = 0; i < 20; i++) {
      const dot = document.createElement("div");
      dot.className = "absolute w-1 h-1 rounded-full bg-amber-400/20";
      dot.style.left = Math.random() * 100 + "%";
      dot.style.top = Math.random() * 100 + "%";
      dot.style.animationDelay = Math.random() * 3 + "s";
      dot.style.animationDuration = 3 + Math.random() * 4 + "s";
      dot.classList.add("animate-float");
      el.appendChild(dot);
    }
  }, []);

  return (
    <section className="relative bg-slate-950 overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-slate-700/30 blur-3xl" />

      {/* Particles */}
      <div ref={particleRef} className="absolute inset-0 pointer-events-none" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              <Zap className="w-3.5 h-3.5" />
              Colchester&apos;s #1 Roof Inspection Specialists
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Expert Roof
              <br />
              <span className="text-gradient">Inspections</span>
              <br />
              <span className="text-white">in Colchester</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              Independent, professional roof inspections, surveys and drone assessments
              across Colchester and Essex. Detailed written reports delivered within 24 hours.
              Trusted by <strong className="text-white">{COMPANY.inspectionsCompleted.toLocaleString()}+</strong> homeowners and businesses.
            </p>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Fully Insured",
                "CAA Drone Approved",
                "24hr Reports",
                "From £149",
                "24/7 Emergency",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700"
                >
                  <CheckCircle className="w-3 h-3 text-amber-400" />
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={`tel:${COMPANY.phonePlain}`}
                className="flex items-center justify-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5 group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                {COMPANY.phone}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2.5 border-2 border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold text-base px-6 py-4 rounded-xl transition-all duration-200 group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Emergency line */}
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-slate-400">
                Emergency inspections available —{" "}
                <a
                  href={`tel:${COMPANY.phonePlain}`}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  call now for same-day response
                </a>
              </span>
            </div>
          </div>

          {/* Right - stats card */}
          <div className="relative">
            {/* Main card */}
            <div className="glass rounded-3xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { value: `${COMPANY.inspectionsCompleted.toLocaleString()}+`, label: "Inspections Completed", icon: CheckCircle },
                  { value: `${COMPANY.experience}yrs`, label: "Years Experience", icon: Shield },
                  { value: `${COMPANY.rating}/5`, label: "Customer Rating", icon: Star },
                  { value: "24hr", label: "Report Turnaround", icon: Zap },
                ].map(({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50"
                  >
                    <Icon className="w-5 h-5 text-amber-400 mb-2" />
                    <div className="text-2xl font-black text-white mb-1">{value}</div>
                    <div className="text-xs text-slate-400">{label}</div>
                  </div>
                ))}
              </div>

              {/* Recent review */}
              <div className="bg-slate-800/30 rounded-2xl p-4 border border-slate-700/30">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-slate-500 text-xs ml-2">Verified Google Review</span>
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  &ldquo;Incredibly thorough inspection. Found issues our surveyor missed during purchase.
                  The detailed report saved us thousands in unexpected repair costs.&rdquo;
                </p>
                <div className="mt-2 text-slate-500 text-xs">— Sarah T., Colchester homeowner</div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-2xl p-4 shadow-2xl shadow-amber-500/30">
              <div className="text-2xl font-black">24/7</div>
              <div className="text-xs font-semibold">Emergency</div>
            </div>
          </div>
        </div>

        {/* Service tags row */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <p className="text-slate-600 text-xs uppercase tracking-widest font-semibold mb-4">
            Services covering all roof types across Colchester & Essex
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Pitched Roof Inspections",
              "Flat Roof Surveys",
              "Tile & Slate Assessment",
              "Chimney Inspections",
              "Gutter Surveys",
              "Thermal Imaging",
              "Storm Damage Reports",
              "Moss & Algae Assessment",
              "Structural Roof Analysis",
              "Roof Leak Detection",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-slate-800 text-slate-600 hover:text-amber-400 hover:border-amber-500/30 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
