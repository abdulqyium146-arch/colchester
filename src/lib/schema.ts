import { COMPANY } from "./utils";

const BASE_URL = "https://a1roofrepairscolchester.co.uk";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${BASE_URL}/#business`,
    name: COMPANY.name,
    alternateName: "A1 Roof Repairs",
    description:
      "Colchester's leading roof inspection and survey specialists. Professional roof inspections, drone surveys, homebuyer reports and commercial assessments across Essex.",
    url: BASE_URL,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: String(COMPANY.founded),
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.county,
      postalCode: COMPANY.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Colchester",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Essex",
        },
      },
      { "@type": "City", name: "Chelmsford" },
      { "@type": "City", name: "Braintree" },
      { "@type": "City", name: "Ipswich" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(COMPANY.rating),
      reviewCount: String(COMPANY.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roof Inspection Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Roof Inspection Colchester",
            description: "Professional visual roof inspection with written report",
          },
          price: "149",
          priceCurrency: "GBP",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Drone Roof Survey Colchester",
            description: "CAA-approved drone roof survey with 4K imagery",
          },
          price: "199",
          priceCurrency: "GBP",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Homebuyer Roof Report",
            description: "Independent pre-purchase roof assessment",
          },
          price: "199",
          priceCurrency: "GBP",
        },
      ],
    },
    sameAs: [
      COMPANY.social.facebook,
      COMPANY.social.google,
    ],
  };
}

export function serviceSchema(
  name: string,
  description: string,
  url: string,
  price?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "City",
      name: "Colchester",
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "GBP",
        availability: "https://schema.org/InStock",
      },
    }),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function reviewSchema(reviews: {
  author: string;
  rating: number;
  text: string;
  date: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
      datePublished: r.date,
    })),
  };
}

export function articleSchema(
  title: string,
  description: string,
  slug: string,
  datePublished: string,
  image?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished,
    author: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    ...(image && { image: `${BASE_URL}${image}` }),
  };
}
