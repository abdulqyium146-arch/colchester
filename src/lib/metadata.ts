import type { Metadata } from "next";
import { COMPANY } from "./utils";

const BASE_URL = "https://a1roofrepairscolchester.co.uk";
const DEFAULT_OG_IMAGE = "/og-default.jpg";

export function buildMetadata({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  keywords = [],
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${COMPANY.name}`;
  const url = `${BASE_URL}${path}`;

  const defaultKeywords = [
    "roof inspection colchester",
    "roof survey colchester",
    "roof inspector colchester",
    "drone roof inspection colchester",
    "roofing surveyors colchester",
    "roof reports colchester",
    "roof inspection near me",
    "commercial roof surveys colchester",
    "homebuyer roof inspection colchester",
    "roof assessment colchester",
    "essex roofing inspection",
    "A1 roof repairs colchester",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords].join(", "),
    authors: [{ name: COMPANY.name, url: BASE_URL }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: COMPANY.name,
      title: fullTitle,
      description,
      images: [
        {
          url: `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${BASE_URL}${ogImage}`],
    },
    verification: {
      google: "your-google-verification-code",
    },
    other: {
      "geo.region": "GB-ESS",
      "geo.placename": "Colchester, Essex",
      "geo.position": `${COMPANY.geo.lat};${COMPANY.geo.lng}`,
      "ICBM": `${COMPANY.geo.lat}, ${COMPANY.geo.lng}`,
    },
  };
}
