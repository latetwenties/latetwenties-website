import type { Metadata } from "next";

import { breadcrumbList } from "@/lib/schema";

import { Container } from "../components/Container";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Latetwenties handles your data. Plain-spoken privacy policy under the New Zealand Privacy Act 2020.",
};

const UPDATED = "May 2026";

const SCHEMA = breadcrumbList([
  { name: "Home", href: "/" },
  { name: "Privacy", href: "/privacy" },
]);

export default function Privacy() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header />
      <main className="bg-cream">
        <section className="py-24 sm:py-32">
          <Container>
            <p className="text-xs uppercase tracking-[0.28em] opacity-55">
              Privacy
            </p>
            <h1
              className="font-display mt-6 max-w-[18ch] tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4rem)",
                lineHeight: "1.04",
              }}
            >
              How we handle your data.
            </h1>
            <p className="mt-6 max-w-[60ch] text-base leading-[1.7] sm:text-lg">
              We collect as little as we can. We don&rsquo;t sell your data.
              We don&rsquo;t share it with marketers, data brokers, or
              anyone else. Last updated {UPDATED}.
            </p>
          </Container>
        </section>

        <section className="pb-32 sm:pb-44">
          <Container>
            <div className="max-w-[64ch] space-y-12 text-base leading-[1.7]">
              <div>
                <h2
                  className="font-display tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: "1.1" }}
                >
                  Who we are
                </h2>
                <p className="mt-4">
                  Latetwenties is a small marketing agency operated by Brendan
                  MacDonald, based in Auckland and working with local service
                  businesses across New Zealand and Australia. If you have any
                  questions about how we handle your data, email us at{" "}
                  <a
                    href="mailto:team@latetwenties.agency"
                    className="underline underline-offset-4 hover:opacity-65 transition-opacity"
                  >
                    team@latetwenties.agency
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2
                  className="font-display tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: "1.1" }}
                >
                  What we collect
                </h2>
                <p className="mt-4">
                  Three things, only when you give them to us or visit the
                  site.
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    <strong className="font-medium">Site analytics.</strong>{" "}
                    We use Google Analytics 4 to understand which pages
                    people read so we can write better ones. GA places
                    cookies in your browser and reports site usage to us in
                    aggregate. We&rsquo;ve configured it to mask the last
                    portion of your IP address and not collect anything
                    that personally identifies you. If you&rsquo;d rather
                    opt out, Google offers a{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-65 transition-opacity"
                    >
                      browser opt-out add-on
                    </a>
                    , and most browsers let you block analytics cookies in
                    settings.
                  </li>
                  <li>
                    <strong className="font-medium">Booking details.</strong>{" "}
                    If you book a call through our TidyCal page, TidyCal
                    captures your name, email, and any notes you add. We
                    use that to prepare for and run the call.
                  </li>
                  <li>
                    <strong className="font-medium">
                      Email correspondence.
                    </strong>{" "}
                    If you email us directly, we keep the thread for as
                    long as it&rsquo;s useful for the relationship.
                  </li>
                </ul>
              </div>

              <div>
                <h2
                  className="font-display tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: "1.1" }}
                >
                  How we use it
                </h2>
                <p className="mt-4">
                  Google Analytics tells us which pages work and which
                  don&rsquo;t, so we know what to write next. Booking and
                  email data lets us respond to you and run the
                  relationship. That&rsquo;s it.
                </p>
              </div>

              <div>
                <h2
                  className="font-display tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: "1.1" }}
                >
                  Who we share it with
                </h2>
                <p className="mt-4">
                  Nobody, beyond the service providers we depend on to run the
                  site:
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    Google (Analytics), for the site usage data described
                    above.
                  </li>
                  <li>TidyCal, for booking calls.</li>
                  <li>
                    Resend, if we send transactional email (e.g. a booking
                    confirmation).
                  </li>
                  <li>Vercel, who host the site.</li>
                </ul>
                <p className="mt-4">
                  We don&rsquo;t sell your data. We don&rsquo;t share it
                  with marketers, data brokers, or anyone else.
                </p>
              </div>

              <div>
                <h2
                  className="font-display tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: "1.1" }}
                >
                  Your rights
                </h2>
                <p className="mt-4">
                  Under the New Zealand Privacy Act 2020, you have the right
                  to ask what personal information we hold about you, ask us
                  to correct it, and ask us to delete it. Email{" "}
                  <a
                    href="mailto:team@latetwenties.agency"
                    className="underline underline-offset-4 hover:opacity-65 transition-opacity"
                  >
                    team@latetwenties.agency
                  </a>{" "}
                  and we’ll handle it within twenty working days, as the Act
                  requires.
                </p>
              </div>

              <div>
                <h2
                  className="font-display tracking-tight"
                  style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: "1.1" }}
                >
                  Changes to this policy
                </h2>
                <p className="mt-4">
                  If we change how we handle data, we’ll update this page and
                  change the date at the top. The previous version stays
                  available on request.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
