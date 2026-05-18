import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

const PAIN_POINTS = [
  "Mostly repeat clients, not many new names.",
  "A newer outfit up the road comes up first when you search.",
  "A half-built website sits in a tab you keep meaning to close.",
];

export function Pain() {
  return (
    <section className="pain">
      <div className="wrap">
        <div className="pain-head">
          <Reveal>
            <Eyebrow num="02">We get you</Eyebrow>
            <h2>
              Word of mouth got you here.
              <br />
              <em>It won&rsquo;t get you there.</em>
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
