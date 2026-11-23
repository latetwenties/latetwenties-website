import { CONTACT_HREF, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Button, GhostLink } from "../Button";
import { Eyebrow } from "../Eyebrow";

export function HomeHero() {
  return (
    <section className="h-hero" id="top">
      <div className="wrap">
        <div className="v2-eyebrow">
          <span className="dot" />
          {/* Matches the GBP primary category wording. Keep as is. */}
          <Eyebrow>Auckland based Local Marketing Agency</Eyebrow>
        </div>
        <h1>
          Being the best home service business isn&rsquo;t enough.{" "}
          <em>You have to be the most visible, too.</em>
        </h1>
        {/* TODO(source): the 44% figure came with the Nov 2026 design
            handoff without a citation. It is commonly attributed to local
            pack click-share studies (the top three map results taking about
            44% of clicks on a local search). Brendan to confirm the exact
            study and year, and record it here. */}
        <p className="h-hero-sub">
          44% of local business enquiries go to the top 3 in search. Are you in
          it?
        </p>
        <div className="h-hero-row">
          <div className="h-hero-ctas">
            <Button href={CONTACT_HREF} size="lg">
              Get in touch
            </Button>
            <GhostLink href="/what-we-do" tone="strong" arrow={false}>
              What we do
            </GhostLink>
          </div>
          <span className="mono-note">
            Or call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </span>
        </div>
      </div>
    </section>
  );
}
