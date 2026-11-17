import Link from "next/link";

import { getLivePosts } from "@/lib/posts";

import { GhostLink } from "../Button";

// Homepage row linking the newest live posts. Its job is distribution: the
// homepage is the most crawled page on the site, and a post linked from it is
// found in hours, where one two clicks deep can sit undiscovered for weeks.
// Reads the date-gated list, so a queued post never shows here early; the
// publish cron revalidates "/" so a post appears on its day.
export function LatestInsights({ count = 3 }: { count?: number }) {
  const posts = getLivePosts().slice(0, count);
  if (!posts.length) return null;
  return (
    <section className="svc-reading home-insights">
      <div className="wrap">
        <div className="svc-proof-head">
          <h2>
            Latest from <em>our Insights.</em>
          </h2>
          <GhostLink href="/insights" tone="strong">
            All insights
          </GhostLink>
        </div>
        <ul className="ins-list">
          {posts.map((post) => (
            <li key={post.slug} className="ins-row">
              <Link href={`/blog/${post.slug}`}>
                <h3 className="ins-title">{post.title}</h3>
                <span className="ins-meta">{post.readTime}</span>
                <p className="ins-sum">{post.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
