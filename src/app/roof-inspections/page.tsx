import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import FAQSection from "@/components/sections/FAQSection";
import {
  CheckCircle, Search, FileText, Clock, Shield, Star,
  AlertTriangle, Eye, Wrench, Camera, ArrowRight, Phone
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Roof Inspections Colchester — Professional Roof Inspection Service",
  description:
    "Professional roof inspections in Colchester from £149. Qualified surveyors assess all roof types — tiles, slate, flat roofs, chimneys and gutters. Written report within 24 hours.",
  path: "/roof-inspections",
  keywords: [
    "roof inspection colchester",
    "roof inspector colchester",
    "professional roof inspection essex",
    "roof condition report colchester",
    "tile roof inspection colchester",
    "slate roof inspection essex",
  ],
});

const inspectionIncludes = [
  "Tile, slate and flat roof membrane assessment",
  "Ridge, hip and valley tile inspection",
  "Lead and mortar flashing condition",
  "Chimney stack and pot inspection",
  "Gutter, downpipe and fascia assessment",
  "Soffit and bargeboard condition",
  "Verge and eaves inspection",
  "Visible loft space assessment",
  "Moss, lichen and algae evaluation",
  "Structural movement indicators",
  "Water ingress signs and staining",
  "Ventilation adequacy assessment",
];

const roofTypes = [
  {
    type: "Pitched Tile Roof",
    description:
      "Concrete or clay tile roofs assessed for cracking, slippage, mortar failure and underlay condition.",
  },
  {
    type: "Natural Slate Roof",
    description:
      "Slate inspection covering nail sickness, delamination, fractures and pointing condition.",
  },
  {
    type: "Flat Roof",
    description:
      "Felt, GRP, EPDM and TPO membrane assessment including surface condition, drainage and joints.",
  },
  {
    type: "Tiled Hip Roof",
    description:
      "Hip tile security, mortar bedding integrity and underlying structure inspection.",
  },
  {
    type: "Victorian & Edwardian Roofs",
    description:
      "Specialist assessment of period properties including clay ridge tiles and original slates.",
  },
  {
    type: "Garage & Extension Roofs",
    description:
      "Single-storey and extension roof inspection including felt, sheet metal and GRP surfaces.",
  },
];

const faqs = [
  {
    question: "What is included in a roof inspection in Colchester?",
    answer:
      "A professional roof inspection covers all visible roof surfaces including tiles, slates, ridges, hips, valleys, flashings (lead and mortar), chimney stacks, gutters, downpipes, soffits, fascias, bargeboards and any accessible loft or roof space. You receive a detailed written report with annotated photographs within 24 hours.",
  },
  {
    question: "How often should I have my roof inspected?",
    answer:
      "We recommend a professional roof inspection every 3–5 years for properties under 20 years old, and annually for older properties or those with known issues. An inspection after major storms is also advisable. Early identification of defects prevents costly emergency repairs.",
  },
  {
    question: "Can you inspect a roof without scaffolding?",
    answer:
      "Yes. Our surveyors use long ladder access, specialist inspection cameras and — where necessary — our CAA-approved drone to inspect all roof areas safely without the need for scaffolding. This keeps costs low and minimises disruption to your property.",
  },
  {
    question: "How long does a residential roof inspection take?",
    answer:
      "Most residential roof inspections take 1–2 hours on-site depending on property size and roof complexity. Your written report is compiled afterwards and delivered digitally within 24 hours of the survey.",
  },
  {
    question: "What is the difference between a roof inspection and a roof survey?",
    answer:
      "A roof inspection is a thorough visual assessment identifying current defects and their severity. A full roof survey goes deeper — assessing structural integrity, estimating remaining lifespan, providing repair cost estimates and a planned maintenance schedule. Both include written reports with photographs.",
  },
];

export default function RoofInspectionsPage() {
  const jsonLd = [
    serviceSchema(
      "Roof Inspection Colchester",
      "Professional roof inspection service in Colchester and Essex. Comprehensive visual assessment with written report from qualified surveyors.",
      "/roof-inspections",
      "149"
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Roof Inspections", url: "/roof-inspections" },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs
              items={[{ label: "Roof Inspections" }]}
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
                Professional Roof Inspections — Colchester
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Expert Roof
                <br />
                <span className="text-gradient">Inspections</span>
                <br />
                in Colchester
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Comprehensive, independent roof inspections covering all roof types across
                Colchester and Essex. Our qualified surveyors identify every defect, risk
                and maintenance need — with a detailed written report delivered within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["From £149", "24hr Report", "All Roof Types", "Fully Insured", "Independent"].map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-medium">
                    <CheckCircle className="w-3 h-3 text-amber-400" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href="tel:01206123456"
                  className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-amber-500/30"
                >
                  <Phone className="w-4 h-4" />
                  01206 123456
                </a>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all"
                >
                  Book Online
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Search, value: "3,500+", label: "Inspections completed" },
                { icon: Star, value: "4.9/5", label: "Customer rating" },
                { icon: Clock, value: "24hrs", label: "Report turnaround" },
                { icon: Shield, value: "£5M", label: "Public liability" },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
                  <Icon className="w-6 h-6 text-amber-400 mb-3" />
                  <div className="text-2xl font-black text-white mb-1">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we inspect */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
                What Our Roof Inspection
                <span className="block text-gradient">Covers</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Our Colchester roof inspections are comprehensive — not a quick look from
                the street. We systematically assess every element of your roof using
                ladders, specialist equipment and drone technology where required.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inspectionIncludes.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-amber-600" />
                  Independent Assessment
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Unlike roofing contractors who inspect to find work, we inspect only.
                  You receive an unbiased, honest assessment with no pressure to hire
                  us for repairs. Our report is your independent evidence.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-slate-600" />
                  Photographic Evidence
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every defect is documented with high-resolution photographs. Annotations
                  clearly identify the issue, location and severity, giving you and any
                  contractors clear evidence of the problem.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-slate-600" />
                  Prioritised Recommendations
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Defects are graded by urgency — from immediate action required through
                  to long-term maintenance. This helps you plan and budget effectively,
                  addressing critical issues first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roof types */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              All Roof Types Inspected
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From traditional clay tile Victorian terraces to modern flat-roof extensions,
              we have the expertise to inspect every roof type found across Colchester and Essex.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {roofTypes.map(({ type, description }) => (
              <div key={type} className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                  <Search className="w-5 h-5 text-amber-700" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{type}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning signs */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              When Should You Book a Roof Inspection?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: AlertTriangle, title: "After Storms or High Winds", desc: "Strong winds can displace tiles and damage flashings even without visible damage from street level." },
              { icon: FileText, title: "Before Buying a Property", desc: "A pre-purchase inspection reveals defects that could cost thousands — protecting your investment before exchange." },
              { icon: Clock, title: "Every 3–5 Years (Maintenance)", desc: "Regular inspection catches developing issues before they become expensive emergencies." },
              { icon: AlertTriangle, title: "Visible Tiles or Ridge Movement", desc: "Any visible displacement, cracked tiles or dislodged ridge units require prompt professional assessment." },
              { icon: Shield, title: "For Insurance Purposes", desc: "Independent inspection reports are accepted by UK insurers for claims, renewals and disputes." },
              { icon: Search, title: "After 10+ Years Without Inspection", desc: "Roofs deteriorate gradually. If yours hasn't been professionally assessed recently, now is the time." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection showAll />
      <CTABanner
        title="Book a Roof Inspection in Colchester"
        subtitle="Professional roof inspections from £149. Written report within 24 hours. Call or book online today."
      />
    </>
  );
}
