import type { Metadata } from "next";
import Image from "next/image";

import { breadcrumbList } from "@/lib/schema";

import { CaseTileGrid } from "../components/CaseTileGrid";
import { Eyebrow } from "../components/Eyebrow";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "About Latetwenties | Small Auckland marketing agency" },
  description:
    "We help local service owners get found online and chosen by local customers, with a plain promise: more enquiries in 90 days, or we work free until you get them. The story behind why that guarantee exists.",
  alternates: { canonical: "/about" },
};

const SCHEMA = breadcrumbList([
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
]);

export default function About() {
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header current="about" />
      <main>
        <section className="ab-hero">
          <div className="wrap">
            <Reveal>
              <Eyebrow>About</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="ab-h1">
                We treat your business
                <br />
                <em>like our own.</em>
              </h1>
            </Reveal>
            <Reveal as="div" className="ab-lede" delay={160}>
              <p>
                Latetwenties is for local service owners who are good at the
                work and tired of being the best-kept secret in town. We get
                you found online and chosen by local customers, and we treat
                the job with the same seriousness you treat yours.
              </p>
              <p>
                If we&rsquo;re asking you to trust a marketing partner off the
                internet, the risk should sit with us, not you. Here&rsquo;s
                the story of why we work the way we do.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="ab-brendan">
          <div className="wrap">
            <div className="abf-grid">
              <Reveal className="abf-photo">
                <Image
                  src="/images/brendan.png"
                  alt="Brendan, founder of Latetwenties."
                  fill
                  sizes="(max-width: 920px) 360px, 480px"
                />
                <div className="cap">Brendan · founder</div>
              </Reveal>

              <div>
                <Reveal>
                  <Eyebrow num="01">Founder</Eyebrow>
                  <h2 className="abf-h2">
                    Brendan
                    <br />
                    <em>MacDonald.</em>
                  </h2>
                </Reveal>

                <Reveal as="div" className="abf-letter" delay={100}>
                  <p>
                    Hi, I&rsquo;m Brendan. In between evening play fights
                    with my kids and church on Sundays, I&rsquo;m sitting
                    here, in front of a screen, writing, coding and
                    strategising for hard-working local business owners,
                    helping them get their brand and work known in their
                    communities.
                  </p>
                  <p>
                    I was thrown into the web agency world in 2015. After a
                    gap year, travelling the country playing music as part
                    of a performing arts school, it was a new thing to sink
                    my teeth into, and it stuck. I moved from web, to paid
                    media, to performance, to social, and now full circle
                    back to here. Ten years in the trenches, used to lift up
                    small business owners caught in the middle: established,
                    but not yet ready to pay big-agency rates.
                  </p>
                  <div className="abf-pull">
                    I wanted to build a system that did what was actually
                    needed to get ahead. Strip out the bells and whistles.
                    Deliver something effective, and affordable.
                  </div>
                  <p>
                    That&rsquo;s what Latetwenties is about. And it&rsquo;s
                    the work I&rsquo;m proud to spend my time on.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="ab-mana">
          <div className="wrap">
            <Reveal>
              <Eyebrow num="02">How we work</Eyebrow>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="ab-mana-word">M&#257;naakitanga.</h2>
            </Reveal>

            <div className="ab-mana-body">
              <Reveal delay={100}>
                <p>
                  A M&#257;ori value centred on how we care for others.
                  <br />
                  It brings together <em>mana</em> (a person&rsquo;s
                  standing, dignity, spirit) and <em>aki</em> (to uplift or
                  support).
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>It&rsquo;s not about transactions. It&rsquo;s about people.</p>
              </Reveal>
              <Reveal delay={180}>
                <p>
                  In our world, that shows up in who we choose to work with.
                  <br />
                  Local service businesses. Owner-led. Close to the work.
                  Close to their community.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p>
                  You&rsquo;re not a board.
                  <br />
                  You&rsquo;re not a dashboard.
                  <br />
                  You&rsquo;re not a set of KPIs needing explanation.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p>
                  You&rsquo;re the person behind it. The one who built it,
                  backs it, and cares about how it shows up.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <p>That matters.</p>
              </Reveal>
              <Reveal delay={340}>
                <p>
                  It means we listen properly.
                  <br />
                  We take what you&rsquo;ve built seriously.
                  <br />
                  We carry your reputation with the same care you would.
                </p>
              </Reveal>
              <Reveal delay={380}>
                <p>
                  The work is important.
                  <br />
                  But it starts with the person.
                </p>
              </Reveal>
            </div>

            <Reveal delay={440}>
              <h3 className="ab-mana-coda">
                That&rsquo;s how we approach it.
              </h3>
            </Reveal>
          </div>
        </section>

        <section className="case">
          <div className="wrap">
            <div className="case-head">
              <Reveal>
                <p className="case-pull">
                  Local businesses,
                  <br />
                  <em>found and chosen.</em>
                </p>
              </Reveal>
              <Reveal as="p" className="case-meta" delay={80}>
                <span className="case-meta-num">03</span> The proof · Real
                clients · Real numbers · Recent work
              </Reveal>
            </div>
            <CaseTileGrid />
          </div>
        </section>

        <FinalCTA num="04" label="Free Presence Report" />
      </main>
      <Footer />
    </>
  );
}
