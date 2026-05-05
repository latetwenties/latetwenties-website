import type { Metadata } from "next";
import { Inter_Tight, JetBrains_Mono, Newsreader } from "next/font/google";
import localFont from "next/font/local";

import { TabTitleNudge } from "./components/TabTitleNudge";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const lustPro = localFont({
  src: [
    {
      path: "./fonts/lust-pro-no-4.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/lust-pro-no-4it.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-display-family",
  display: "swap",
});

const lustStencil = localFont({
  src: "./fonts/lust-stencil.otf",
  variable: "--font-stencil-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://latetwenties.agency"),
  title: {
    default:
      "Latetwenties | Local marketing for service businesses, Auckland",
    template: "%s | Latetwenties",
  },
  description:
    "A small Auckland marketing agency helping local service businesses across New Zealand get found online and chosen by local customers. Plain-spoken, no jargon.",
  openGraph: {
    title: "Latetwenties | Local marketing for service businesses, Auckland",
    description:
      "A small Auckland marketing agency helping local service businesses across New Zealand get found online and chosen by local customers.",
    url: "https://latetwenties.agency",
    siteName: "Latetwenties",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latetwenties | Local marketing for service businesses, Auckland",
    description:
      "A small Auckland marketing agency helping local service businesses across New Zealand get found online and chosen by local customers.",
  },
};

const SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://latetwenties.agency/#organization",
    name: "Latetwenties",
    url: "https://latetwenties.agency",
    logo: "https://latetwenties.agency/icon.svg",
    description:
      "Local marketing for service businesses in Auckland. We help local service businesses across New Zealand and Australia get found online and chosen by local customers.",
    email: "team@latetwenties.agency",
    telephone: "+64-9-884-4418",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressRegion: "Auckland",
      addressCountry: "NZ",
    },
    founder: { "@id": "https://latetwenties.agency/#brendan" },
    areaServed: [
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Australia" },
    ],
    sameAs: [
      "https://www.linkedin.com/company/latetwenties",
      "https://www.facebook.com/latetwenties",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://latetwenties.agency/#localbusiness",
    name: "Latetwenties",
    image: "https://latetwenties.agency/icon.svg",
    url: "https://latetwenties.agency",
    telephone: "+64-9-884-4418",
    email: "team@latetwenties.agency",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auckland",
      addressRegion: "Auckland",
      addressCountry: "NZ",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "Country", name: "New Zealand" },
      { "@type": "Country", name: "Australia" },
    ],
    founder: { "@id": "https://latetwenties.agency/#brendan" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://latetwenties.agency/#brendan",
    name: "Brendan MacDonald",
    jobTitle: "Founder",
    worksFor: { "@id": "https://latetwenties.agency/#organization" },
    url: "https://latetwenties.agency/about",
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://latetwenties.agency/#website",
    name: "Latetwenties",
    url: "https://latetwenties.agency",
    inLanguage: "en-NZ",
    publisher: { "@id": "https://latetwenties.agency/#organization" },
  },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-NZ"
      className={`${interTight.variable} ${newsreader.variable} ${jetbrainsMono.variable} ${lustPro.variable} ${lustStencil.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </head>
      <body className="min-h-dvh">
        <TabTitleNudge />
        {children}
      </body>
    </html>
  );
}
