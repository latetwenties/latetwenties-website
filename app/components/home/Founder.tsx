import Image from "next/image";

import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

export function Founder() {
  return (
    <section className="founder" id="about">
      <div className="wrap">
        <div className="founder-grid">
          <Reveal className="founder-photo">
            <Image
              src="/images/brendan.png"
              alt="Brendan, founder of Latetwenties, at his standing desk."
              fill
              sizes="(max-width: 920px) 100vw, 480px"
              priority={false}
            />
            <div className="cap">Brendan · founder</div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow num="04">A note from Brendan</Eyebrow>
              <h2>
                Hi, I&rsquo;m Brendan.
                <br />
                <em>I run Latetwenties.</em>
              </h2>
            </Reveal>

            <Reveal as="div" className="founder-letter" delay={100}>
              <p>
                I&rsquo;m six coffees deep writing this page, and I&rsquo;ve
                rewritten it four or five times today trying to get it right.
              </p>
              <p>
                Over the last decade in marketing, I&rsquo;ve helped
                one-man-bands land their first customer, and helped bigger
                businesses run campaigns at scale. Out of all of it, the work
                I&rsquo;ve enjoyed most has been with local service business
                owners who&rsquo;ve built something real, to provide for their
                family, and do right by their community.
              </p>
              <div className="pull">
                That&rsquo;s why this exists. We help local service businesses
                move forward, and we get to see the difference it makes.
              </div>
              <p>
                The same care I&rsquo;ve put into getting this page right is
                the care we put into your work. Everything we put out, we
                scrutinise the way <em>you</em> would.
              </p>

              <div className="founder-sig">
                Brendan
                <small>Founder · Latetwenties</small>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
