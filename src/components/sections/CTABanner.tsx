import Link from "next/link";
import { Phone, ArrowRight, Clock } from "lucide-react";
import { COMPANY } from "@/lib/utils";

interface CTABannerProps {
  variant?: "dark" | "amber" | "light";
  title?: string;
  subtitle?: string;
  showEmergency?: boolean;
}

export default function CTABanner({
  variant = "dark",
  title = "Ready for Your Roof Inspection?",
  subtitle = "Professional roof inspections from £149. Written report within 24 hours. Serving Colchester and all of Essex.",
  showEmergency = true,
}: CTABannerProps) {
  const isDark = variant === "dark";
  const isAmber = variant === "amber";

  return (
    <section
      className={`py-16 lg:py-20 ${
        isDark
          ? "bg-slate-900"
          : isAmber
          ? "bg-amber-500"
          : "bg-slate-50 border-y border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            {showEmergency && (
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className={`text-sm font-medium ${isDark ? "text-slate-400" : isAmber ? "text-amber-100" : "text-slate-500"}`}>
                  Available Now — 24/7 Emergency Response
                </span>
              </div>
            )}
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-3 tracking-tight ${
                isDark ? "text-white" : isAmber ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-lg max-w-xl ${
                isDark ? "text-slate-400" : isAmber ? "text-amber-100" : "text-slate-600"
              }`}
            >
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={`tel:${COMPANY.phonePlain}`}
              className={`flex items-center justify-center gap-2.5 font-bold px-6 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                isDark
                  ? "bg-amber-500 hover:bg-amber-600 text-white hover:shadow-2xl hover:shadow-amber-500/30"
                  : isAmber
                  ? "bg-white text-amber-700 hover:bg-amber-50"
                  : "bg-slate-900 text-white hover:bg-slate-800"
              }`}
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className={`flex items-center justify-center gap-2.5 font-semibold px-6 py-4 rounded-xl transition-all duration-200 border-2 group ${
                isDark
                  ? "border-slate-700 text-white hover:border-amber-500 hover:text-amber-400"
                  : isAmber
                  ? "border-amber-300 text-white hover:border-white"
                  : "border-slate-200 text-slate-700 hover:border-amber-300 hover:text-amber-600"
              }`}
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {showEmergency && (
          <div
            className={`mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-center gap-6 text-sm ${
              isDark ? "border-slate-800 text-slate-500" : isAmber ? "border-amber-400 text-amber-100" : "border-slate-200 text-slate-400"
            }`}
          >
            {[
              { icon: Clock, text: "Same-day emergency inspections" },
              { icon: Phone, text: "Free initial phone consultation" },
              { icon: ArrowRight, text: "Reports within 24 hours" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${isDark ? "text-amber-500" : isAmber ? "text-amber-200" : "text-amber-500"}`} />
                {text}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
