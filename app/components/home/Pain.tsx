import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

const PAIN_POINTS = [
  "Mostly repeat clients. Not many new names.",
  "A newer outfit up the road comes up first when someone searches your trade.",
  "Your Google reviews say 2019. Your last five years of good work say nothing at all.",
];

export function Pain() {
  return (
    <section className="pain">
      <div className="wrap">
        <div className="pain-head">
          <Reveal>
            <Eyebrow num="01">We get you</Eyebrow>
            <h2>
              Word of mouth got you here.
              <br />
              <em>It won&rsquo;t get you there.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="pain-lede">
              You&rsquo;ve earned your reputation the hard way. The work is
              good. But good work only sells itself to people who already know
              you. Right now:
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

        <Reveal as="p" className="pain-kicker" delay={120}>
          None of that means your work slipped. It means nobody&rsquo;s doing
          the online part. That&rsquo;s the part we do.
        </Reveal>
      </div>
    </section>
  );
}
