import { BOOKING_URL, FREE_SEARCH_HREF } from "@/lib/site";
import { Button, GhostLink } from "../Button";
import { BookingMonth } from "../home/BookingMonth";
import { Eyebrow } from "../Eyebrow";
import { Reveal } from "../Reveal";

// The close on every page: one lead magnet (the free search), then a call
// with Brendan.
export function HomeCTA() {
  return (
    <section className="close" id="check">
      <div className="wrap close-grid">
        <Reveal as="div" className="close-left">
          <Eyebrow>Free search</Eyebrow>
          <h2>
            Who gets the call <em>in your area?</em>
          </h2>
        </Reveal>
        <Reveal as="div" className="close-right" delay={100}>
          <p>
            It takes about 40 seconds. We run the search your customer runs,
            and show you who comes up on Google, Maps and AI.
          </p>
          <p>Then talk it through with Brendan. 15 minutes, no pitch.</p>
          <div className="close-row">
            <Button href={FREE_SEARCH_HREF} variant="accent" size="lg">
              Run the free search
            </Button>
            <GhostLink href={BOOKING_URL} arrow={false}>
              or book a call
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
