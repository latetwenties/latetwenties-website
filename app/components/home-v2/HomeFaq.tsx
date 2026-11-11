import { Eyebrow } from "../Eyebrow";

// Homepage FAQ. The 90-day guarantee is for sales calls now, not the site.
export type Faq = { question: string; answer: string };

export const HOME_FAQS: Faq[] = [
  {
    question: "What is local marketing?",
    answer:
      "It's the work that gets a local business found and chosen online. Your website, Google Business Profile, listings, reviews and ads, set up properly and kept active, so the people searching nearby pick you.",
  },
  {
    question: "What is local SEO?",
    answer:
      "It's how Google decides which nearby businesses to show when someone searches your trade, in the map and the results under it. Your Google Business Profile, reviews, listings and website all feed into it. We set those up properly and keep them active, so you show up in your patch.",
  },
  {
    question: "Why does my business need this?",
    answer:
      "Word of mouth still brings the best jobs, and we want it to. But people who hear your name look you up before they ring, and plenty more search for what you do with no name in mind. If you're hard to find, or your profile says very little, some of them call someone else.",
  },
  {
    question: "How soon will I see results?",
    answer:
      "Your website and Google profile go live in two to four weeks. RBM Concrete had an enquiry from a stranger four days after their site went live. TMT Concreting went from 4 quote-worthy enquiries a month to 13 by month three.",
  },
  {
    question: "Can you get me into ChatGPT?",
    answer:
      "We can help, but nobody can promise a spot. ChatGPT reads from Bing, so we set up Bing Places, match your listings and write pages that answer real questions. Then we check where you show up.",
  },
  {
    question: "How much of my time will this take?",
    answer:
      "Very little. Upload your project photos once. After that it's the odd new photo and a quick yes by email when new content goes live. No status meetings.",
  },
  {
    question: "Does this work outside Auckland?",
    answer:
      "Yes. We work with local businesses across New Zealand and Australia, from a Mangawhai builder to Gippsland concreters and a Christchurch bookkeeper. What matters is your patch and how people search in it.",
  },
  {
    question: "Do I own everything?",
    answer:
      "Yes. The website, the domain, the Google Business Profile, every account we set up. All in your name, all yours to keep. If you ever want to move on, there's nothing to untangle.",
  },
  {
    question: "How does it start?",
    answer:
      "Run the free search. In about 40 seconds you'll see who gets the call in your area, on Google, Maps and AI. Then book 15 minutes with Brendan to talk it through, no pitch.",
  },
];

export function HomeFaq({ faqs = HOME_FAQS }: { faqs?: Faq[] } = {}) {
  return (
    <section className="hfaq" id="faq">
      <div className="wrap hfaq-grid">
        <div className="hfaq-left">
          <Eyebrow>Before you ask</Eyebrow>
          <h2 className="hfaq-h2">
            Good questions deserve <em>straight answers.</em>
          </h2>
        </div>

        <div className="hfaq-list">
          {faqs.map((f, i) => (
            <details key={f.question} className="hfaq-item" open={i === 0}>
              <summary>
                <span className="hfaq-icon" aria-hidden="true" />
                {f.question}
              </summary>
              <p>{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
