import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Shield, Star, CheckCircle } from "lucide-react";
import { COMPANY, SERVICE_AREAS } from "@/lib/utils";

const footerServices = [
  { label: "Roof Inspections", href: "/roof-inspections" },
  { label: "Roof Surveys", href: "/roof-surveys" },
  { label: "Drone Roof Inspections", href: "/drone-roof-inspections" },
  { label: "Homebuyer Roof Reports", href: "/homebuyer-roof-reports" },
  { label: "Commercial Roof Surveys", href: "/commercial-roof-surveys" },
  { label: "Emergency Inspections", href: "/emergency-roof-inspection" },
  { label: "Insurance Assessments", href: "/insurance-roof-assessments" },
  { label: "Roof Leak Investigation", href: "/roof-leak-investigation" },
];

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Trust strip */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Fully Insured", sub: "£5M public liability" },
              { icon: Star, label: `${COMPANY.rating}/5 Rated`, sub: `${COMPANY.reviewCount}+ verified reviews` },
              { icon: CheckCircle, label: "CAA Approved", sub: "Licensed drone operators" },
              { icon: Clock, label: "24/7 Emergency", sub: "Same-day response" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{label}</div>
                  <div className="text-xs text-slate-500">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">A1</span>
              </div>
              <div>
                <div className="font-black text-white text-lg leading-tight">A1 Roof Repairs</div>
                <div className="text-amber-400 text-xs font-semibold tracking-wide uppercase">Colchester • Essex</div>
              </div>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Colchester&apos;s most trusted roof inspection and survey specialists. Serving Essex homeowners and businesses since {COMPANY.founded} with independent, expert roof assessments.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY.phonePlain}`}
                className="flex items-center gap-3 group"
              >
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300 group-hover:text-amber-400 transition-colors font-medium">
                  {COMPANY.phone}
                </span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-300 group-hover:text-amber-400 transition-colors text-sm">
                  {COMPANY.email}
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-500 text-sm">
                  {COMPANY.address.city}, {COMPANY.address.county}, UK
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-500 text-sm">{COMPANY.hours.weekdays}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 group-hover:bg-amber-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-500 hover:text-amber-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-amber-500 group-hover:bg-amber-400 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
              Areas We Cover
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {SERVICE_AREAS.slice(0, 12).map((area) => (
                <Link
                  key={area}
                  href="/areas-we-cover"
                  className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 text-slate-400 hover:bg-amber-500/10 hover:text-amber-400 transition-colors border border-slate-700 hover:border-amber-500/30"
                >
                  {area}
                </Link>
              ))}
            </div>
            <Link
              href="/areas-we-cover"
              className="mt-3 text-sm text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center gap-1"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Serving Colchester & Essex.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-slate-600 hover:text-amber-400 text-xs transition-colors">Privacy</Link>
            <Link href="/terms" className="text-slate-600 hover:text-amber-400 text-xs transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-slate-600 hover:text-amber-400 text-xs transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
