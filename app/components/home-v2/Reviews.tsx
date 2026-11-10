import { Reveal } from "../Reveal";

// Word for word from our Google reviews, trimmed to whole sentences. All five
// stars. Shown under the business Brendan matched each reviewer to.
const REVIEWS = [
  {
    name: "Finn Glengarry",
    business: "Glenbuild",
    quote:
      "Brendan is exceptional to deal with. He really listens and understands our business needs.",
  },
  {
    name: "Karen Dunford",
    business: "KD Bookworks",
    quote:
      "Latetwenties solved all my marketing issues all at once which would have taken me hours of research to do.",
  },
  {
    name: "Nick MacDonald",
    business: "TMT Concreting",
    quote:
      "From the very beginning, they took the time to understand our business and provided clear, practical advice without all the usual marketing jargon.",
  },
  {
    name: "Kaila Britton",
    business: "MB Designs",
    quote:
      "I explained my workflow and what I needed, and he was able to turn that into the perfect website that suits my business exactly.",
  },
  {
    name: "Nicki Smith",
    business: "AA Solar",
    quote:
      "Outstanding service for six years. From search and analytics to lead tracking and web development, he delivered every time.",
  },
  {
    name: "Nikki Flexman",
    business: "Sir John Kirwan Foundation",
    quote:
      "If you are lucky enough to get a chance for him to work with you and for you...go for it!",
  },
];

export function Reviews() {
  return (
    <section className="revs" id="reviews">
      <div className="wrap">
        <Reveal>
          <h2>
            Our clients say it best.
            <br />
            <em>From our Google reviews.</em>
          </h2>
        </Reveal>
        <Reveal as="ul" className="revs-grid" delay={100}>
          {REVIEWS.map((r) => (
            <li key={r.name}>
              <span className="revs-stars" role="img" aria-label="5 stars">
                ★★★★★
              </span>
              <blockquote>{r.quote}</blockquote>
              <cite>{r.business}</cite>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
