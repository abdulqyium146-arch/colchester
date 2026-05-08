import type { MetadataRoute } from "next";

const BASE_URL = "https://a1roofrepairscolchester.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/roof-inspections", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/roof-surveys", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/drone-roof-inspections", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/homebuyer-roof-reports", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/commercial-roof-surveys", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/emergency-roof-inspection", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/insurance-roof-assessments", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/roof-leak-investigation", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/colchester-roof-inspection", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/areas-we-cover", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
    { url: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/case-studies", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
