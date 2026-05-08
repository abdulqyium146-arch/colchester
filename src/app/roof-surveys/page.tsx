import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, ClipboardList, FileText, Clock, Shield, Banknote, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Roof Surveys Colchester — Detailed Structural Roof Survey Service",
  description:
    "Comprehensive roof surveys in Colchester from £249. Structural assessment, lifespan estimates and repair cost schedules. Written report with photographs within 24 hours.",
  path: "/roof-surveys",
  keywords: [
    "roof survey colchester",
    "roofing surveyor colchester",
    "structural roof survey essex",
    "roof condition report colchester",
    "roof survey report essex",
  ],
});

const surveyComponents = [
  { title: "Structural Assessment", desc: "Rafter, purlin and roof structure condition including any signs of movement, deflection or deterioration." },
  { title: "Covering Condition", desc: "All roof coverings assessed for remaining life, defects and maintenance requirements." },
  { title: "Waterproofing Elements", desc: "All flashings, valleys, ridges and seals assessed for watertightness and predicted failure timeline." },
  { title: "Lifespan Estimate", desc: "Professional estimate of remaining serviceable life for all roof components, helping plan future investment." },
  { title: "Repair Cost Schedule", desc: "Prioritised schedule of repairs with approximate costs, allowing budget planning and contractor briefing." },
  { title: "Maintenance Recommendations", desc: "5-year maintenance plan with recommended inspection points, treatments and monitoring actions." },
];

const faqs = [
  {
    question: "What is the difference between a roof inspection and a roof survey?",
    answer: "A roof inspection identifies current defects and their severity through visual assessment. A roof survey goes further — providing a structural assessment, remaining lifespan estimates, repair cost schedule and long-term maintenance recommendations. A survey is appropriate for older properties, pre-purchase decisions and planned maintenance programmes.",
  },
  {
    question: "How much does a roof survey cost in Colchester?",
    answer: "Our comprehensive roof surveys in Colchester start from £249 for standard residential properties. Larger properties, flat roofs or commercial buildings may require a tailored quote. All surveys include a detailed written report with photographs, defect schedule and recommendations.",
  },
  {
    question: "How long does a roof survey take?",
    answer: "A thorough roof survey typically takes 2–3 hours on-site for a standard residential property. Complex or larger roofs may take longer. The written report is compiled after the survey and delivered digitally within 24 hours.",
  },
  {
    question: "When do I need a full roof survey rather than a standard inspection?",
    answer: "A full survey is recommended when: purchasing an older property; the roof is over 20 years old; you are planning renovation or extension work affecting the roof; you need a detailed cost schedule for budget planning; or your insurer or solicitor requires a professional condition report.",
  },
];

export default function RoofSurveysPage() {
  const jsonLd = [
    serviceSchema("Roof Survey Colchester", "Comprehensive structural roof surveys in Colchester and Essex. Condition reports, lifespan estimates and repair schedules from qualified surveyors.", "/roof-surveys", "249"),
    faqSchema(faqs),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Roof Surveys", url: "/roof-surveys" }]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Roof Surveys" }]} /></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
                <ClipboardList className="w-3.5 h-3.5" />
                Comprehensive Structural Roof Surveys
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Roof Surveys
                <br />
                <span className="text-gradient">Colchester</span>
                <br />
                & Essex
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                In-depth structural roof surveys providing everything you need to understand
                your roof&apos;s true condition — including remaining lifespan estimates, repair
                cost schedules and a clear maintenance plan.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["From £249", "Structural Assessment", "Cost Schedule", "5yr Plan", "24hr Report"].map((tag) => (
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
                  Book Survey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-white font-bold text-lg mb-5">What Our Survey Covers</h3>
              <div className="space-y-4">
                {surveyComponents.map(({ title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-slate-400 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5">
                When You Need More Than
                <span className="block text-gradient">a Basic Inspection</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                A standard inspection tells you what is wrong now. A full roof survey tells
                you what is wrong, why it happened, how long everything has left, what it
                will cost to repair and what maintenance will keep it performing.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                For older properties, planned renovation projects, commercial due diligence
                or any situation where you need a complete picture of your roof&apos;s health
                and future costs, a full survey is the right choice.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FileText, label: "Detailed Report", sub: "Structural & condition" },
                  { icon: Banknote, label: "Cost Schedule", sub: "Prioritised repairs" },
                  { icon: Clock, label: "24hr Delivery", sub: "Digital report" },
                  { icon: Shield, label: "Fully Insured", sub: "£5M liability" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <Icon className="w-5 h-5 text-amber-600 mb-2" />
                    <div className="font-bold text-slate-900 text-sm">{label}</div>
                    <div className="text-xs text-slate-400">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-amber-900 mb-2">Roof Survey FAQ</h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i}>
                      <p className="font-semibold text-slate-900 text-sm mb-1">{faq.question}</p>
                      <p className="text-slate-600 text-sm">{faq.answer}</p>
                      {i < faqs.length - 1 && <hr className="mt-4 border-amber-200" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Book a Roof Survey in Colchester" subtitle="Comprehensive structural surveys from £249. Full report with repair schedule within 24 hours." />
    </>
  );
}
