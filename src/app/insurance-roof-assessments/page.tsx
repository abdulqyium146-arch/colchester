import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, Shield, FileText, Star, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Insurance Roof Assessments Colchester — Independent Roof Reports for Claims",
  description:
    "Independent insurance roof assessments in Colchester from £199. Professional reports accepted by all major UK insurers. Storm damage, claims support and renewal assessments.",
  path: "/insurance-roof-assessments",
  keywords: [
    "insurance roof assessment colchester",
    "roof insurance claim report essex",
    "independent roof report insurance",
    "storm damage roof report colchester",
  ],
});

const useCases = [
  { title: "Storm Damage Claims", desc: "Document storm, wind or hail damage with a professional independent report for immediate submission to your insurer." },
  { title: "Policy Renewal Assessments", desc: "Some insurers require proof of roof condition at renewal. Our report provides the professional evidence needed." },
  { title: "Claims Dispute Resolution", desc: "When insurers dispute the extent or cause of damage, an independent assessment provides the objective evidence to resolve the dispute." },
  { title: "Pre-Insurance Inspection", desc: "Before insuring a newly purchased property, our inspection establishes the roof's pre-insurance condition clearly." },
  { title: "Subsidence or Movement Claims", desc: "Roof damage resulting from ground movement requires professional assessment linking the defects to the event." },
  { title: "Landlord Insurance Assessments", desc: "Landlord policies often require periodic roof condition assessments. Our reports meet all major landlord insurer requirements." },
];

const faqs = [
  {
    question: "Are your insurance roof assessment reports accepted by UK insurers?",
    answer: "Yes. Our professional inspection reports are accepted by all major UK home and commercial insurers including Aviva, AXA, LV=, Zurich, RSA, NFU and specialist insurers. Reports are professionally certified and include all required evidence.",
  },
  {
    question: "How long does an insurance roof assessment take?",
    answer: "Most insurance roof assessments take 1–2 hours on-site. For emergency claims following storm damage, we can attend the same day and produce a preliminary report within hours of the inspection.",
  },
  {
    question: "Can you produce a report disputing my insurer's decision?",
    answer: "Yes. Where an insurer has assessed or rejected a claim in a way you believe is inaccurate, our independent assessment provides objective professional evidence that can be submitted formally or used to support an appeal or ombudsman complaint.",
  },
  {
    question: "What is the difference between a standard inspection and an insurance assessment?",
    answer: "An insurance assessment is specifically structured to meet insurer requirements — including cause-and-effect analysis, photographic evidence presented to insurer standards, professional certification and specific reference to the insurance event or claim type. Standard inspections are broader condition assessments.",
  },
];

export default function InsuranceRoofAssessmentsPage() {
  const jsonLd = [
    serviceSchema("Insurance Roof Assessment Colchester", "Independent insurance roof assessment reports in Colchester and Essex. Accepted by all major UK insurers.", "/insurance-roof-assessments", "199"),
    faqSchema(faqs),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Insurance Roof Assessments", url: "/insurance-roof-assessments" }]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Insurance Roof Assessments" }]} /></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
                <Shield className="w-3.5 h-3.5" />
                Independent Insurance Reports — All UK Insurers
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Insurance Roof
                <br />
                <span className="text-gradient">Assessments</span>
                <br />
                Colchester
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Independent roof assessment reports for insurance claims, renewals and
                disputes. Accepted by all major UK insurers, professionally certified
                and delivered within 24 hours.
              </p>
              <div className="bg-slate-800 rounded-2xl p-5 mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-white font-semibold text-sm">Proven Track Record</span>
                </div>
                <p className="text-slate-400 text-sm">
                  We have supported hundreds of successful insurance claims across Essex.
                  Our reports are professionally structured to meet insurer requirements
                  and are accepted without question by all major UK insurance companies.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="tel:01206123456" className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all">
                  <Phone className="w-4 h-4" />
                  01206 123456
                </a>
                <Link href="/contact" className="flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all">
                  Book Assessment <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Professionally certified and signed reports",
                "Photographic evidence to insurer standards",
                "Cause and effect analysis",
                "Accepted by Aviva, AXA, LV=, Zurich and all major UK insurers",
                "Same-day emergency reports for urgent claims",
                "Claims dispute support reports available",
                "Clear, jargon-free professional language",
                "Digital delivery within 24 hours",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 bg-slate-800 rounded-xl px-4 py-3 border border-slate-700">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
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
              Insurance Assessment Use Cases
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map(({ title, desc }) => (
              <div key={title} className="bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 transition-all">
                <Shield className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Insurance Assessment FAQs</h2>
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

      <CTABanner title="Need an Insurance Roof Assessment Report?" subtitle="Independent reports accepted by all UK insurers. Same-day emergency reports available." />
    </>
  );
}
