import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  summary,
  experience,
  education,
  skillGroups,
} from "@/data/cv";

export const metadata: Metadata = {
  title: "CV",
  description: "Siza Mndzawe — full-stack developer. Experience, projects and skills.",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 border-t border-neutral-200 pt-8 dark:border-neutral-800">
      <h2 className="text-sm font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Entry({ entry }: { entry: (typeof experience)[number] }) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-medium">
          {entry.role}
          <span className="font-normal text-neutral-500"> · {entry.org}</span>
        </h3>
        <span className="text-sm text-neutral-500">{entry.period}</span>
      </div>
      {entry.location && (
        <p className="text-sm text-neutral-500">{entry.location}</p>
      )}
      {entry.points.length > 0 && (
        <ul className="space-y-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {entry.points.map((point) => (
            <li key={point} className="flex gap-2.5">
              <span aria-hidden="true" className="text-neutral-400">
                —
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CVPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Siza Mndzawe
          </h1>
          <a
            href="/mycv.pdf"
            className="text-sm font-medium underline underline-offset-4 transition hover:opacity-70"
          >
            Download PDF
          </a>
        </div>

        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Full-Stack Developer
        </p>

        <p className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500">
          <a href="mailto:sutfusiza@gmail.com" className="transition hover:text-neutral-900 dark:hover:text-neutral-100">
            sutfusiza@gmail.com
          </a>
          <a href="https://github.com/Sizasutfu" target="_blank" rel="noreferrer" className="transition hover:text-neutral-900 dark:hover:text-neutral-100">
            github.com/Sizasutfu
          </a>
        </p>
      </header>

      <section className="leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>{summary}</p>
      </section>

      <Section title="Experience">
        <div className="space-y-8">
          {experience.map((entry) => (
            <Entry key={`${entry.role}-${entry.org}`} entry={entry} />
          ))}
        </div>
      </Section>

      <Section title="Projects">
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.slug} className="space-y-1.5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-medium">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="underline underline-offset-4 transition hover:opacity-70"
                  >
                    {project.title}
                  </Link>
                </h3>
                <span className="text-sm text-neutral-500">{project.year}</span>
              </div>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
              <p className="text-xs text-neutral-500">
                {project.tags.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Skills">
        <dl className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.label} className="space-y-2">
              <dt className="text-sm font-medium">{group.label}</dt>
              <dd className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education">
        <div className="space-y-6">
          {education.map((entry) => (
            <Entry key={`${entry.role}-${entry.org}`} entry={entry} />
          ))}
        </div>
      </Section>
    </div>
  );
}