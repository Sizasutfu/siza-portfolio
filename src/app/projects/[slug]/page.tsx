import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <article className="space-y-10">
      <Link
        href="/projects"
        className="inline-block text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        ← All projects
      </Link>

      <header className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <span className="shrink-0 text-sm text-neutral-500">
            {project.year}
          </span>
        </div>

        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      {project.body && project.body.length > 0 && (
        <div className="space-y-4 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          {project.body.map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed text-neutral-700 dark:text-neutral-300"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {project.features && project.features.length > 0 && (
        <section className="space-y-6 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h2 className="text-sm font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Features
          </h2>
          <dl className="space-y-5">
            {project.features.map((feature) => (
              <div key={feature.name} className="space-y-1">
                <dt className="font-medium">{feature.name}</dt>
                <dd className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {feature.detail}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {project.links.length > 0 && (
        <section className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <h2 className="text-sm font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Links
          </h2>
          <ul className="mt-4 space-y-2">
            {project.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium underline underline-offset-4 transition hover:opacity-70"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}