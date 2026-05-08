import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABanner from "@/components/sections/CTABanner";
import { Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  content: string;
}> = {
  "how-often-should-roof-be-inspected": {
    title: "How Often Should Your Roof Be Professionally Inspected?",
    excerpt: "Most homeowners wait until there is a visible problem before arranging a roof inspection — by which point the damage is often severe and expensive.",
    category: "Roof Maintenance",
    date: "15 April 2025",
    readTime: 6,
    content: `
## The Short Answer

For most residential properties in Colchester and Essex, a professional roof inspection every **3–5 years** is the minimum recommended frequency. Older properties, those with previous issues, or properties in exposed locations should be inspected annually.

## Why Regular Inspection Matters

A roof is one of the most expensive components of any property. A full replacement in the UK typically costs £5,000–£30,000 or more depending on property size and roof type. Yet most homeowners pay little attention to their roof until water comes through the ceiling.

The problem is that roof deterioration is gradual and largely invisible from ground level. Small issues — a slipped tile here, a cracked flashing there — develop slowly over months and years before manifesting as obvious problems. By the time a leak appears internally, the underlying damage is often significant.

## Recommended Inspection Frequencies

**Properties under 10 years old:** Every 5 years is typically sufficient, though a post-warranty inspection at the 10-year mark is strongly recommended.

**Properties 10–25 years old:** Every 3–5 years, depending on roof type and condition found at previous inspection.

**Properties over 25 years old:** Annual inspection is recommended. At this age, roofing materials are often approaching or past their expected service life.

**After any significant weather event:** Any storm with winds over 50mph warrants a professional assessment, regardless of visible damage from street level.

**Following any previous roof repairs:** An inspection 12 months after significant repairs ensures the work has performed correctly and no adjacent issues have developed.

## What Changes the Frequency?

Several factors may require more frequent inspection than the standard recommendations:

- **Flat roofs** — should be inspected annually as they are more vulnerable to deterioration
- **Properties near the coast** — salt air accelerates material degradation (relevant to Clacton, Harwich and coastal Essex)
- **Properties with significant tree overhang** — debris accumulation and root damage accelerates defects
- **Properties with known previous issues** — monitor annually until confident the underlying cause is resolved
- **Rental properties** — landlord duty of care obligations support annual inspections

## The Cost Argument

A professional roof inspection in Colchester from A1 Roof Repairs starts from £149. Compare this to the cost of water ingress damage repair, ceiling replacement, structural timber treatment or emergency reroofing — any of which can run into thousands of pounds.

Regular inspection is, simply put, the most cost-effective maintenance decision a property owner can make.

## Book Your Colchester Roof Inspection

If you cannot remember the last time your roof was professionally inspected, now is the right time. Call A1 Roof Repairs Colchester on **01206 123456** to book an inspection, or submit an enquiry online.
    `,
  },
  "signs-your-roof-needs-inspection-colchester": {
    title: "10 Warning Signs Your Colchester Roof Needs an Inspection Now",
    excerpt: "From damp patches on ceilings to visible tile movement, these are the ten warning signs that indicate your property's roof requires immediate professional assessment.",
    category: "Inspection Advice",
    date: "2 April 2025",
    readTime: 7,
    content: `
## Recognising the Warning Signs

Your roof rarely fails dramatically or without warning. In most cases, there are early indicators that something is wrong — if you know what to look for. Here are the ten most important warning signs that your Colchester property's roof needs professional inspection now.

## 1. Damp Patches on Ceilings or Walls

Water staining or damp patches, particularly near the roof line or in upper rooms, are one of the clearest indicators of a roof problem. Note that the entry point of water is often not directly above the visible damp patch — water travels along rafters and membranes before appearing.

## 2. Visible Tile or Slate Movement

Any tiles or slates that appear to have shifted from their original position — slipped, cracked or missing entirely — require immediate attention. Even one displaced tile exposes the roof deck to weather.

## 3. Moss, Lichen or Algae Growth

Heavy biological growth retains moisture against roofing materials, accelerates degradation and blocks gutters. It can also indicate underlying moisture issues.

## 4. Visible Daylight in the Loft

Check your loft space on a bright day. Any daylight visible through the roof structure indicates gaps, missing tiles or failed underlays that allow not just light but also water ingress.

## 5. Granules in the Gutters

If you have mineral-surfaced felt or asphalt shingles, finding significant granule deposits in your gutters indicates the weathering surface is deteriorating.

## 6. Sagging or Uneven Roof Line

Any visible dip, sag or unevenness in the roof line as seen from street level may indicate structural issues with rafters or purlins — requiring urgent professional assessment.

## 7. Failed or Cracked Flashing

Lead, mortar or aluminium flashings around chimneys, skylights and abutment walls are primary water entry points. Any cracking, lifting or gap is a significant concern.

## 8. Persistent Damp Smell in Loft

A musty or damp smell in the loft space often precedes visible water damage — indicating moisture entering from above before it has had chance to cause obvious staining.

## 9. Increased Energy Bills

Poor roof ventilation or damaged insulation can result in significant heat loss through the roof, reflected in rising energy bills.

## 10. Property Age and No Recent Inspection

If your Colchester property is over 15 years old and you cannot recall the last professional roof inspection — that alone is sufficient reason to book one now.

## Book an Inspection

Spotted any of these signs? Call A1 Roof Repairs Colchester on **01206 123456** for a professional assessment. We cover all Colchester postcodes and across Essex.
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: ["roof inspection colchester", post.category.toLowerCase()],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) notFound();

  const jsonLd = [
    articleSchema(post.title, post.excerpt, slug, post.date),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog" },
      { name: post.title, url: `/blog/${slug}` },
    ]),
  ];

  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="bg-slate-950 pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Breadcrumbs items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]} />
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-400">
              {post.category}
            </span>
            <span className="text-slate-500 text-sm">{post.date}</span>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="prose prose-slate prose-lg max-w-none">
                {post.content.trim().split("\n").map((line, i) => {
                  if (line.startsWith("## ")) {
                    return <h2 key={i} className="text-2xl font-black text-slate-900 mt-8 mb-4">{line.slice(3)}</h2>;
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return <p key={i} className="font-bold text-slate-900">{line.slice(2, -2)}</p>;
                  }
                  if (line.startsWith("- ")) {
                    return <li key={i} className="text-slate-600 ml-4">{line.slice(2)}</li>;
                  }
                  if (line.trim() === "") return <br key={i} />;
                  return <p key={i} className="text-slate-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
                })}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to all articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Book a Roof Inspection</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Professional roof inspections from £149. Written report within 24 hours.
                </p>
                <a
                  href="tel:01206123456"
                  className="block text-center bg-amber-500 hover:bg-amber-600 text-white font-bold px-4 py-3 rounded-xl transition-all text-sm mb-2"
                >
                  01206 123456
                </a>
                <Link
                  href="/contact"
                  className="block text-center border border-slate-200 text-slate-700 hover:text-amber-600 font-semibold px-4 py-3 rounded-xl transition-all text-sm"
                >
                  Book Online
                </Link>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-3">Our Services</h3>
                <div className="space-y-2">
                  {[
                    { label: "Roof Inspections", href: "/roof-inspections" },
                    { label: "Drone Surveys", href: "/drone-roof-inspections" },
                    { label: "Homebuyer Reports", href: "/homebuyer-roof-reports" },
                    { label: "Emergency Inspection", href: "/emergency-roof-inspection" },
                  ].map(({ label, href }) => (
                    <Link key={href} href={href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-amber-600 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner title="Found This Useful?" subtitle="Book a professional roof inspection in Colchester today. From £149 with 24hr report." variant="light" />
    </>
  );
}
