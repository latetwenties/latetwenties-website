import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

// The promise section is the spine of the offer. The 90-day guarantee applies
// to clients who run the full 90 days: the foundations plus the first three
// months of ongoing care. Confirmed by Brendan, 2026-07.
export function ThePromise() {
  return (
    <section className="promise" id="the-promise">
      <div className="wrap">
        <div className="promise-grid">
          <div className="promise-head">
            <Reveal>
              <Eyebrow num="02">The promise</Eyebrow>
              <h2>
                Here&rsquo;s the deal,
                <br />
                <em>in one sentence.</em>
              </h2>
            </Reveal>
          </div>

          <Reveal as="div" className="promise-body" delay={120}>
          <p className="promise-lead">
            Within 90 days of starting, you&rsquo;ll have more enquiries than
            you did in the 90 days before us. If you don&rsquo;t, we keep
            working for free until you do.
          </p>
          <p>
            There&rsquo;s no lock-in contract. The guarantee asks one thing in
            return: give it the full run, the foundations plus your first three
            months of care. That&rsquo;s the window we need to move your
            numbers.
          </p>
          <p>
            We can put that in writing because we&rsquo;ve done it before, for
            businesses like yours. Scroll down and check the numbers.
          </p>
          <p className="promise-fineprint">
            Fair&rsquo;s fair: the foundations we build need to stay live, and
            we need to see your enquiry numbers. That&rsquo;s it. No other fine
            print.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
