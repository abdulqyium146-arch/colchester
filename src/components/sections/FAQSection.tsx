"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is a roof inspection and what does it include?",
    answer:
      "A roof inspection is a systematic visual assessment of all accessible roof elements by a qualified surveyor. This includes roof coverings (tiles, slates, flat roof membranes), ridge tiles, hip tiles, valleys, flashings, chimney stacks, gutters, downpipes, soffits, fascias and visible areas of the loft space. You receive a written report with photographs identifying all defects and maintenance recommendations.",
  },
  {
    question: "How much does a roof inspection cost in Colchester?",
    answer:
      "Our standard roof inspections start from £149 for residential properties. Drone roof inspections and homebuyer reports start from £199. Commercial roof surveys from £349. Prices vary depending on property size, roof complexity and access requirements. All prices include a comprehensive written report with photographs.",
  },
  {
    question: "How long does a roof inspection take?",
    answer:
      "Most residential roof inspections take 1–2 hours on-site. Larger properties or complex roofs may take 2–3 hours. Commercial surveys can take a full day. Your written report is delivered digitally within 24 hours of the survey.",
  },
  {
    question: "Do I need a roof inspection before buying a house?",
    answer:
      "Yes — strongly recommended. Standard homebuyer surveys often lack detailed roof assessment. Our pre-purchase homebuyer roof reports specifically focus on roof condition, identifying defects that could cost thousands to repair. Many clients use the findings to renegotiate purchase prices or budget accurately for future works.",
  },
  {
    question: "What areas around Colchester do you cover?",
    answer:
      "We cover the full Colchester and Essex area including Chelmsford, Braintree, Witham, Clacton-on-Sea, Halstead, Sudbury, Ipswich (Suffolk), Harwich, Mersea Island, Tiptree, Coggeshall, Dedham, Manningtree, Wivenhoe and all surrounding villages and towns within approximately 30 miles of Colchester.",
  },
  {
    question: "What is a drone roof inspection and when is it needed?",
    answer:
      "A drone roof inspection uses a CAA-licensed unmanned aerial vehicle to capture high-resolution 4K footage and photographs of your roof from directly above and at close proximity. It is ideal for roofs that are difficult or dangerous to access, multi-storey buildings, large commercial properties, and any roof where physical access would be unsafe or impractical.",
  },
  {
    question: "How quickly can you carry out an emergency roof inspection?",
    answer:
      "We offer same-day emergency roof inspections for urgent situations such as storm damage, active leaks, fallen trees or structural concerns. Call us on 01206 123456 and we&apos;ll arrange attendance as quickly as possible. Emergency inspections are available 7 days a week.",
  },
  {
    question: "Will my report be suitable for an insurance claim?",
    answer:
      "Yes. Our professional inspection reports are widely accepted by UK insurers for damage claims, policy renewals and disputes. The reports include professional certification, detailed photographic evidence and surveyor sign-off. We have successfully supported hundreds of insurance claims across Essex.",
  },
  {
    question: "Can you identify the source of a roof leak?",
    answer:
      "Yes. We offer specialist roof leak investigation using visual inspection, thermal imaging and moisture mapping to locate the exact source of leaks — including those where the entry point is not directly above the visible water ingress. We provide a detailed report identifying the source and recommend appropriate repairs.",
  },
  {
    question: "Is it worth getting a roof inspection on a new-build property?",
    answer:
      "Absolutely. New-build roofs can and do have defects including incorrectly laid tiles, inadequate flashing, insufficient ventilation and substandard workmanship. A post-completion inspection within the developer warranty period allows defects to be identified and remedied at no cost to you.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors",
          isOpen ? "bg-amber-50" : "bg-white hover:bg-slate-50"
        )}
        aria-expanded={isOpen}
      >
        <span className={cn("font-semibold text-sm sm:text-base", isOpen ? "text-amber-700" : "text-slate-900")}>
          {question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180 text-amber-600" : "text-slate-400"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 bg-amber-50/50 border-t border-amber-100">
          <p className="text-slate-600 leading-relaxed text-sm pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection({ showAll = false }: { showAll?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayed = showAll ? faqs : faqs.slice(0, 6);

  return (
    <section className="bg-white py-20 lg:py-28" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Common Questions About
            <br />
            <span className="text-gradient">Roof Inspections in Colchester</span>
          </h2>
          <p className="text-slate-600">
            Everything you need to know about our roof inspection and survey services.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3 mb-10">
          {displayed.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        {!showAll && (
          <div className="text-center">
            <p className="text-slate-500 mb-4">
              Have a question not answered here?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:01206123456"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Call 01206 123456
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center gap-2 border border-slate-200 hover:border-amber-300 text-slate-700 hover:text-amber-600 font-semibold px-6 py-3 rounded-xl transition-all"
              >
                View All FAQs
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
