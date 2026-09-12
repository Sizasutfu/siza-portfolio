import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return { title: post.title, description: post.summary };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
      <Link
        href="/blog"
        className="inline-block text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        ← All posts
      </Link>

      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {post.title}
        </h1>
        <p className="text-sm text-neutral-500">{formatDate(post.date)}</p>
      </header>

      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}