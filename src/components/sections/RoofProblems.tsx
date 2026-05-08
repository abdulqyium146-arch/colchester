import { AlertCircle, Droplets, Wind, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

const problems = [
  {
    icon: AlertCircle,
    title: "Missing or Broken Tiles",
    urgency: "High",
    description:
      "Exposed roof deck allows water ingress and accelerates structural decay. Even one missing tile can cause thousands in damage if left unaddressed.",
    signs: ["Daylight visible through roof", "Debris in gutters", "Damp patches in loft"],
  },
  {
    icon: Droplets,
    title: "Water Ingress & Damp",
    urgency: "High",
    description:
      "Active leaks or moisture penetration through failed flashing, slipped tiles or degraded flat roof membranes. Often causes hidden structural damage.",
    signs: ["Ceiling stains", "Damp smell in loft", "Peeling wallpaper near roof line"],
  },
  {
    icon: Layers,
    title: "Failing Flat Roof",
    urgency: "Medium",
    description:
      "Flat roof membranes degrade over time, leading to ponding water, blistering and eventual failure. Regular inspection extends membrane life significantly.",
    signs: ["Standing water after rain", "Blistering surface", "Cracking or splits visible"],
  },
  {
    icon: Wind,
    title: "Storm Damage",
    urgency: "Urgent",
    description:
      "High winds lift tiles, damage flashing and loosen ridge tiles. Post-storm inspection should be carried out within 48 hours to assess and document damage.",
    signs: ["Displaced ridge tiles", "Lifted flashing", "Cracked or dislodged chimney"],
  },
  {
    icon: AlertCircle,
    title: "Moss & Algae Growth",
    urgency: "Medium",
    description:
      "Heavy moss growth retains moisture, degrades tiles and blocks gutters. If untreated, root penetration can crack tiles and damage mortar joints.",
    signs: ["Green or black growth on tiles", "Blocked gutters", "Mortar deterioration"],
  },
  {
    icon: Droplets,
    title: "Chimney & Flashing Failure",
    urgency: "High",
    description:
      "Lead or mortar flashing around chimneys is a primary water entry point. Cracks, gaps or pulled-away sections allow substantial water ingress.",
    signs: ["Damp patches on chimney breast", "Loose or cracked lead", "Mortar gaps at chimney base"],
  },
];

const urgencyColors = {
  Urgent: "bg-red-100 text-red-700",
  High: "bg-orange-100 text-orange-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-blue-100 text-blue-700",
};

export default function RoofProblems() {
  return (
    <section className="bg-white py-20 lg:py-28" id="roof-problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-semibold mb-4">
            Common Roof Problems We Identify
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Warning Signs Your Roof
            <br />
            <span className="text-gradient">Needs a Professional Inspection</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Roof problems rarely announce themselves clearly. Our experienced surveyors
            know exactly what to look for — and where. Here are the most common issues
            we identify across Colchester and Essex properties.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map(({ icon: Icon, title, urgency, description, signs }) => (
            <div
              key={title}
              className="bg-slate-50 hover:bg-amber-50/50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-amber-700" />
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${urgencyColors[urgency as keyof typeof urgencyColors]}`}
                >
                  {urgency} Priority
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Signs to look for:
                </div>
                <ul className="space-y-1">
                  {signs.map((sign) => (
                    <li key={sign} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-xl sm:text-2xl mb-2">
              Spotted Any of These Warning Signs?
            </h3>
            <p className="text-slate-400">
              Don&apos;t wait — early inspection prevents costly damage. Book a professional
              assessment today from just £149.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:+443335675656"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border border-slate-600 hover:border-amber-500 text-slate-300 hover:text-amber-400 font-semibold px-6 py-3.5 rounded-xl transition-all group"
            >
              Book Online
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
