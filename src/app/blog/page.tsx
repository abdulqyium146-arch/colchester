import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { Clock, Tag, ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Roofing Blog — Colchester Roof Inspection Advice & Guides",
  description:
    "Expert roofing advice for Colchester and Essex homeowners. Guides on roof maintenance, inspection tips, seasonal advice and how to protect your property.",
  path: "/blog",
});

const blogPosts = [
  {
    slug: "how-often-should-roof-be-inspected",
    title: "How Often Should Your Roof Be Professionally Inspected?",
    excerpt: "Most homeowners wait until there is a visible problem before arranging a roof inspection — by which point the damage is often severe and expensive. Here is the recommended inspection schedule by property type.",
    category: "Roof Maintenance",
    date: "15 April 2025",
    readTime: 6,
    keywords: ["roof inspection frequency", "roof maintenance colchester"],
  },
  {
    slug: "signs-your-roof-needs-inspection-colchester",
    title: "10 Warning Signs Your Colchester Roof Needs an Inspection Now",
    excerpt: "From damp patches on ceilings to visible tile movement, these are the ten warning signs that indicate your Colchester property's roof requires immediate professional assessment.",
    category: "Inspection Advice",
    date: "2 April 2025",
    readTime: 7,
    keywords: ["roof inspection signs", "roof problems colchester"],
  },
  {
    slug: "drone-vs-traditional-roof-inspection",
    title: "Drone Roof Inspection vs Traditional Survey: Which Do You Need?",
    excerpt: "Both methods have distinct advantages. Drone surveys offer safe, comprehensive coverage without scaffolding, while traditional ladder-based inspections allow hands-on assessment. This guide helps you choose.",
    category: "Technology",
    date: "20 March 2025",
    readTime: 5,
    keywords: ["drone roof inspection", "aerial roof survey colchester"],
  },
  {
    slug: "homebuyer-roof-inspection-colchester-guide",
    title: "The Complete Guide to Homebuyer Roof Inspections in Colchester",
    excerpt: "Buying a property in Colchester or Essex? This guide explains exactly what a homebuyer roof report covers, when to order one, and how to use the findings to your advantage.",
    category: "Property Buying",
    date: "8 March 2025",
    readTime: 9,
    keywords: ["homebuyer roof report colchester", "pre purchase roof inspection"],
  },
  {
    slug: "storm-damage-roof-inspection-essex",
    title: "Storm Damage Roof Inspections in Essex: What to Do After Bad Weather",
    excerpt: "After a significant storm, many Essex homeowners face the same dilemma — is my roof damaged? This guide walks you through the immediate steps, what to look for and when to call a professional.",
    category: "Emergency",
    date: "24 February 2025",
    readTime: 6,
    keywords: ["storm damage roof essex", "emergency roof inspection colchester"],
  },
  {
    slug: "flat-roof-inspection-guide-colchester",
    title: "Flat Roof Inspections: A Complete Guide for Colchester Property Owners",
    excerpt: "Flat roofs require different inspection criteria to pitched roofs. This guide explains the key elements of a flat roof inspection, common defects and how often you should inspect.",
    category: "Flat Roofs",
    date: "10 February 2025",
    readTime: 7,
    keywords: ["flat roof inspection colchester", "flat roof survey essex"],
  },
  {
    slug: "roof-moss-problem-colchester",
    title: "Is Moss on Your Roof a Problem? The Colchester Homeowner's Guide",
    excerpt: "Moss is common on Essex roofs — but it is not harmless. This guide explains the damage moss causes, when to treat it and why professional inspection is essential before any treatment.",
    category: "Maintenance",
    date: "28 January 2025",
    readTime: 5,
    keywords: ["roof moss colchester", "moss roof damage essex"],
  },
  {
    slug: "commercial-roof-survey-essex-guide",
    title: "Commercial Roof Surveys in Essex: What Business Owners Need to Know",
    excerpt: "Commercial roofs are among the most expensive assets in any business property portfolio. This guide explains survey requirements, frequencies and what to expect from a professional commercial roof assessment.",
    category: "Commercial",
    date: "15 January 2025",
    readTime: 8,
    keywords: ["commercial roof survey essex", "business roof inspection colchester"],
  },
  {
    slug: "insurance-roof-claim-colchester",
    title: "Making an Insurance Roof Claim in Colchester: The Independent Report Advantage",
    excerpt: "Insurance companies scrutinise roof damage claims carefully. An independent inspection report from A1 Roof Repairs provides the professional evidence needed to support your claim successfully.",
    category: "Insurance",
    date: "5 January 2025",
    readTime: 6,
    keywords: ["insurance roof claim colchester", "roof damage report insurance"],
  },
  {
    slug: "victorian-roof-inspection-colchester",
    title: "Victorian & Edwardian Roof Inspections in Colchester: What to Expect",
    excerpt: "Colchester has a rich stock of Victorian and Edwardian properties. Their original slate and clay tile roofs present specific inspection challenges. Here is what our surveyors look for.",
    category: "Property Types",
    date: "18 December 2024",
    readTime: 6,
    keywords: ["victorian roof inspection colchester", "edwardian property roof survey"],
  },
  {
    slug: "when-to-get-emergency-roof-inspection",
    title: "When Do You Need an Emergency Roof Inspection? A Clear Guide",
    excerpt: "Not every roof problem is an emergency — but some absolutely are. This guide clarifies which situations require immediate professional assessment and when a standard inspection will suffice.",
    category: "Emergency",
    date: "4 December 2024",
    readTime: 4,
    keywords: ["emergency roof inspection", "urgent roof survey colchester"],
  },
  {
    slug: "chimney-inspection-colchester-guide",
    title: "Why Chimney Inspections Are Critical for Colchester Homes",
    excerpt: "Chimneys are one of the most common sources of water ingress in UK properties. This guide explains the key failure points, what we check and how to prevent costly chimney-related damage.",
    category: "Inspection Advice",
    date: "20 November 2024",
    readTime: 5,
    keywords: ["chimney inspection colchester", "chimney survey essex"],
  },
];

