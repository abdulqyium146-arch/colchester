import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { CheckCircle, Wrench, Droplets, Eye, Zap, Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Roof Leak Investigation Colchester — Leak Detection & Source Location",
  description:
    "Expert roof leak investigation in Colchester from £149. Thermal imaging, moisture mapping and visual inspection to locate the exact source of any roof leak.",
  path: "/roof-leak-investigation",
  keywords: [
    "roof leak investigation colchester",
    "roof leak detection essex",
    "find roof leak colchester",
    "thermal imaging roof leak essex",
    "roof leak source location colchester",
  ],
});

const methods = [
  { icon: Eye, title: "Visual Inspection", desc: "Systematic visual assessment of all potential leak entry points including flashings, valleys, tiles and penetrations." },
  { icon: Zap, title: "Thermal Imaging", desc: "Thermal cameras detect temperature differentials caused by moisture, locating hidden damp and leak tracks invisible to the naked eye." },
  { icon: Droplets, title: "Moisture Mapping", desc: "Electronic moisture meters map moisture distribution across roof and ceiling areas, tracing the water's path from entry to appearance." },
  { icon: Wrench, title: "Invasive Investigation", desc: "Where necessary, targeted access to roof space or structure to trace leak paths and identify the precise entry point." },
];

const leakCauses = [
  "Failed or cracked lead flashing",
  "Deteriorated chimney mortar",
  "Slipped, cracked or missing tiles",
  "Failed flat roof membrane seams",
  "Blocked or failed gutters causing overflow",
  "Condensation from poor ventilation",
  "Valley tile deterioration",
  "Failed roof window seals",
  "Nail sickness in slate roofs",
  "Impact damage from storm or debris",
];

const faqs = [
  {
    question: "Why can't my roofer find where my leak is coming from?",
    answer: "Roof leaks are notoriously difficult to trace because water travels along roof timbers, membranes and cavity walls before appearing at a visible point. The visible damp patch is rarely directly below the entry point. Our specialist leak investigation using thermal imaging and moisture mapping can locate the exact source when visual inspection alone has failed.",
  },
  {
    question: "What is thermal imaging and how does it help find roof leaks?",
    answer: "Thermal imaging cameras detect differences in surface temperature. Wet materials have a different thermal signature to dry materials, allowing us to map moisture distribution across roof surfaces and ceiling areas. This reveals the leak track from entry point to visible damp, even through insulation and building materials.",
  },
  {
    question: "How much does a roof leak investigation cost in Colchester?",
    answer: "Roof leak investigations in Colchester start from £149 for a standard visual investigation. Thermal imaging investigations from £199. Price varies depending on property size, access complexity and equipment required. All investigations include a written report identifying the source and recommended repair.",
  },
  {
    question: "Will you repair the leak as well?",
    answer: "No. We investigate and report only — we do not carry out repairs. This means our leak investigation report is truly independent. We identify the exact source and recommend the appropriate repair, which you can then commission from any roofing contractor of your choice.",
  },
];

export default function RoofLeakInvestigationPage() {
  const jsonLd = [
    serviceSchema("Roof Leak Investigation Colchester", "Specialist roof leak detection and source location in Colchester and Essex. Thermal imaging and moisture mapping.", "/roof-leak-investigation", "149"),
    faqSchema(faqs),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Roof Leak Investigation", url: "/roof-leak-investigation" }]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Roof Leak Investigation" }]} /></div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-5">
                <Droplets className="w-3.5 h-3.5" />
                Specialist Leak Detection — Thermal Imaging
              </div>
              <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
                Roof Leak
                <br />
                <span className="text-gradient">Investigation</span>
                <br />
                Colchester
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Can&apos;t find the source of your roof leak? Our specialist leak investigation
                service uses thermal imaging, moisture mapping and systematic inspection to
                locate the exact entry point — even in cases where multiple contractors
                have failed to find it.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["From £149", "Thermal Imaging", "Moisture Mapping", "Written Report", "Independent"].map((tag) => (
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
                  Book Investigation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">
              <h3 className="text-white font-bold text-lg mb-5">Common Leak Causes We Identify</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {leakCauses.map((cause) => (
                  <div key={cause} className="flex items-center gap-2 text-slate-300 text-sm">
                    <Droplets className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    {cause}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
              Our Investigation Methods
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {methods.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 transition-all text-center">
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

      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 text-center mb-10">Leak Investigation FAQs</h2>
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

      <CTABanner title="Can't Find the Source of Your Roof Leak?" subtitle="Our specialist investigation finds leaks others miss. From £149 with written report." />
    </>
  );
}
