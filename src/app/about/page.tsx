import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { Shield, Star, Users, Award, CheckCircle, MapPin, Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "About A1 Roof Repairs Colchester — Roof Inspection Specialists",
  description:
    `A1 Roof Repairs Colchester — Established ${COMPANY.founded}. Independent roof inspection specialists serving Colchester and Essex for over ${COMPANY.experience} years. Fully insured, CAA-approved drone operators.`,
  path: "/about",
});

const values = [
  { icon: Shield, title: "Independence First", desc: "We inspect and report only. No repair services, no referral incentives — just honest, unbiased assessments every time." },
  { icon: Star, title: "Expert Knowledge", desc: `Over ${COMPANY.experience} years inspecting roofs across Essex. We know every roof type, failure mode and common defect inside out.` },
  { icon: Users, title: "Client-Centred", desc: "Your interests come first. We explain everything clearly, answer every question and ensure you understand our findings completely." },
  { icon: Award, title: "Professional Standards", desc: "Fully insured with £5M public liability, CAA-approved drone operations and professional indemnity insurance on every job." },
];

const timeline = [
  { year: "2008", event: "A1 Roof Repairs established in Colchester, Essex" },
  { year: "2012", event: "Expanded service area to cover all of Essex" },
  { year: "2016", event: "Launched CAA-approved drone roof inspection service" },
  { year: "2019", event: "Completed 2,000th roof inspection in Colchester" },
  { year: "2022", event: "Introduced thermal imaging for leak detection" },
  { year: "2024", event: `Achieved ${COMPANY.reviewCount}+ verified 5-star reviews` },
];

export default function AboutPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "About Us" }]} /></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
                Established {COMPANY.founded} — Colchester, Essex
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Colchester&apos;s
                <br />
                <span className="text-gradient">Independent</span>
                <br />
                Roof Inspectors
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                A1 Roof Repairs Colchester was founded on a simple principle: property owners
                deserve honest, independent roof assessments — not sales pitches from
                contractors looking for repair work.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                Since {COMPANY.founded}, we have completed over {COMPANY.inspectionsCompleted.toLocaleString()} roof inspections
                and surveys across Colchester, Essex and parts of Suffolk. Every assessment
                we carry out is independent, unbiased and detailed.
              </p>
              <div className="flex gap-4">
                <a href={`tel:${COMPANY.phonePlain}`} className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all">
                  <Phone className="w-4 h-4" />
                  {COMPANY.phone}
                </a>
                <Link href="/contact" className="flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-white hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all">
                  Book Inspection <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${COMPANY.experience}+`, label: "Years experience", icon: Award },
                { value: `${COMPANY.inspectionsCompleted.toLocaleString()}+`, label: "Inspections done", icon: CheckCircle },
                { value: `${COMPANY.rating}/5`, label: "Average rating", icon: Star },
                { value: "20+", label: "Areas covered", icon: MapPin },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="bg-slate-800 rounded-2xl p-5 border border-slate-700 text-center">
                  <Icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="text-sm text-slate-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our story */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5">
                Why We Inspect Only
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Most roof inspections in the UK are carried out by roofing contractors —
                companies with a financial interest in finding (or creating) work. This
                creates an obvious conflict of interest.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                A1 Roof Repairs Colchester was founded specifically to address this problem.
                We are inspection specialists only. We do not repair roofs, we do not sell
                roofing materials and we have no referral arrangements with contractors.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                When our surveyors inspect your roof, the only interest they serve is yours.
                If your roof is in good condition, we tell you so — clearly and in writing.
                If repairs are needed, we tell you what, why and approximately how much it
                should cost, without any commercial incentive to exaggerate.
              </p>
              <div className="space-y-3">
                {[
                  "We never repair roofs — only inspect them",
                  "No referral fees from contractors",
                  "No upselling or unnecessary work",
                  "Your report is your independent evidence",
                  "Honest advice is our product",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-slate-700">
                    <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-sm font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-8">Our Journey</h2>
              <div className="space-y-6">
                {timeline.map(({ year, event }) => (
                  <div key={year} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center text-white font-bold text-xs shrink-0">
                        {year}
                      </div>
                      <div className="w-px flex-1 bg-amber-200 my-2" />
                    </div>
                    <div className="pb-2">
                      <p className="text-slate-700 font-medium text-sm pt-2.5">{event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Work with Colchester's Most Trusted Roof Inspectors" subtitle="Independent, expert roof inspections across Essex. Book your assessment today." />
    </>
  );
}
