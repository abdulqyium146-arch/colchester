import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Roof Inspection FAQs Colchester — Common Questions Answered",
  description:
    "Answers to the most common questions about roof inspections, surveys and drone assessments in Colchester and Essex. Expert advice from A1 Roof Repairs.",
  path: "/faq",
  keywords: ["roof inspection faq", "roof survey questions colchester", "roof inspection cost essex"],
});

const allFAQs = [
  { question: "What is a roof inspection and what does it include?", answer: "A roof inspection is a systematic visual assessment of all accessible roof elements by a qualified surveyor. This includes roof coverings (tiles, slates, flat roof membranes), ridge tiles, hip tiles, valleys, flashings, chimney stacks, gutters, downpipes, soffits, fascias and visible areas of the loft space. You receive a written report with photographs identifying all defects and maintenance recommendations." },
  { question: "How much does a roof inspection cost in Colchester?", answer: "Our standard roof inspections start from £149 for residential properties. Drone roof inspections and homebuyer reports start from £199. Commercial roof surveys from £349. Prices vary depending on property size, roof complexity and access requirements. All prices include a comprehensive written report with photographs." },
  { question: "How long does a roof inspection take?", answer: "Most residential roof inspections take 1–2 hours on-site. Larger properties or complex roofs may take 2–3 hours. Commercial surveys can take a full day. Your written report is delivered digitally within 24 hours of the survey." },
  { question: "Do I need a roof inspection before buying a house?", answer: "Yes — strongly recommended. Standard homebuyer surveys often lack detailed roof assessment. Our pre-purchase homebuyer roof reports specifically focus on roof condition, identifying defects that could cost thousands to repair. Many clients use the findings to renegotiate purchase prices or budget accurately for future works." },
  { question: "What areas around Colchester do you cover?", answer: "We cover the full Colchester and Essex area including Chelmsford, Braintree, Witham, Clacton-on-Sea, Halstead, Sudbury, Ipswich (Suffolk), Harwich, Mersea Island, Tiptree, Coggeshall, Dedham, Manningtree, Wivenhoe and all surrounding villages and towns within approximately 30 miles of Colchester." },
  { question: "What is a drone roof inspection and when is it needed?", answer: "A drone roof inspection uses a CAA-licensed unmanned aerial vehicle to capture high-resolution 4K footage and photographs of your roof from directly above and at close proximity. It is ideal for roofs that are difficult or dangerous to access, multi-storey buildings, large commercial properties, and any roof where physical access would be unsafe or impractical." },
  { question: "How quickly can you carry out an emergency roof inspection?", answer: "We offer same-day emergency roof inspections for urgent situations such as storm damage, active leaks, fallen trees or structural concerns. Call us on +44 333 567 5656 and we'll arrange attendance as quickly as possible. Emergency inspections are available 7 days a week." },
  { question: "Will my report be suitable for an insurance claim?", answer: "Yes. Our professional inspection reports are widely accepted by UK insurers for damage claims, policy renewals and disputes. The reports include professional certification, detailed photographic evidence and surveyor sign-off. We have successfully supported hundreds of insurance claims across Essex." },
  { question: "Can you identify the source of a roof leak?", answer: "Yes. We offer specialist roof leak investigation using visual inspection, thermal imaging and moisture mapping to locate the exact source of leaks — including those where the entry point is not directly above the visible water ingress." },
  { question: "Is it worth getting a roof inspection on a new-build property?", answer: "Absolutely. New-build roofs can and do have defects including incorrectly laid tiles, inadequate flashing, insufficient ventilation and substandard workmanship. A post-completion inspection within the developer warranty period allows defects to be identified and remedied at no cost to you." },
  { question: "How often should I have my roof professionally inspected?", answer: "We recommend a professional roof inspection every 3–5 years for properties under 20 years old, and annually for older properties. After any major storm event, an inspection is advisable regardless of visible damage." },
  { question: "What is the difference between a roof inspection and a full structural survey?", answer: "A roof inspection specifically assesses roof condition — coverings, flashings, gutters, structure and associated elements. A structural survey covers the entire property including foundations, walls and internal structure. Both may be appropriate for a property purchase, as structural surveys often provide only limited roof commentary." },
  { question: "Do you inspect flat roofs as well as pitched roofs?", answer: "Yes. We inspect all flat roof types including EPDM rubber, TPO, GRP (fibreglass), felt and lead flat roofs. Flat roof inspection includes membrane condition, drainage, ponding, joints, seams and all penetrations." },
  { question: "Can I get a same-day roof inspection report?", answer: "For emergency situations, we can produce a preliminary digital report on the day of inspection. For standard surveys, reports are delivered within 24 hours. Express 4-hour report delivery is available for an additional fee." },
  { question: "Are your surveyors qualified and insured?", answer: "Yes. All A1 Roof Repairs surveyors are qualified with relevant inspection certifications, fully insured with £5 million public liability cover, and our drone operators hold current CAA Operational Authorisation." },
];

export default function FAQPage() {
  const jsonLd = [
    faqSchema(allFAQs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "FAQ", url: "/faq" },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "FAQ" }]} /></div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
              Frequently Asked Questions
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Roof Inspection
              <br />
              <span className="text-gradient">Questions & Answers</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Expert answers to the most common questions about roof inspections,
              surveys and drone assessments in Colchester and Essex.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection showAll />
        </div>
      </section>

      <CTABanner title="Still Have Questions?" subtitle="Call us for free expert advice on +44 333 567 5656 or submit an enquiry online." variant="light" />
    </>
  );
}
