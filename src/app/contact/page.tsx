import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock, Shield, Star } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Contact A1 Roof Repairs Colchester — Book a Roof Inspection",
  description:
    "Contact A1 Roof Repairs Colchester to book a roof inspection or survey. Call 01206 123456 or submit an enquiry online. Emergency same-day response available.",
  path: "/contact",
});

export default function ContactPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact", url: "/contact" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Contact" }]} /></div>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Book Your Roof
              <span className="block text-gradient">Inspection</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Contact us to book a professional roof inspection or survey in Colchester
              and Essex. Free initial consultation — we&apos;ll recommend the right service for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Get in Touch</h2>

              <div className="space-y-5 mb-8">
                <a
                  href={`tel:${COMPANY.phonePlain}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-amber-50 border border-amber-200 hover:bg-amber-100 transition-colors group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Call Us</div>
                    <div className="text-amber-700 font-semibold text-lg">{COMPANY.phone}</div>
                    <div className="text-slate-500 text-xs">24/7 for emergencies</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Email Us</div>
                    <div className="text-slate-600 text-sm">{COMPANY.email}</div>
                    <div className="text-slate-400 text-xs">Response within 2 hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Service Area</div>
                    <div className="text-slate-600 text-sm">Colchester & Essex</div>
                    <div className="text-slate-400 text-xs">~30 mile radius from Colchester</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-slate-200 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-0.5">Office Hours</div>
                    <div className="text-slate-600 text-sm">{COMPANY.hours.weekdays}</div>
                    <div className="text-slate-600 text-sm">{COMPANY.hours.saturday}</div>
                    <div className="text-amber-600 text-xs font-semibold">{COMPANY.hours.sunday}</div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-slate-900 rounded-2xl p-5">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-slate-300 text-sm italic mb-2">
                  &ldquo;Called at 8am after storm damage, surveyor was with us by 11am. Professional, thorough and the report was perfect for our insurer.&rdquo;
                </p>
                <div className="text-slate-500 text-xs">— David K., Colchester</div>
                <div className="mt-3 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-slate-400 text-xs">{COMPANY.reviewCount}+ verified reviews</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h2 className="text-2xl font-black text-slate-900 mb-2">Request a Free Quote</h2>
              <p className="text-slate-500 text-sm mb-6">
                Fill in the form and we&apos;ll respond within 2 hours with a confirmed quote and
                available appointment slots.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
