import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, Building2, Shield, Clock, FileText, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Roof Surveys Colchester — Industrial & Commercial Roof Inspections",
  description:
    "Professional commercial roof surveys in Colchester and Essex from £349. Flat roof inspections, condition reports and maintenance schedules for businesses and property managers.",
  path: "/commercial-roof-surveys",
  keywords: [
    "commercial roof survey colchester",
    "industrial roof inspection colchester",
    "flat roof survey essex",
    "commercial roof condition report",
    "planned maintenance roof survey essex",
  ],
});

const commercialServices = [
  { title: "Flat Roof Surveys", desc: "EPDM, TPO, felt and GRP flat roof assessment with ponding analysis, membrane condition and drainage evaluation." },
  { title: "Industrial Unit Roofs", desc: "Metal sheet, profiled steel and built-up roofing system inspection for warehouses, factories and commercial premises." },
  { title: "Retail & Office Buildings", desc: "Multi-section commercial roofs assessed for condition, water ingress risk and planned maintenance requirements." },
  { title: "Residential Blocks", desc: "Flat roof surveys for apartment blocks and communal areas, including service charge planning support." },
  { title: "Portfolio Surveys", desc: "Multiple property portfolio assessments with consistent reporting format for property managers and investors." },
  { title: "Pre-Acquisition Surveys", desc: "Commercial property purchase due diligence — detailed roof condition assessment before acquisition." },
];

const faqs = [
  {
    question: "What does a commercial roof survey include?",
    answer:
      "Commercial roof surveys include a comprehensive condition assessment of all roof coverings, drainage systems, rooflights and roof penetrations. We provide a condition grading, estimated remaining lifespan, priority maintenance schedule and approximate repair cost estimates. Drone surveys are included for large or complex commercial roofs.",
  },
  {
    question: "How often do commercial properties need roof surveys?",
    answer:
      "Commercial roofs should be surveyed annually as part of planned preventative maintenance. This protects the roof warranty, identifies developing issues early and provides documentation for insurance and lease purposes. Pre-acquisition surveys should be undertaken before any commercial property purchase.",
  },
  {
    question: "Can you survey multiple commercial properties?",
    answer:
      "Yes. We offer portfolio survey services for property managers and investors, surveying multiple commercial properties with consistent reporting format and combined condition overview. Discounted pricing is available for portfolio commissions.",
  },
  {
    question: "Do you provide reports for commercial lease purposes?",
    answer:
      "Yes. Our commercial roof survey reports are structured to meet requirements for lease-end dilapidations assessments, schedule of condition agreements and planned maintenance programmes. They are accepted by UK solicitors and property professionals.",
  },
];

export default function CommercialRoofSurveysPage() {
  const jsonLd = [
    serviceSchema("Commercial Roof Survey Colchester", "Professional commercial roof surveys in Colchester and Essex. Condition reports and maintenance schedules from £349.", "/commercial-roof-surveys", "349"),
    faqSchema(faqs),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Commercial Roof Surveys", url: "/commercial-roof-surveys" }]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Commercial Roof Surveys" }]} /></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-5">
                <Building2 className="w-3.5 h-3.5" />
                Commercial & Industrial Roof Surveys
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Commercial Roof
                <br />
                <span className="text-gradient">Surveys</span>
                <br />
                in Colchester
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Professional commercial roof surveys for businesses, property managers and
                investors across Colchester and Essex. Detailed condition reports,
                maintenance schedules and investment planning from qualified surveyors.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["From £349", "Portfolio Surveys", "Drone Included", "Insurance Reports", "Maintenance Plans"].map((tag) => (
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
                  Get Survey Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, label: "All Commercial Types", sub: "Flat, metal, industrial" },
                { icon: FileText, label: "Detailed Reports", sub: "Insurance & lease ready" },
                { icon: Shield, label: "Drone Surveys", sub: "Included for large roofs" },
                { icon: Clock, label: "Portfolio Discounts", sub: "Multiple properties" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                  <Icon className="w-6 h-6 text-amber-400 mb-3" />
                  <div className="font-bold text-white text-sm mb-0.5">{label}</div>
                  <div className="text-xs text-slate-400">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Commercial Roof Survey Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialServices.map(({ title, desc }) => (
              <div key={title} className="bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 transition-all duration-300">
                <Building2 className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Commercial Survey FAQs</h2>
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

      <CTABanner title="Need a Commercial Roof Survey in Colchester?" subtitle="Portfolio and single-property commercial roof surveys from £349. Contact us for a tailored quote." />
    </>
  );
}
