import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/utils";

const primaryAreas = [
  { name: "Colchester", postcodes: "CO1–CO6", highlight: true },
  { name: "Chelmsford", postcodes: "CM1–CM3", highlight: false },
  { name: "Braintree", postcodes: "CM7–CM8", highlight: false },
  { name: "Witham", postcodes: "CM8", highlight: false },
  { name: "Clacton-on-Sea", postcodes: "CO15–CO16", highlight: false },
  { name: "Ipswich", postcodes: "IP1–IP4", highlight: false },
  { name: "Harwich", postcodes: "CO12", highlight: false },
  { name: "Halstead", postcodes: "CO9", highlight: false },
];

export default function AreasCovered() {
  return (
    <section className="bg-slate-950 py-20 lg:py-28" id="areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
              <MapPin className="w-3.5 h-3.5" />
              Service Coverage Area
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5">
              Roof Inspections Across
              <br />
              <span className="text-gradient">Colchester & Essex</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Based in Colchester, we cover all of Essex and parts of Suffolk,
              providing professional roof inspections and surveys within approximately
              30 miles of Colchester town centre.
            </p>

            {/* Primary areas grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {primaryAreas.map((area) => (
                <div
                  key={area.name}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${
                    area.highlight
                      ? "bg-amber-500/10 border-amber-500/30"
                      : "bg-slate-800 border-slate-700"
                  }`}
                >
                  <MapPin
                    className={`w-4 h-4 shrink-0 ${
                      area.highlight ? "text-amber-400" : "text-slate-500"
                    }`}
                  />
                  <div>
                    <div className={`font-semibold text-sm ${area.highlight ? "text-amber-300" : "text-slate-200"}`}>
                      {area.name}
                    </div>
                    <div className="text-xs text-slate-500">{area.postcodes}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* All areas pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {SERVICE_AREAS.filter(
                (a) => !primaryAreas.map((p) => p.name).includes(a)
              ).map((area) => (
                <span
                  key={area}
                  className="text-xs px-3 py-1.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
                >
                  {area}
                </span>
              ))}
            </div>

            <Link
              href="/areas-we-cover"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30 group"
            >
              View All Service Areas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right — stylised map placeholder */}
          <div className="relative">
            <div className="bg-slate-800 rounded-3xl overflow-hidden aspect-square flex items-center justify-center border border-slate-700">
              {/* Simple SVG map representation */}
              <div className="relative w-full h-full p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl" />

                {/* Radial circles */}
                {[40, 60, 80].map((size) => (
                  <div
                    key={size}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-500/10"
                    style={{ width: `${size}%`, height: `${size}%` }}
                  />
                ))}

                {/* Center point — Colchester */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-amber-500 animate-pulse-amber" />
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                    Colchester HQ
                  </div>
                </div>

                {/* Surrounding dots */}
                {[
                  { name: "Chelmsford", x: "30%", y: "65%" },
                  { name: "Ipswich", x: "65%", y: "25%" },
                  { name: "Clacton", x: "80%", y: "55%" },
                  { name: "Braintree", x: "25%", y: "35%" },
                  { name: "Harwich", x: "82%", y: "35%" },
                  { name: "Witham", x: "35%", y: "72%" },
                ].map(({ name, x, y }) => (
                  <div
                    key={name}
                    className="absolute"
                    style={{ left: x, top: y }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-slate-400 text-xs">
                      {name}
                    </div>
                  </div>
                ))}

                {/* Coverage radius label */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-500 text-xs text-center">
                  ~30 mile radius from Colchester
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 rounded-2xl px-6 py-3 flex items-center gap-3 shadow-2xl whitespace-nowrap">
              <MapPin className="w-5 h-5 text-amber-400" />
              <div>
                <div className="text-white font-bold text-sm">20+ Areas Covered</div>
                <div className="text-slate-500 text-xs">Essex & parts of Suffolk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