const categories = ["All", "Inspection Advice", "Roof Maintenance", "Property Buying", "Emergency", "Commercial", "Technology", "Insurance", "Flat Roofs"];

const categoryColors: Record<string, string> = {
  "Inspection Advice": "bg-blue-100 text-blue-700",
  "Roof Maintenance": "bg-green-100 text-green-700",
  "Property Buying": "bg-purple-100 text-purple-700",
  "Emergency": "bg-red-100 text-red-700",
  "Commercial": "bg-amber-100 text-amber-700",
  "Technology": "bg-cyan-100 text-cyan-700",
  "Insurance": "bg-orange-100 text-orange-700",
  "Flat Roofs": "bg-slate-100 text-slate-700",
  "Maintenance": "bg-green-100 text-green-700",
  "Property Types": "bg-violet-100 text-violet-700",
};

export default function BlogPage() {
  const jsonLd = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="bg-slate-950 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><Breadcrumbs items={[{ label: "Blog" }]} /></div>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-5">
              Roofing Advice for Colchester & Essex
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Roof Inspection
              <br />
              <span className="text-gradient">Advice & Guides</span>
            </h1>
            <p className="text-slate-400 text-lg">
              Expert roofing advice from Colchester&apos;s specialist roof inspectors.
              Practical guides for homeowners and property managers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <div className="mb-12">
            <Link
              href={`/blog/${blogPosts[0].slug}`}
              className="group block bg-slate-900 rounded-3xl p-8 sm:p-10 hover:bg-slate-800 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[blogPosts[0].category] || "bg-slate-100 text-slate-600"}`}>
                      {blogPosts[0].category}
                    </span>
                    <span className="text-slate-500 text-xs">Featured Post</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-400 leading-relaxed mb-5">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-slate-500 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime} min read
                    </div>
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-slate-50 hover:bg-amber-50 border border-slate-100 hover:border-amber-200 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-3.5 h-3.5 text-slate-400" />
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}>
                    {post.category}
                  </span>
                </div>
                <h2 className="font-bold text-slate-900 text-base mb-3 group-hover:text-amber-700 transition-colors leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime} min
                  </div>
                  <div className="flex items-center gap-1 text-amber-600 group-hover:gap-2 transition-all font-semibold">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Book a Roof Inspection?" subtitle="Put our advice into action. Professional roof inspections from £149 across Colchester and Essex." variant="light" />
    </>
  );
}
