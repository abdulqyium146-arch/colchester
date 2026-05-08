import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { CheckCircle, AlertTriangle, Phone, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Emergency Roof Inspection Colchester — Same-Day Emergency Roof Surveys",
  description:
    "24/7 emergency roof inspections in Colchester. Same-day response for storm damage, leaks and urgent roof failures. Call +44 333 567 5656 now.",
  path: "/emergency-roof-inspection",
  keywords: [
    "emergency roof inspection colchester",
    "emergency roof survey essex",
    "urgent roof inspection colchester",
    "storm damage roof inspection colchester",
    "same day roof inspection essex",
  ],
});

const emergencyTypes = [
  { icon: AlertTriangle, title: "Storm Damage", desc: "High winds can displace tiles, damage flashings and lift ridge sections. We assess and document all storm damage promptly." },
  { icon: AlertTriangle, title: "Active Roof Leaks", desc: "Water ingress causing property damage requires urgent assessment to locate the source and prevent further damage." },
  { icon: AlertTriangle, title: "Fallen Trees or Debris", desc: "Impact damage from trees or falling objects requires immediate structural assessment before the property is occupied." },
  { icon: AlertTriangle, title: "Missing or Displaced Tiles", desc: "A missing tile exposes the roof deck to weather — requiring emergency documentation and temporary weatherproofing advice." },
  { icon: AlertTriangle, title: "Chimney Collapse Risk", desc: "Unstable chimney stacks pose serious safety risk. Emergency inspection and structural assessment carried out immediately." },
  { icon: AlertTriangle, title: "Insurance Emergency Claims", desc: "We produce emergency inspection reports suitable for immediate submission to your insurer to begin the claims process." },
];

const faqs = [
  {
    question: "How quickly can you attend an emergency roof inspection in Colchester?",
    answer:
      "For genuine emergencies such as storm damage with active water ingress or structural concerns, we aim to attend within 2–4 hours of your call during business hours, and within a few hours for out-of-hours emergencies. Call +44 333 567 5656 immediately.",
  },
  {
    question: "What counts as an emergency roof inspection?",
    answer:
      "Emergency roof inspections are appropriate when there is active water ingress, visible structural damage, displaced tiles leaving the roof exposed, fallen trees or debris on the roof, or any situation where immediate professional assessment is needed to ensure safety or prevent escalating damage.",
  },
  {
    question: "Does my insurance cover emergency roof inspections?",
    answer:
      "Many home insurance policies cover emergency inspection costs, particularly when damage is caused by storm, impact or sudden events. Our reports are professional documents accepted by all major UK insurers. We can advise on the best way to document your claim.",
  },
  {
    question: "Can you provide a report for an emergency insurance claim on the same day?",
    answer:
      "Yes. For genuine emergencies, we can produce a preliminary digital report on the day of inspection, suitable for immediate submission to your insurer. A full detailed report follows within 24 hours.",
  },
];

export default function EmergencyRoofInspectionPage() {
  const jsonLd = [
    serviceSchema("Emergency Roof Inspection Colchester", "24/7 same-day emergency roof inspections in Colchester and Essex. Storm damage, leaks and urgent structural assessments.", "/emergency-roof-inspection", "199"),
    faqSchema(faqs),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Emergency Roof Inspection", url: "/emergency-roof-inspection" }]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Emergency hero */}
      <section className="bg-red-950 pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-red-500" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Emergency Roof Inspection" }]} /></div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-bold mb-5 animate-pulse-amber">
              <Zap className="w-3.5 h-3.5" />
              24/7 Emergency Response — Same Day Available
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
              Emergency Roof
              <br />
              <span className="text-red-400">Inspection</span>
              <br />
              Colchester
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Storm damage? Active roof leak? Structural concern? Call us immediately.
              We provide same-day emergency roof inspections across Colchester and Essex
              with reports for insurance claims.
            </p>

            {/* BIG CALL TO ACTION */}
            <a
              href="tel:+443335675656"
              className="inline-flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-black text-xl px-8 py-5 rounded-2xl transition-all hover:shadow-2xl hover:shadow-red-500/30 hover:-translate-y-1 mb-4"
            >
              <Phone className="w-6 h-6" />
              +44 333 567 5656
            </a>
            <p className="text-slate-400 text-sm">Available 24 hours a day, 7 days a week</p>
          </div>
        </div>
      </section>

      {/* Emergency types */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Emergency Situations We Cover
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyTypes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <Icon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
              Emergency Inspection Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", icon: Phone, title: "Call Immediately", desc: "Call +44 333 567 5656. We assess urgency and dispatch the nearest available surveyor." },
              { step: "2", icon: Clock, title: "Fast Attendance", desc: "Surveyor attends within 2–4 hours. Structural safety assessed first." },
              { step: "3", icon: AlertTriangle, title: "Full Assessment", desc: "Comprehensive inspection documenting all damage with photographs and measurements." },
              { step: "4", icon: Shield, title: "Report & Advice", desc: "Emergency report produced same-day. Insurance-ready documentation and next-step advice." },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-white font-black text-lg flex items-center justify-center mx-auto mb-4">
                  {step}
                </div>
                <Icon className="w-6 h-6 text-slate-400 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Emergency Inspection FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Roof Emergency in Colchester?"
        subtitle="Call immediately for same-day emergency roof inspection. Available 24/7 across Colchester and Essex."
        variant="dark"
        showEmergency
      />
    </>
  );
}
