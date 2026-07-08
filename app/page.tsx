import type { Metadata } from "next";

import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BookingMonth } from "./components/home/BookingMonth";
import { CaseStudy } from "./components/home/CaseStudy";
import { Founder } from "./components/home/Founder";
import { Hero } from "./components/home/Hero";
import { Pain } from "./components/home/Pain";
import { ThePromise } from "./components/home/ThePromise";
import { TwoThings } from "./components/home/TwoThings";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const PRESENCE_REPORT_BODY = (
  <>
    <p>
      Tell us your business name. We&rsquo;ll go looking the way a customer
      would, Google, maps, reviews, your website, and record you a short video
      walking through what we find: the things costing you enquiries, and how
      to fix each one. Some you can fix yourself this week, free.
    </p>
    <p>
      No pitch on the video. It&rsquo;s yours either way. If you want help with
      the rest, you&rsquo;ll know where we are.
    </p>
  </>
);

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Pain />
        <ThePromise />
        <TwoThings />
        <CaseStudy />
        <Founder />
        <FinalCTA
          num="06"
          label="Free Presence Report"
          heading={
            <>
              Want to see <em>exactly</em>
              <br />
              what&rsquo;s costing you enquiries?
            </>
          }
          body={PRESENCE_REPORT_BODY}
          cta="Get my free Presence Report"
          note={
            <>
              We take on three new businesses a month, so the system gets done
              properly. Currently booking <BookingMonth />.
            </>
          }
        />
      </main>
      <Footer />
    </>
  );
}
