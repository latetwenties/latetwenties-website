import { Eyebrow } from "../Eyebrow";
import s from "../../lab/who-gets-the-call/who-gets-the-call.module.css";
import { WhoGetsTheCall } from "../../lab/who-gets-the-call/WhoGetsTheCall";
import { HeroWord } from "./HeroWord";

// The "Who gets the call?" lead magnet as the hero. The tool carries the
// instructions, so the left side only says who we are and what we promise.
export function HeroV2() {
  return (
    <section className={s.hero} id="top">
      <div className="wrap">
        <div className={s.cols}>
          <div className="hv2-left">
            <div className="hero-eyebrow">
              <span className="dot" />
              <Eyebrow>Local marketing · Auckland, working across NZ &amp; Australia</Eyebrow>
            </div>
            <h1 className={`${s.headline} hv2-wgtc-h1`}>
              <span className="hv2-h1-line">Someone nearby</span>{" "}
              <span className="hv2-h1-line">
                needs a <HeroWord />.
              </span>{" "}
              <span className="hv2-h1-line">Who do they ring?</span>
            </h1>
            <p className="hv2-lede">
              Latetwenties gets local businesses found on Google, Maps and AI
              search. More enquiries in 90 days, or we keep working free until
              you get them.
            </p>
          </div>
          <WhoGetsTheCall />
        </div>
      </div>
    </section>
  );
}
