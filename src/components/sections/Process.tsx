import { Phone, Calendar, Search, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: Phone,
    title: "Book Your Inspection",
    description:
      "Call us or request a quote online. We&apos;ll confirm the right inspection type for your needs, provide an upfront price and arrange a convenient appointment.",
    duration: "5 minutes",
  },
  {
    step: 2,
    icon: Calendar,
    title: "We Visit Your Property",
    description:
      "Our qualified surveyor attends your property at the agreed time. We inspect the full roof using ladders, specialist cameras and — where required — our CAA-approved drone.",
    duration: "1–3 hours",
  },
  {
    step: 3,
    icon: Search,
    title: "Thorough Inspection",
    description:
      "We systematically assess every element: tiles, slates, flashing, ridges, valleys, gutters, chimneys, soffits, fascias and any visible internal roof space.",
    duration: "On-site",
  },
  {
    step: 4,
    icon: FileText,
    title: "Written Report Delivered",
    description:
      "Your detailed report is compiled with annotated photographs, defect descriptions, severity ratings and clear recommendations. Delivered digitally within 24 hours.",
    duration: "Within 24hrs",
  },
  {
    step: 5,
    icon: CheckCircle,
    title: "Expert Recommendations",
    description:
      "We guide you through our findings, explain any issues in plain English and provide honest advice on next steps — with no obligation to use our services further.",
    duration: "Included",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28" id="our-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Your Roof Inspection
            <br />
            <span className="text-gradient">From Booking to Report</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Simple, professional and transparent. Here&apos;s exactly what happens when you
            book a roof inspection with A1 Roof Repairs Colchester.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/50 via-amber-500/20 to-transparent hidden md:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.step}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`${
                      isEven ? "lg:text-right lg:order-1" : "lg:order-2"
                    } md:pl-16 lg:pl-0`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 mb-3 ${
                        isEven ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-amber-400 font-black text-4xl">
                        {String(step.step).padStart(2, "0")}
                      </span>
                      <span className="text-slate-600 text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Icon bubble — center */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl bg-amber-500 items-center justify-center shadow-2xl shadow-amber-500/30 z-10 ${
                      isEven ? "order-2" : "order-1"
                    }`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Mobile icon */}
                  <div className="flex md:hidden absolute left-0 top-0 w-12 h-12 rounded-xl bg-amber-500 items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Empty grid col for alternation */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"} />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="tel:+443335675656"
            className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-amber-500/30 text-lg"
          >
            <Phone className="w-5 h-5" />
            Start the Process — Call +44 333 567 5656
          </a>
          <p className="text-slate-500 text-sm mt-4">
            Most inspections available within 48 hours. Emergency same-day available.
          </p>
        </div>
      </div>
    </section>
  );
}
