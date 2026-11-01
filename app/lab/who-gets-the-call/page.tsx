import type { Metadata } from "next";

import { Eyebrow } from "../../components/Eyebrow";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import s from "./who-gets-the-call.module.css";
import { WhoGetsTheCall } from "./WhoGetsTheCall";

// Private prototype: unlinked, not in the sitemap, and kept out of search.
export const metadata: Metadata = {
  title: "Who gets the call? (prototype)",
  robots: { index: false, follow: false, nocache: true },
};

export default function WhoGetsTheCallPage() {
  return (
    <>
      <Header />
      <main>
        <section className={s.hero}>
          <div className="wrap">
            <div className={s.cols}>
              <div>
                <div className="hero-eyebrow">
                  <span className="dot" />
                  <Eyebrow>Local marketing · Auckland, working across NZ &amp; Australia</Eyebrow>
                </div>
                <h1 className={s.headline}>
                  Someone near you needs what you do. Who do they ring?
                </h1>
                <p className={s.lede}>
                  Type in your business and the job you want more of. We&rsquo;ll run
                  the search the way your customer does, on Google, Maps and
                  ChatGPT, and show you where the call goes.
                </p>
                <p className={s.trust}>No pitch · No lock-ins</p>
              </div>
              <WhoGetsTheCall />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
