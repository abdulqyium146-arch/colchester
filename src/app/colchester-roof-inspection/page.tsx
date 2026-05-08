import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, MapPin, Star, Shield, Clock, Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Roof Inspection Colchester CO1–CO6 — Local Expert Roof Surveyors",
  description:
    "Expert roof inspections in Colchester CO1–CO6. Local surveyors serving all Colchester postcodes. Professional assessments from £149 with 24hr reports. Call 01206 123456.",
  path: "/colchester-roof-inspection",
  keywords: [
    "roof inspection colchester co1",
    "colchester roof surveyor",
    "roof inspection colchester town centre",
    "local roof inspector colchester",
    "roof survey co2 co3 co4",
  ],
});

const colchesterAreas = [
  "Colchester Town Centre (CO1)",
  "Lexden & West Colchester (CO3)",
  "Greenstead & East Colchester (CO2)",
  "Mile End & North Colchester (CO4)",
  "Wivenhoe & River Colne",
  "Stanway & Tollgate",
  "Shrub End & Berechurch",
  "Mersea Road & Old Heath",
  "West Bergholt & Boxted",
  "Copford & Marks Tey",
  "Tiptree & Layer de la Haye",
  "Eight Ash Green",
];

const colchesterRoofTypes = [
  { type: "Victorian & Edwardian Terraces", desc: "Colchester town centre is rich with Victorian and Edwardian properties with original slate and clay tile roofs requiring specialist inspection knowledge." },
  { type: "1930s–1970s Semi-Detached", desc: "The most common property type across Colchester — concrete tile roofs often reaching the end of their serviceable life and requiring detailed assessment." },
  { type: "Modern New Build", desc: "Newer Colchester developments including Stanway and Lexden estates with concrete or clay plain tiles, often within NHBC warranty periods." },
  { type: "Flat Roof Extensions & Garages", desc: "Single-storey extensions and garages across all Colchester postcodes — felt, GRP and EPDM flat roofs requiring regular condition assessment." },
  { type: "Commercial High Street", desc: "Colchester High Street and commercial districts with mixed flat and pitched roof commercial properties requiring business-appropriate survey reports." },
];

const localFAQs = [
  {
    question: "Which parts of Colchester do you cover for roof inspections?",
    answer: "We cover all Colchester postcodes including CO1 (Town Centre), CO2 (Greenstead, East Colchester), CO3 (Lexden, Shrub End), CO4 (Mile End, Highwoods) and CO6 (West Colchester, Marks Tey area). We also cover surrounding villages including Wivenhoe, Stanway, Copford and West Bergholt.",
  },
  {
    question: "How quickly can you carry out a roof inspection in Colchester?",
    answer: "Being based in Colchester, we can typically attend within 24–48 hours for standard inspections. For emergency situations — storm damage, active leaks or urgent structural concerns — we aim for same-day attendance within 2–4 hours of your call.",
  },
  {
    question: "Do you know the typical roof problems in Colchester properties?",
    answer: "Yes. Our surveyors have inspected thousands of Colchester properties and know the common issues by property type and age. Victorian and Edwardian properties in the town centre often have nail sickness in slate roofs. 1970s–80s properties frequently have reaching-end-of-life concrete tiles. Modern estates may have ventilation issues. We know what to look for.",
  },
  {
    question: "What is the cost of a roof inspection in Colchester?",
    answer: "Standard residential roof inspections in Colchester start from £149 including a comprehensive written report with photographs. Homebuyer reports and drone surveys from £199. Emergency inspections from £199. Commercial surveys from £349. All Colchester inspections are competitively priced as our local base eliminates travel costs.",
  },
];

export default function ColchesterRoofInspectionPage() {
  const jsonLd = [
    localBusinessSchema(),
    faqSchema(localFAQs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Colchester Roof Inspection", url: "/colchester-roof-inspection" },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs items={[{ label: "Colchester Roof Inspection" }]} />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
                <MapPin className="w-3.5 h-3.5" />
                Local Roof Inspectors — Colchester, Essex
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Roof Inspection
                <br />
                <span className="text-gradient">Colchester</span>
                <br />
                <span className="text-slate-300 text-3xl">CO1 — CO6</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Colchester&apos;s home-based roof inspection specialists. Faster response,
                deeper local knowledge and more competitive pricing than any out-of-town
                surveyor. We know Colchester&apos;s properties — and their roof problems.
              </p>

              {/* Local advantage points */}
              <div className="space-y-3 mb-8">
                {[
                  "Based in Colchester — fastest local response",
                  `${COMPANY.experience}+ years inspecting Colchester properties`,
                  "Know all Colchester postcodes and property types",
                  "No travel surcharge — competitive local pricing",
                  `${COMPANY.reviewCount}+ verified Colchester reviews`,
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-sm">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={`tel:${COMPANY.phonePlain}`} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all">
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
                <Link href="/contact" className="flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all">
                  Book Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-white font-bold ml-2">{COMPANY.rating}/5</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">Colchester Areas We Cover</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {colchesterAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-slate-300 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-slate-700">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span className="text-slate-400 text-xs">Fully insured • CAA approved • {COMPANY.reviewCount}+ reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colchester property types */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Colchester Property Types
              <span className="block text-gradient">We Inspect</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Colchester has one of the most diverse property stocks in Essex — from
              Roman-era buildings to modern estates. Our surveyors know every roof type.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {colchesterRoofTypes.map(({ type, desc }) => (
              <div key={type} className="bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{type}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO content */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-6">
            Why Choose a Local Colchester Roof Inspector?
          </h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed mb-4">
              Colchester is one of Britain&apos;s oldest recorded towns, with a property stock
              that spans Roman times to present day. The roof inspection challenges of a
              Victorian terrace in the town centre are fundamentally different from those
              of a modern executive home in Stanway.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              As a Colchester-based company, we understand the local property market,
              common building materials used in different eras, typical failure patterns
              and the specific weather challenges that affect Essex roofs — including
              the coastal influence, clay soil movement and the cold north-easterly
              winds that batter properties in this part of England.
            </p>
            <p className="text-slate-600 leading-relaxed">
              When you book a roof inspection with A1 Roof Repairs Colchester, you get
              a surveyor who knows your local area — not someone driving two hours from
              another county to carry out a generic assessment.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Local FAQs</h2>
            <div className="space-y-4">
              {localFAQs.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Book a Colchester Roof Inspection Today"
        subtitle="Local surveyors, same-day emergency response. From £149 with 24hr written report."
        variant="amber"
      />
    </>
  );
}
