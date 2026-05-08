import Link from "next/link";
import { Home, Phone, Search } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export default function NotFound() {
  return (
    <section className="bg-slate-950 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-8xl font-black text-amber-500 mb-4">404</div>
        <h1 className="text-3xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-slate-400 text-lg mb-8">
          This page doesn&apos;t exist, but our roof inspections definitely do.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
          >
            <Home className="w-4 h-4" />
            Go to Homepage
          </Link>
          <a
            href={`tel:${COMPANY.phonePlain}`}
            className="flex items-center justify-center gap-2 border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
        </div>
        <div className="mt-10">
          <p className="text-slate-500 text-sm mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "Roof Inspections", href: "/roof-inspections" },
              { label: "Drone Surveys", href: "/drone-roof-inspections" },
              { label: "Homebuyer Reports", href: "/homebuyer-roof-reports" },
              { label: "Emergency Inspection", href: "/emergency-roof-inspection" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm px-4 py-2 rounded-xl border border-slate-700 text-slate-400 hover:text-amber-400 hover:border-amber-500 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
