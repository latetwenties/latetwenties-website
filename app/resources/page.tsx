import type { Metadata } from "next";

import { getLivePosts } from "@/lib/posts";
import { breadcrumbList } from "@/lib/schema";

import { Container } from "../components/Container";
import { FinalCTA } from "../components/FinalCTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-spoken writing on Google rankings, Google Business Profile, and the small marketing decisions that actually matter for local service businesses.",
  alternates: { canonical: "/resources" },
};

const SCHEMA = breadcrumbList([
  { name: "Home", href: "/" },
  { name: "Resources", href: "/resources" },
]);

export default function Resources() {
  const posts = getLivePosts();
  return (
    <>
      <JsonLd schema={SCHEMA} />
      <Header />
      <main className="bg-cream">
        <section className="py-24 sm:py-32">
          <Container>
            <p className="text-xs uppercase tracking-[0.28em] opacity-55">
              Resources
            </p>
            <h1
              className="font-display mt-6 max-w-[20ch] tracking-tight"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: "1.02",
              }}
            >
              Plain-spoken writing on getting found.
            </h1>
            <p className="mt-8 max-w-[52ch] text-base leading-[1.7] sm:text-lg">
              We write the things we wish more local business owners had
              read before their last agency call. No hype, no jargon. Just
              what works and why.
            </p>
          </Container>
        </section>

        <section className="pb-32 sm:pb-44">
          <Container>
            <ul className="space-y-12 sm:space-y-16">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="border-t border-ink/10 pt-12 sm:pt-16"
                >
                  <article className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:gap-8">
                    <p className="text-xs uppercase tracking-[0.28em] opacity-55 sm:col-span-3 sm:pt-3">
                      {post.readTime}
                    </p>
                    <div className="sm:col-span-9">
                      <h2
                        className="font-display tracking-tight"
                        style={{
                          fontSize: "clamp(1.75rem, 3.25vw, 2.75rem)",
                          lineHeight: "1.04",
                        }}
                      >
                        <a
                          href={`/blog/${post.slug}`}
                          className="hover:opacity-70 transition-opacity"
                        >
                          {post.title}
                        </a>
                      </h2>
                      <p className="mt-5 max-w-[60ch] text-base leading-[1.65] sm:text-lg">
                        {post.description}
                      </p>
                      <p className="mt-6 text-sm">
                        <a
                          href={`/blog/${post.slug}`}
                          className="underline underline-offset-4 hover:opacity-65 transition-opacity"
                        >
                          Read the post
                        </a>
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <FinalCTA num="02" label="Free Presence Report" />
      </main>
      <Footer />
    </>
  );
}
