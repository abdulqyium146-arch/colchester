import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, Plane, Camera, Shield, Zap, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Drone Roof Inspections Colchester — CAA Licensed Aerial Surveys",
  description:
    "CAA-approved drone roof inspections in Colchester from £199. High-resolution 4K aerial surveys for safe, detailed assessment of all roof types. Written report with footage included.",
  path: "/drone-roof-inspections",
  keywords: [
    "drone roof inspection colchester",
    "aerial roof survey essex",
    "drone roof survey colchester",
    "caa drone inspection colchester",
    "roof drone survey essex",
  ],
});

const droneAdvantages = [
  { title: "Total Safety", desc: "No ladders or scaffolding required. The drone reaches every area of your roof safely — ideal for difficult or dangerous access situations." },
  { title: "4K Imagery", desc: "Ultra-high-definition footage and still images capture fine detail invisible from ground level, including hairline cracks and minor slippage." },
  { title: "Complete Coverage", desc: "The drone can access ridges, valleys, chimney stacks and flat roof areas that physical inspection may miss or struggle to reach." },
  { title: "CAA Licensed", desc: "All our drone pilots hold CAA Operational Authorisation, ensuring legal compliance and appropriate insurance for every survey." },
  { title: "Footage Included", desc: "You receive the raw footage alongside our written report, providing permanent visual evidence of your roof's condition." },
  { title: "Speed", desc: "Drone surveys are often faster than ladder-based inspections on larger or complex properties, reducing the time we spend on-site." },
];

const faqs = [
  {
    question: "What is a drone roof inspection?",
    answer:
      "A drone roof inspection uses a remotely piloted aircraft (drone) equipped with a high-resolution camera to capture detailed aerial footage and photographs of your roof. A qualified surveyor analyses the imagery to produce a detailed condition report. This technology allows safe inspection of all roof areas without ladders or scaffolding.",
  },
  {
    question: "How much does a drone roof inspection cost in Colchester?",
    answer:
      "Our drone roof inspections in Colchester and Essex start from £199, which includes the on-site drone survey, analysis of all footage and a comprehensive written report with annotated photographs and video clips.",
  },
  {
    question: "Are your drone operators licensed?",
    answer:
      "Yes. All A1 Roof Repairs drone operators hold current CAA Operational Authorisation and appropriate liability insurance for all survey operations. We operate fully within CAA regulations at all times.",
  },
  {
    question: "When is a drone inspection better than a standard inspection?",
    answer:
      "Drone inspections are particularly valuable for: multi-storey properties, large commercial roofs, buildings where ladder access is impractical or unsafe, properties with complex roof geometry, and situations where scaffolding would be prohibitively expensive. They also capture evidence useful for insurance and legal purposes.",
  },
  {
    question: "Can drones fly in all weather conditions?",
    answer:
      "Drone flights require suitable weather conditions — generally wind speeds below 20mph and no precipitation. If weather conditions prevent the drone flight on the day of your survey, we will use alternative inspection methods and reschedule the drone element at no additional cost.",
  },
];

export default function DroneRoofInspectionsPage() {
  const jsonLd = [
    serviceSchema(
      "Drone Roof Inspection Colchester",
      "CAA-approved drone roof surveys in Colchester and Essex. High-resolution 4K aerial inspection with written report from £199.",
      "/drone-roof-inspections",
      "199"
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Drone Roof Inspections", url: "/drone-roof-inspections" },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs items={[{ label: "Drone Roof Inspections" }]} />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-5">
                <Plane className="w-3.5 h-3.5" />
                CAA Licensed Drone Surveys
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Drone Roof
                <br />
                <span className="text-gradient">Inspections</span>
                <br />
                in Colchester
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Safe, detailed and comprehensive aerial roof surveys using CAA-licensed
                drones. 4K footage and high-resolution imagery reveals every defect
                without ladders, scaffolding or risk. Written report included.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["From £199", "CAA Licensed", "4K Footage", "Written Report", "No Scaffolding"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium">
                    <CheckCircle className="w-3 h-3 text-amber-400" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="tel:+443335675656" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all">
                  <Phone className="w-4 h-4" />
                  +44 333 567 5656
                </a>
                <Link href="/contact" className="flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all">
                  Book Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual block */}
            <div className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
              <Plane className="w-20 h-20 text-blue-400 mx-auto mb-6 animate-float" />
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Camera, label: "4K Video & Photos" },
                  { icon: Shield, label: "CAA Authorised" },
                  { icon: Zap, label: "Same Day Available" },
                  { icon: CheckCircle, label: "Fully Insured" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="bg-slate-700 rounded-xl p-3 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-slate-300 text-xs font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Why Choose a Drone Roof Survey?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Drone technology provides a safer, faster and more comprehensive roof inspection
              experience — particularly for larger, taller or more complex properties.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {droneAdvantages.map(({ title, desc }) => (
              <div key={title} className="bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                  <Plane className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">
            Drone Survey FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Book a Drone Roof Inspection in Colchester"
        subtitle="CAA-licensed drone surveys from £199. Written report with 4K footage. Available across Colchester and Essex."
      />
    </>
  );
}
