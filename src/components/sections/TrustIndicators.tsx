"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Star, Award, Clock, Users, FileText } from "lucide-react";
import { COMPANY } from "@/lib/utils";

interface StatCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function StatCounter({ end, suffix = "", prefix = "", duration = 2000 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: FileText,
    value: COMPANY.inspectionsCompleted,
    suffix: "+",
    label: "Inspections Completed",
    description: "Professional roof surveys delivered across Essex",
  },
  {
    icon: Star,
    value: COMPANY.rating,
    suffix: "/5",
    label: "Average Rating",
    description: `Based on ${COMPANY.reviewCount}+ verified Google reviews`,
    decimal: true,
  },
  {
    icon: Clock,
    value: COMPANY.experience,
    suffix: " yrs",
    label: "Years in Business",
    description: `Established ${COMPANY.founded} — Essex's trusted roof inspectors`,
  },
  {
    icon: Users,
    value: COMPANY.reviewCount,
    suffix: "+",
    label: "Happy Clients",
    description: "Homeowners and businesses served",
  },
];

const certifications = [
  { icon: Shield, label: "£5M Public Liability Insurance", verified: true },
  { icon: Award, label: "CAA Approved Drone Operators", verified: true },
  { icon: Star, label: "Which? Trusted Trader Approved", verified: true },
  { icon: Shield, label: "NRFC Member", verified: true },
];

export default function TrustIndicators() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map(({ icon: Icon, value, suffix, label, description, decimal }) => (
            <div
              key={label}
              className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center group hover:bg-amber-50 hover:border-amber-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center mx-auto mb-4 transition-colors">
                <Icon className="w-6 h-6 text-amber-600" />
              </div>
              <div className="text-3xl lg:text-4xl font-black text-slate-900 mb-1">
                {decimal ? (
                  <span>{value}{suffix}</span>
                ) : (
                  <StatCounter end={value as number} suffix={suffix} />
                )}
              </div>
              <div className="font-bold text-slate-800 text-sm mb-1">{label}</div>
              <div className="text-xs text-slate-500">{description}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-slate-900 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-white font-bold text-xl mb-2">
              Accreditations & Qualifications
            </h2>
            <p className="text-slate-400 text-sm">
              Fully certified, insured and independently verified — your guarantee of quality
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map(({ icon: Icon, label, verified }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-800 border border-slate-700 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-slate-200 text-xs font-medium leading-snug">{label}</span>
                {verified && (
                  <span className="text-xs text-green-400 font-semibold">✓ Verified</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
