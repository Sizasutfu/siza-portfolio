import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="space-y-6">
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          Siza Mndzawe
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          I build full-stack apps end to end.
        </h1>

        <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          Next.js and React Native on the front, Express and MySQL behind
          it. I care about software that stays out of the way.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/projects"
            className="rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            See my work
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
          >
            Get in touch
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-neutral-500 transition hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            All projects →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Closing note */}
      <section className="border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <p className="max-w-xl text-neutral-600 dark:text-neutral-400">
          I'm open to freelance work and full-time roles. The fastest way
          to reach me is email.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-medium underline underline-offset-4 transition hover:opacity-70"
        >
          sutfusiza@gmail.com
        </Link>
      </section>
    </div>
  );
}