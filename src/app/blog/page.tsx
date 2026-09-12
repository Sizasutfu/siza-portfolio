import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on what I'm building and what I'm learning.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Blog
        </h1>
        <p className="max-w-xl text-neutral-600 dark:text-neutral-400">
          Notes on what I'm building and what I'm learning.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400">
          No posts yet.
        </p>
      ) : (
        <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block space-y-1.5 py-5"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-medium transition group-hover:opacity-70">
                    {post.title}
                  </h2>
                  <span className="shrink-0 text-xs text-neutral-500">
                    {formatDate(post.date)}
                  </span>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {post.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}