import type { Metadata } from "next";
import Link from "next/link";

import { getLivePosts } from "@/lib/posts";
import { breadcrumbList } from "@/lib/schema";

import { Eyebrow } from "../components/Eyebrow";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";
import { HomeCTA } from "../components/home-v2/HomeCTA";

const DESCRIPTION =
  "Plain-spoken writing for home service businesses on Google rankings, Google Business Profile, reviews, ads and AI search. What works, and why.";

export const metadata: Metadata = {
  title: "Insights",
  description: DESCRIPTION,
  alternates: { canonical: "/insights" },
  openGraph: { description: DESCRIPTION, url: "https://latetwenties.agency/insights" },
  twitter: { description: DESCRIPTION },
};

const SCHEMA = breadcrumbList([
  { name: "Home", href: "/" },
  { name: "Insights", href: "/insights" },
]);

export default function InsightsPage() {
  const posts = getLivePosts();
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header current="insights" />
      <main>
        <section className="v2-hero is-short">
          <div className="wrap v2-hero-inner">
            <div className="v2-eyebrow">
              <span className="dot" />
              <Eyebrow>Insights</Eyebrow>
            </div>
            <h1>
              Plain-spoken writing <em>on getting found.</em>
            </h1>
            <p className="v2-sub">
              The things we wish more local business owners had read before
              their last agency call. No hype, no jargon.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <ul className="ins-list">
              {posts.map((post) => (
                <li key={post.slug} className="ins-row">
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="ins-title">{post.title}</h2>
                    <span className="ins-meta">{post.readTime}</span>
                    <p className="ins-sum">{post.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <HomeCTA />
      </main>
      <Footer />
    </>
  );
}
