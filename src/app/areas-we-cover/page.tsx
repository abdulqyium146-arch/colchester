import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { SERVICE_AREAS, COMPANY } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Roof Inspections Areas We Cover — Colchester, Essex & Suffolk",
  description:
    "A1 Roof Repairs covers Colchester, Chelmsford, Braintree, Clacton, Ipswich and all of Essex. Professional roof inspections within 30 miles of Colchester.",
  path: "/areas-we-cover",
  keywords: [
    "roof inspection essex",
    "roof survey colchester",
    "roof inspector chelmsford",
    "roof inspection clacton",
    "roof survey braintree",
  ],
});

const areaDetails = [
  { name: "Colchester", desc: "Our home base — fastest response and most competitive pricing for all Colchester residents and businesses.", postcode: "CO1–CO6", primary: true },
  { name: "Chelmsford", desc: "Full coverage across Chelmsford including Springfield, Writtle and surrounding villages.", postcode: "CM1–CM3", primary: false },
  { name: "Braintree", desc: "Serving Braintree, Bocking, Rayne and all surrounding villages in Braintree district.", postcode: "CM7–CM8", primary: false },
  { name: "Clacton-on-Sea", desc: "Coastal property specialists — experienced with seaside weather damage and salt erosion.", postcode: "CO15–CO16", primary: false },
  { name: "Ipswich", desc: "Suffolk coverage including central Ipswich and surrounding towns.", postcode: "IP1–IP4", primary: false },
  { name: "Harwich", desc: "Port town and surrounding areas including Dovercourt and Parkeston.", postcode: "CO12", primary: false },
  { name: "Halstead", desc: "Halstead town and Colne Valley villages.", postcode: "CO9", primary: false },
  { name: "Witham", desc: "Full Witham coverage including Cressing, White Notley and Faulkbourne.", postcode: "CM8", primary: false },
  { name: "Mersea Island", desc: "West Mersea and East Mersea coastal properties.", postcode: "CO5", primary: false },
  { name: "Tiptree", desc: "Tiptree and surrounding Blackwater villages.", postcode: "CO5", primary: false },
];

export default function AreasWecover() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Areas We Cover", url: "/areas-we-cover" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Areas We Cover" }]} /></div>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
              <MapPin className="w-3.5 h-3.5" />
              Service Coverage — Colchester, Essex & Suffolk
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Roof Inspections Across
              <br />
              <span className="text-gradient">Colchester & Essex</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Based in Colchester, we serve all of Essex and parts of Suffolk with
              professional roof inspections, surveys and drone assessments within
              approximately 30 miles of Colchester town centre.
            </p>
          </div>
        </div>
      </section>

      {/* Area cards */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">
            All Areas We Cover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {areaDetails.map(({ name, desc, postcode, primary }) => (
              <div
                key={name}
                className={`rounded-2xl p-6 border transition-all duration-300 ${
                  primary
                    ? "bg-amber-50 border-amber-200"
                    : "bg-slate-50 border-slate-100 hover:border-amber-200 hover:bg-amber-50/50"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-5 h-5 ${primary ? "text-amber-600" : "text-slate-400"}`} />
                    <h3 className="font-bold text-slate-900">{name}</h3>
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded-lg ${primary ? "bg-amber-200 text-amber-800" : "bg-slate-200 text-slate-600"}`}>
                    {postcode}
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-3">{desc}</p>
                {primary && (
                  <span className="text-xs font-semibold text-amber-700 bg-amber-100 px-2 py-1 rounded-lg">
                    Primary Service Area
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* All towns pills */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="font-bold text-slate-900 text-lg mb-4">
              All Towns & Villages We Serve
            </h3>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="text-sm px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-amber-300 hover:text-amber-700 transition-colors cursor-default"
                >
                  <MapPin className="w-3 h-3 inline mr-1" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Not in area */}
      <section className="bg-amber-50 border-y border-amber-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-3">
            Not Sure If We Cover Your Area?
          </h2>
          <p className="text-slate-600 mb-6">
            Call us and we&apos;ll let you know instantly. We regularly cover areas beyond
            our standard coverage for the right project.
          </p>
          <a
            href={`tel:${COMPANY.phonePlain}`}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4" />
            {COMPANY.phone}
          </a>
        </div>
      </section>

      <CTABanner title="Book a Roof Inspection in Your Area" subtitle="Covering Colchester, Essex and parts of Suffolk. Call today for availability." />
    </>
  );
}
