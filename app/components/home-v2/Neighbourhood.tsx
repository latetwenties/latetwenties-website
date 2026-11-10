import { Reveal } from "../Reveal";

// A wink at the Ghostbusters line, then the point: the map pack gets the call.
export function Neighbourhood() {
  return (
    <section className="hood">
      <div className="wrap">
        <Reveal>
          <h2>
            Something&rsquo;s wrong in the neighbourhood.
            <br />
            <em>Who you gonna call?</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p>
            Whoever&rsquo;s top 3 on Google Maps.
            <br />
            Is that you?
          </p>
        </Reveal>
      </div>
    </section>
  );
}
