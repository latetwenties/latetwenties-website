import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { Button, GhostLink } from "../Button";
import { BookingMonth } from "../home/BookingMonth";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

// The close on every page: call or email Brendan.
export function HomeCTA() {
  return (
    <section className="close" id="check">
      <div className="wrap close-grid">
        <Reveal as="div" className="close-left">
          <Eyebrow>Get in touch</Eyebrow>
          <h2>
            Talk to Brendan <em>about your area.</em>
          </h2>
        </Reveal>
        <Reveal as="div" className="close-right" delay={100}>
          <p>
            Call {PHONE_DISPLAY} or email {EMAIL}. We&rsquo;ll look at who
            comes up when your customers search, on Google, Maps and AI, and
            tell you straight what we&rsquo;d do.
          </p>
          <p>No pitch. Monday to Friday, 8am to 5pm.</p>
          <div className="close-row">
            <Button href={PHONE_HREF} variant="accent" size="lg">
              Call {PHONE_DISPLAY}
            </Button>
            <GhostLink href={`mailto:${EMAIL}`} arrow={false}>
              or email us
            </GhostLink>
          </div>
          <p className="close-note">
            We take on three new businesses a month. Now booking{" "}
            <BookingMonth />.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
