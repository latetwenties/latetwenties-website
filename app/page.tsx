import type { Metadata } from "next";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { JsonLd } from "./components/JsonLd";
import { GetFoundWith } from "./components/home-v2/GetFoundWith";
import { HomeCTA } from "./components/home-v2/HomeCTA";
import { HOME_FAQS, HomeFaq } from "./components/home-v2/HomeFaq";
import { HomeHero } from "./components/home-v2/HomeHero";
import { OurPatch } from "./components/home-v2/OurPatch";
import { Testimonials } from "./components/home-v2/Testimonials";
import { VideoZoom } from "./components/home-v2/VideoZoom";
import { faqPage } from "@/lib/schema";

const DESCRIPTION =
  "Auckland based local marketing agency for home service businesses across NZ and Australia. We get you found on Google, Maps and AI search, so the calls come to you.";

export const metadata: Metadata = {
  title: {
    absolute: "Latetwenties | Local marketing agency for home service businesses, Auckland",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { description: DESCRIPTION, url: "https://latetwenties.agency" },
  twitter: { description: DESCRIPTION },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <VideoZoom />
        <GetFoundWith />
        <OurPatch />
        <Testimonials />
        <HomeFaq />
        <HomeCTA />
      </main>
      <Footer />
      <JsonLd schema={faqPage(HOME_FAQS)} />
    </>
  );
}
