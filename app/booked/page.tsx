import type { Metadata } from "next";

import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BookedEvent } from "./BookedEvent";

// TidyCal redirects here after a confirmed 15-minute booking. Kept out of
// search; its only jobs are to say thanks and fire the book_call conversion.
export const metadata: Metadata = {
  title: "You're booked in",
  robots: { index: false, follow: false },
};

export default function BookedPage() {
  return (
    <>
      <Header />
      <main>
        <section className="v2-hero is-short">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="dot" />
              <Eyebrow>Booked</Eyebrow>
            </div>
            <h1>
              You&rsquo;re booked in. <em>Talk soon.</em>
            </h1>
            <p className="v2-sub">
              The calendar invite is on its way to your inbox. If you ran the
              free search, have your result handy and we&rsquo;ll start there.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <BookedEvent />
    </>
  );
}
