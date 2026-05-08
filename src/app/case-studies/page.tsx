import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, MapPin, ArrowRight, Banknote } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Roof Inspection Case Studies — Colchester & Essex Success Stories",
  description:
    "Real case studies from A1 Roof Repairs Colchester. See how our independent roof inspections have protected homeowners and businesses across Essex.",
  path: "/case-studies",
});

const caseStudies = [
  {
    id: 1,
    title: "Victorian Terrace — Hidden £8,500 Defect Found Before Purchase",
    location: "Colchester Town Centre, CO1",
    service: "Homebuyer Roof Report",
    outcome: "Saved £8,500",
    summary: "Pre-purchase inspection of a Victorian terrace revealed severe nail sickness in the original Welsh slate, requiring complete re-roofing. The buyer used our report to negotiate a £8,500 price reduction.",
    challenge: "The property had been recently decorated throughout and looked immaculate. The estate agent's description mentioned 'recently maintained roof'. The standard homebuyer survey provided only a brief, non-committal comment about the roof.",
    solution: "Our specialist inspection using close-up inspection cameras identified extensive nail sickness in the original Welsh slates — approximately 60% of slates were at risk of failure. The ridge mortar was cracking throughout and the lead flashings had failed.",
    result: "The buyer received our report before exchange and used it to negotiate a £8,500 reduction from the asking price — significantly exceeding the £199 cost of the inspection. The roof was subsequently re-slated within the first year of ownership.",
    date: "March 2025",
    tag: "Major Saving",
    tagColor: "bg-green-100 text-green-800",
  },
  {
    id: 2,
    title: "Commercial Flat Roof — Planned Maintenance Programme Saves £40,000",
    location: "Colchester Business Park, CO4",
    service: "Commercial Roof Survey",
    outcome: "£40,000 prevented",
    summary: "Annual survey of a 2,000m² commercial flat roof identified developing membrane failures at early stage, allowing targeted repairs instead of full replacement.",
    challenge: "The 12-year-old EPDM flat roof on a large commercial unit was showing no obvious signs of failure internally. The business owner had received a quote for full replacement from a contractor who had inspected the roof.",
    solution: "Our independent survey identified localised membrane failures at roof penetrations and at the perimeter edge detail — but found the main roof field in acceptable condition. We produced a prioritised maintenance schedule identifying the areas requiring immediate repair and those that could wait 12–18 months.",
    result: "Targeted repairs costing approximately £4,500 were carried out, compared to a full replacement quote of £44,000. Annual surveys have since maintained the roof in good condition for two further years.",
    date: "January 2025",
    tag: "Commercial",
    tagColor: "bg-purple-100 text-purple-800",
  },
  {
    id: 3,
    title: "Storm Damage Claim — Full £12,000 Insurance Settlement",
    location: "Chelmsford, CM2",
    service: "Insurance Assessment",
    outcome: "£12,000 settled",
    summary: "Emergency assessment following storm damage enabled a full £12,000 insurance settlement after the insurer's loss adjuster had initially suggested a much lower figure.",
    challenge: "Following a significant storm, the homeowner submitted a claim for roof damage. The insurer's loss adjuster visited briefly and assessed the damage as minor, offering a settlement of £1,800 — far below the actual repair costs needed.",
    solution: "We carried out a comprehensive emergency inspection documenting all damage with high-resolution photography, thermal imaging showing concealed moisture ingress and a detailed professional assessment of the extent of storm damage and consequential water ingress.",
    result: "Our independent report was submitted to the insurer with a formal dispute. The claim was reassessed and settled in full at £12,000 within three weeks. Our report was described by the claimant's solicitor as 'decisive evidence'.",
    date: "November 2024",
    tag: "Insurance",
    tagColor: "bg-amber-100 text-amber-800",
  },
  {
    id: 4,
    title: "Persistent Leak Located After Two Failed Contractor Attempts",
    location: "Braintree, CM7",
    service: "Roof Leak Investigation",
    outcome: "Leak source identified",
    summary: "Thermal imaging investigation located a persistent roof leak that two separate roofing contractors had failed to identify over an 18-month period.",
    challenge: "A damp patch had appeared in the first floor bedroom of a 1960s detached house. Two separate roofing contractors had carried out repairs targeting what they believed were the entry points, but the leak continued through two winters.",
    solution: "We carried out a specialist leak investigation using thermal imaging and moisture mapping. The thermal survey identified a moisture track running from a concealed cold bridge at the eaves — not related to any of the repair areas targeted by the previous contractors. The actual entry point was 3.2 metres from where contractors had been working.",
    result: "The leak source was identified precisely and communicated clearly to the homeowner with annotated thermal images. A targeted repair by their chosen contractor resolved the issue permanently at a cost of approximately £320 — after £1,400 of ineffective repairs.",
    date: "September 2024",
    tag: "Leak Detection",
    tagColor: "bg-blue-100 text-blue-800",
  },
];

export default function CaseStudiesPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Case Studies" }]} /></div>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
              Real Results — Colchester & Essex
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Roof Inspection
              <br />
              <span className="text-gradient">Case Studies</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Real examples of how A1 Roof Repairs independent inspections have protected
              homeowners, buyers and businesses across Colchester and Essex.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${cs.tagColor}`}>
                          {cs.tag}
                        </span>
                        <span className="text-xs text-slate-400">{cs.service}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-xs text-slate-400">{cs.date}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900">{cs.title}</h2>
                    </div>
                    <div className="text-right">
                      <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-2">
                        <Banknote className="w-4 h-4 text-green-600" />
                        <span className="text-green-700 font-bold">{cs.outcome}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-5">
                    <MapPin className="w-4 h-4" />
                    {cs.location}
                  </div>

                  <p className="text-slate-700 font-medium mb-6">{cs.summary}</p>

                  <div className="grid md:grid-cols-3 gap-5">
                    {[
                      { label: "The Challenge", text: cs.challenge, color: "border-red-200 bg-red-50" },
                      { label: "Our Solution", text: cs.solution, color: "border-blue-200 bg-blue-50" },
                      { label: "The Result", text: cs.result, color: "border-green-200 bg-green-50" },
                    ].map(({ label, text, color }) => (
                      <div key={label} className={`rounded-2xl p-5 border ${color}`}>
                        <div className="font-bold text-slate-900 text-sm mb-2">{label}</div>
                        <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Could We Help You Too?" subtitle="Book an independent roof inspection and see what we find. From £149 across Colchester and Essex." />
    </>
  );
}
