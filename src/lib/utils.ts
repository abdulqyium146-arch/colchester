import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\d{5})(\d{6})/, "$1 $2");
}

export const COMPANY = {
  name: "A1 Roof Repairs Colchester",
  shortName: "A1 Roof Repairs",
  phone: "01206 123456",
  phonePlain: "01206123456",
  email: "info@a1roofrepairscolchester.co.uk",
  address: {
    street: "123 High Street",
    city: "Colchester",
    county: "Essex",
    postcode: "CO1 1AA",
    country: "United Kingdom",
  },
  geo: {
    lat: 51.8893,
    lng: 0.9025,
  },
  hours: {
    weekdays: "Mon–Fri 7:00am–7:00pm",
    saturday: "Sat 8:00am–5:00pm",
    sunday: "Emergency calls only",
  },
  emergency: "24/7 Emergency",
  social: {
    facebook: "https://facebook.com/a1roofrepairscolchester",
    instagram: "https://instagram.com/a1roofrepairscolchester",
    google: "https://g.page/a1roofrepairscolchester",
  },
  founded: 2008,
  experience: new Date().getFullYear() - 2008,
  inspectionsCompleted: 3500,
  rating: 4.9,
  reviewCount: 347,
} as const;

export const SERVICE_AREAS = [
  "Colchester",
  "Chelmsford",
  "Braintree",
  "Witham",
  "Clacton-on-Sea",
  "Halstead",
  "Sudbury",
  "Ipswich",
  "Brentwood",
  "Basildon",
  "Harwich",
  "Mersea Island",
  "Tiptree",
  "Coggeshall",
  "Dedham",
  "Manningtree",
  "Wivenhoe",
  "West Mersea",
  "Marks Tey",
  "Stanway",
] as const;

export const SERVICES = [
  {
    id: "roof-inspections",
    title: "Roof Inspections",
    slug: "roof-inspections",
    icon: "Search",
    description: "Comprehensive visual roof inspections identifying all defects, damage, and potential issues.",
    price: "From £149",
  },
  {
    id: "roof-surveys",
    title: "Roof Surveys",
    slug: "roof-surveys",
    icon: "ClipboardList",
    description: "Detailed structural roof surveys with written reports for homeowners and buyers.",
    price: "From £249",
  },
  {
    id: "drone-inspections",
    title: "Drone Roof Inspections",
    slug: "drone-roof-inspections",
    icon: "Plane",
    description: "CAA-approved drone surveys for safe, detailed inspection of all roof types.",
    price: "From £199",
  },
  {
    id: "homebuyer-reports",
    title: "Homebuyer Roof Reports",
    slug: "homebuyer-roof-reports",
    icon: "Home",
    description: "Independent pre-purchase roof assessments protecting buyers from costly surprises.",
    price: "From £199",
  },
  {
    id: "commercial-surveys",
    title: "Commercial Roof Surveys",
    slug: "commercial-roof-surveys",
    icon: "Building2",
    description: "Scheduled maintenance surveys and condition reports for commercial flat and pitched roofs.",
    price: "From £349",
  },
  {
    id: "emergency-inspection",
    title: "Emergency Roof Inspection",
    slug: "emergency-roof-inspection",
    icon: "AlertTriangle",
    description: "Same-day emergency inspection response for storm damage, leaks, and urgent issues.",
    price: "From £199",
  },
] as const;
