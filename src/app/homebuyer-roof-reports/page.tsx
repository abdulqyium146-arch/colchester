import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, Home, Shield, AlertTriangle, FileText, Banknote, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Homebuyer Roof Reports Colchester — Pre-Purchase Roof Inspections",
  description:
    "Independent pre-purchase roof inspections in Colchester from £199. Identify defects before exchange and negotiate with confidence. Written report within 24 hours.",
  path: "/homebuyer-roof-reports",
  keywords: [
    "homebuyer roof report colchester",
    "pre purchase roof inspection colchester",
    "roof survey before buying house colchester",
    "independent roof inspection colchester",
    "property roof report essex",
  ],
});

const reportBenefits = [
  {
    icon: Shield,
    title: "Protect Your Purchase",
    desc: "Identify costly defects before you exchange contracts. A roof problem found after purchase becomes your financial responsibility.",
  },
  {
    icon: Banknote,
    title: "Negotiate the Price",
    desc: "Use our independent report to renegotiate the purchase price or request repairs as a condition of sale. Many clients save more than the cost of the inspection.",
  },
  {
    icon: AlertTriangle,
    title: "Budget Accurately",
    desc: "Know exactly what work the roof needs and when. Budget for repairs before they become urgent, avoiding unexpected financial shocks.",
  },
  {
    icon: FileText,
    title: "Independent Evidence",
    desc: "Our report is truly independent. We have no connection to the seller, estate agent or any roofing contractors — our findings are unbiased.",
  },
];

const whatIsChecked = [
  "Age and remaining lifespan estimate",
  "All roof tiles, slates or flat roof coverings",
  "Ridge, hip and valley tile condition",
  "All flashings (lead, mortar, aluminium)",
  "Chimney stacks and pots",
  "Gutters, downpipes and drainage",
  "Soffits, fascias and bargeboards",
  "Loft/roof space moisture and structure",
  "Evidence of previous repairs",
  "Ventilation adequacy",
  "Priority defect schedule",
  "Estimated repair costs",
];

const faqs = [
  {
    question: "Why do I need a homebuyer roof report if I'm getting a full structural survey?",
    answer:
      "Standard homebuyer or RICS surveys often provide only a brief, generic commentary on the roof. They rarely include detailed assessment by a specialist or specific photographs of defects. A dedicated roof inspection by a specialist surveyor gives you far more detailed, actionable information about one of the most expensive components of a property.",
  },
  {
    question: "When should I arrange a homebuyer roof inspection?",
    answer:
      "Ideally before you make an offer — or at the very latest before exchange of contracts. The earlier you receive our report, the more options you have to renegotiate, request repairs, or withdraw from the purchase without financial penalty.",
  },
  {
    question: "What if the seller won't allow access for a roof inspection?",
    answer:
      "A seller refusing reasonable pre-purchase inspection access is itself a significant warning sign. However, where internal access is restricted, our drone survey can provide a thorough external assessment of the roof without the need to enter the property.",
  },
  {
    question: "Can your report help me negotiate on price?",
    answer:
      "Absolutely — this is one of the most common uses of our homebuyer reports. Clients regularly use our findings to negotiate price reductions ranging from a few hundred to several thousand pounds, significantly exceeding the cost of the inspection itself.",
  },
  {
    question: "How quickly will I receive the homebuyer roof report?",
    answer:
      "Most homebuyer roof reports are delivered digitally within 24 hours of the survey. Given the time-sensitive nature of property purchases, we can often prioritise delivery for an additional fee if needed.",
  },
];

export default function HomebuyerRoofReportsPage() {
  const jsonLd = [
    serviceSchema(
      "Homebuyer Roof Report Colchester",
      "Pre-purchase roof inspection in Colchester and Essex. Independent report identifying defects before exchange from qualified surveyors.",
      "/homebuyer-roof-reports",
      "199"
    ),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Homebuyer Roof Reports", url: "/homebuyer-roof-reports" },
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
            <Breadcrumbs items={[{ label: "Homebuyer Roof Reports" }]} />
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-semibold mb-5">
                <Home className="w-3.5 h-3.5" />
                Pre-Purchase Roof Inspections
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Homebuyer
                <br />
                <span className="text-gradient">Roof Reports</span>
                <br />
                in Colchester
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Buying a property in Colchester or Essex? Our independent homebuyer
                roof reports identify defects before you exchange contracts — protecting
                your investment and giving you the evidence to negotiate.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-4 mb-8">
                <p className="text-amber-300 font-semibold text-sm mb-1">
                  Did you know?
                </p>
                <p className="text-slate-300 text-sm">
                  Roof repairs are one of the UK&apos;s most expensive home improvement costs.
                  A full replacement can cost £5,000–£30,000+. Our report from £199 could
                  save you thousands.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="tel:01206123456" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all">
                  <Phone className="w-4 h-4" />
                  01206 123456
                </a>
                <Link href="/contact" className="flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all">
                  Book Online <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-white font-bold text-lg mb-5">Your Report Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {whatIsChecked.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-slate-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Starting from</span>
                  <span className="text-2xl font-black text-amber-400">£199</span>
                </div>
                <p className="text-slate-500 text-xs mt-1">Includes written report with photographs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Why Buyers Choose A1 for
              <span className="block text-gradient">Homebuyer Roof Reports</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reportBenefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 flex gap-4 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">
            Homebuyer Report FAQs
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
        title="Buying a Property in Colchester or Essex?"
        subtitle="Don't exchange without an independent roof report. From £199 with 24-hour delivery."
        variant="amber"
      />
    </>
  );
}
