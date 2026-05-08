import { Shield, Eye, FileCheck, Clock, Award, ThumbsUp, MapPin, Banknote } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Eye,
    title: "Truly Independent Assessments",
    description:
      "We inspect only — we never repair. This means you receive honest, unbiased reports with no sales pressure. Our findings are yours alone.",
  },
  {
    icon: FileCheck,
    title: "Detailed Written Reports",
    description:
      "Every inspection produces a comprehensive written report with photographs, defect ratings, priority rankings and clear repair recommendations.",
  },
  {
    icon: Clock,
    title: "24-Hour Report Turnaround",
    description:
      "Most inspection reports are delivered within 24 hours of the survey. Urgent cases can be expedited for same-day digital delivery.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Accredited",
    description:
      "£5 million public liability insurance, CAA-approved drone operators and professional indemnity cover on every inspection we carry out.",
  },
  {
    icon: Award,
    title: "Experienced Surveyors",
    description:
      "Our surveyors have inspected over 3,500 roofs across Essex. We know every roof type, common failure points and local building characteristics.",
  },
  {
    icon: MapPin,
    title: "Local Colchester Experts",
    description:
      "Based in Colchester, we know the local architecture, weather patterns and typical roofing conditions across Essex and Suffolk.",
  },
  {
    icon: ThumbsUp,
    title: "Honest, Clear Advice",
    description:
      "We tell you exactly what we find — good and bad. If your roof is in good condition, we&apos;ll tell you that too. No unnecessary alarm or upselling.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description:
      "Fixed-price surveys with no hidden costs. Quote agreed upfront, no surprises. We also offer combined inspection and report packages.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 lg:py-28" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="sticky top-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold mb-5">
              Why Choose A1 Roof Repairs Colchester
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-6">
              Colchester&apos;s Most
              <br />
              <span className="text-gradient">Trusted Roof</span>
              <br />
              Inspectors
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We are inspection specialists — not roofers looking for repair work. Our
              independence means you always get an honest, objective assessment of your
              roof&apos;s true condition.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
              <blockquote className="text-slate-700 italic text-base leading-relaxed">
                &ldquo;A1 Roof Repairs found a serious hidden defect that three previous roofers
                had missed. Their independent inspection saved us from buying a property
                with a £12,000 roof problem.&rdquo;
              </blockquote>
              <cite className="block mt-3 text-sm text-slate-500 not-italic">
                — Mark P., Colchester homebuyer
              </cite>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-200"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right — grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center mb-3 transition-colors">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
