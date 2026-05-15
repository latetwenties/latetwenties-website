import type { Metadata } from "next";

import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { CaseStudy } from "./components/home/CaseStudy";
import { Founder } from "./components/home/Founder";
import { Hero } from "./components/home/Hero";
import { Pain } from "./components/home/Pain";
import { SearchProof } from "./components/home/SearchProof";
import { TwoThings } from "./components/home/TwoThings";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SearchProof />
        <Pain />
        <TwoThings />
        <CaseStudy />
        <Founder />
        <FinalCTA num="06" label="Free presence check" />
      </main>
      <Footer />
    </>
  );
}
