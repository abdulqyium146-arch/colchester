import Link from "next/link";
import {
  Search,
  ClipboardList,
  Plane,
  Home,
  Building2,
  AlertTriangle,
  Shield,
  Wrench,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  ClipboardList,
  Plane,
  Home,
  Building2,
  AlertTriangle,
  Shield,
  Wrench,
};

const services = [
  {
    id: "roof-inspections",
    title: "Roof Inspections",
    href: "/roof-inspections",
    icon: "Search",
    price: "From £149",
    description:
      "Comprehensive visual inspection covering all roof surfaces, tiles, slate, flashing, gutters, chimneys and potential problem areas. Detailed written report with photographs.",
    features: ["Full visual assessment", "Photographic report", "Defect identification", "Maintenance advice"],
    tag: "Most Popular",
    color: "amber",
  },
  {
    id: "roof-surveys",
    title: "Roof Surveys",
    href: "/roof-surveys",
    icon: "ClipboardList",
    price: "From £249",
    description:
      "In-depth structural survey assessing roof condition, lifespan estimates, repair costs and long-term maintenance recommendations. Ideal for older properties.",
    features: ["Structural assessment", "Lifespan estimate", "Cost breakdown", "Priority recommendations"],
    tag: "",
    color: "slate",
  },
  {
    id: "drone-inspections",
    title: "Drone Roof Inspections",
    href: "/drone-roof-inspections",
    icon: "Plane",
    price: "From £199",
    description:
      "CAA-licensed drone operators capture 4K aerial footage and high-resolution imagery, providing safe and detailed inspection of difficult-to-access areas.",
    features: ["4K aerial footage", "High-res imagery", "Safe inspection", "CAA licensed pilots"],
    tag: "Technology",
    color: "blue",
  },
  {
    id: "homebuyer-reports",
    title: "Homebuyer Roof Reports",
    href: "/homebuyer-roof-reports",
    icon: "Home",
    price: "From £199",
    description:
      "Essential pre-purchase inspection for property buyers. Independent assessment identifying defects before exchange, helping you negotiate or budget for repairs.",
    features: ["Pre-purchase assessment", "Independent report", "Defect schedule", "Negotiation support"],
    tag: "Property Buyers",
    color: "green",
  },
  {
    id: "commercial-surveys",
    title: "Commercial Roof Surveys",
    href: "/commercial-roof-surveys",
    icon: "Building2",
    price: "From £349",
    description:
      "Planned maintenance surveys for commercial flat roofs, industrial units, and large residential blocks. Condition reports, maintenance schedules and investment planning.",
    features: ["Flat & pitched roofs", "Condition grading", "Maintenance plan", "Investment report"],
    tag: "Commercial",
    color: "purple",
  },
  {
    id: "emergency-inspection",
    title: "Emergency Roof Inspection",
    href: "/emergency-roof-inspection",
    icon: "AlertTriangle",
    price: "From £199",
    description:
      "Same-day emergency inspection for storm damage, sudden leaks, fallen trees, or urgent structural concerns. Available 24/7 across Colchester and Essex.",
    features: ["Same-day response", "Storm damage", "Emergency report", "24/7 availability"],
    tag: "Urgent",
    color: "red",
  },
  {
    id: "insurance-assessments",
    title: "Insurance Roof Assessments",
    href: "/insurance-roof-assessments",
    icon: "Shield",
    price: "From £199",
    description:
      "Independent roof condition reports for insurance claims, renewals and disputes. Accepted by major UK insurers with professional certification.",
    features: ["Insurance accepted", "Independent report", "Expert certification", "Claim support"],
    tag: "",
    color: "slate",
  },
  {
    id: "leak-investigation",
    title: "Roof Leak Investigation",
    href: "/roof-leak-investigation",
    icon: "Wrench",
    price: "From £149",
    description:
      "Specialist leak detection using thermal imaging and moisture mapping to locate the exact source of roof leaks quickly and accurately.",
    features: ["Thermal imaging", "Moisture mapping", "Root cause analysis", "Repair quote"],
    tag: "Leak Detection",
    color: "cyan",
  },
];

const tagColors: Record<string, string> = {
  "Most Popular": "bg-amber-100 text-amber-700",
  "Technology": "bg-blue-100 text-blue-700",
  "Property Buyers": "bg-green-100 text-green-700",
  "Commercial": "bg-purple-100 text-purple-700",
  "Urgent": "bg-red-100 text-red-700",
  "Leak Detection": "bg-cyan-100 text-cyan-700",
};

export default function Services() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
            Professional Roof Services — Colchester & Essex
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Complete Roof Inspection
            <br />
            <span className="text-gradient">& Survey Services</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            From single-property inspections to large commercial surveys, we deliver
            independent, expert roof assessments with detailed written reports.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Search;
            return (
              <Link
                key={service.id}
                href={service.href}
                className="group relative bg-white rounded-2xl p-6 border border-slate-100 hover:border-amber-300 shadow-sm hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Tag */}
                {service.tag && (
                  <span
                    className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[service.tag] || "bg-slate-100 text-slate-600"}`}
                  >
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-amber-600" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="font-bold text-amber-600 text-sm">{service.price}</span>
                  <span className="flex items-center gap-1 text-sm text-slate-400 group-hover:text-amber-600 group-hover:gap-2 transition-all font-medium">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 mb-4">
            Not sure which service you need?{" "}
            <Link href="/contact" className="text-amber-600 font-semibold hover:text-amber-700">
              Talk to an expert
            </Link>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
