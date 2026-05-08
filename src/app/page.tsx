import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { localBusinessSchema, faqSchema } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Process from "@/components/sections/Process";
import RoofProblems from "@/components/sections/RoofProblems";
import AreasCovered from "@/components/sections/AreasCovered";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = buildMetadata({
  title: "Roof Inspections Colchester — Expert Roof Surveys & Drone Inspections",
  description:
    "A1 Roof Repairs Colchester: Professional roof inspections, surveys and drone assessments across Essex. Independent reports from £149, delivered within 24 hours. Call 01206 123456.",
  path: "/",
  keywords: [
    "roof inspection colchester",
    "roof survey essex",
    "drone roof inspection",
    "homebuyer roof report",
    "emergency roof inspection colchester",
  ],
});

const homeFAQs = [
  {
    question: "What does a roof inspection include in Colchester?",
    answer:
      "Our Colchester roof inspections cover all visible roof elements: tiles, slates, flat roof membranes, ridge and hip tiles, valleys, lead or mortar flashings, chimney stacks, gutters, downpipes, soffits, fascias and accessible loft space. You receive a detailed written report with annotated photographs.",
  },
  {
    question: "How much does a roof inspection cost near Colchester?",
    answer:
      "Residential roof inspections in Colchester start from £149. Homebuyer reports and drone surveys from £199. Commercial roof surveys from £349. All prices include a comprehensive written report.",
  },
  {
    question: "How quickly can I get a roof inspection in Colchester?",
    answer:
      "We typically book inspections within 48 hours for standard requests. Emergency same-day inspections are available for storm damage or urgent leak situations anywhere in Colchester and Essex.",
  },
  {
    question: "Do you cover the whole of Essex for roof inspections?",
    answer:
      "Yes. Based in Colchester, we cover all of Essex including Chelmsford, Braintree, Witham, Clacton-on-Sea, Harwich, Halstead and into parts of Suffolk including Ipswich. Approximately 30-mile radius.",
  },
];

export default function HomePage() {
  const jsonLd = [localBusinessSchema(), faqSchema(homeFAQs)];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <Hero />
      <TrustIndicators />
      <Services />
      <WhyChooseUs />
      <Process />
      <RoofProblems />
      <AreasCovered />
      <Testimonials />
      <FAQSection />
      <CTABanner
        title="Book Your Colchester Roof Inspection Today"
        subtitle="Professional, independent roof assessments from £149. 24-hour written reports. Trusted by 3,500+ Essex homeowners and businesses."
      />
    </>
  );
}
