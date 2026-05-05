import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

const PAIN_POINTS = [
  "Mostly repeat clients, not many new names.",
  "Others in your area seem busier than they should be.",
  "You shouldn't have to be a marketer too.",
];

export function Pain() {
  return (
    <section className="pain">
      <div className="wrap">
        <div className="pain-head">
          <Reveal>
            <Eyebrow num="02">We get you</Eyebrow>
            <h2>
              You&rsquo;ve built
              <br />
              something real.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="pain-lede">
              We work with local service business owners who&rsquo;ve earned
              their reputation the hard way. The work is good. The phone could
              ring more.
            </p>
          </Reveal>
        </div>

        <ol className="pain-stack">
          {PAIN_POINTS.map((point, i) => (
            <Reveal as="li" key={point} className="pain-row" delay={i * 80}>
              <span className="pr-num">{String(i + 1).padStart(2, "0")}</span>
              <p>{point}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
