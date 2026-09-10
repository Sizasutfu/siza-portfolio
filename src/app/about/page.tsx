import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Full-stack developer working with Next.js, React Native, Express and MySQL.",
};

const stack = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "React Native", "Tailwind CSS", "Vanilla JS"],
  },
  {
    label: "Backend",
    items: ["Express", "Node.js", "MySQL", "Supabase"],
  },
  {
    label: "Tooling",
    items: ["Git", "Expo", "Vercel", "Postman"],
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          About
        </h1>
      </header>

      <div className="space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          I'm a full-stack developer. I build web and mobile apps, mostly
          with Next.js and React Native on the front and Express and MySQL
          behind them.
        </p>
        <p>
          The project I'm closest to is{" "}
          <Link
            href="/projects/fixlog"
            className="font-medium underline underline-offset-4 transition hover:opacity-70"
          >
            FixLog
          </Link>
          , a repair log I wrote for my own phone repair work. I use it
          every day, which turned out to be a much stricter test than any
          side project — every rough edge shows up when you can't avoid
          the tool.
        </p>
        <p>
          Before that I built{" "}
          <Link
            href="/projects/circlenet"
            className="font-medium underline underline-offset-4 transition hover:opacity-70"
          >
            CircleNet
          </Link>{" "}
          three times over — once in vanilla JavaScript, once in Next.js,
          once in React Native — against the same backend. Doing the same
          product in three stacks taught me more than three separate
          projects would have.
        </p>
        <p>
          I work with AI-assisted tooling and review everything I ship. I'm
          open to freelance work and full-time roles.
        </p>
      </div>

      <section className="space-y-6 border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <h2 className="text-sm font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          What I work with
        </h2>

        <dl className="space-y-5">
          {stack.map((group) => (
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
      </section>

      <section className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <Link
          href="/contact"
          className="text-sm font-medium underline underline-offset-4 transition hover:opacity-70"
        >
          Get in touch →
        </Link>
      </section>
    </div>
  );
}