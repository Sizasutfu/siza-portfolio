import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Siza Mndzawe.",
};

const channels = [
  {
    label: "Email",
    value: "sutfusiza@gmail.com",
    href: "mailto:sutfusiza@gmail.com",
    note: "The fastest way to reach me.",
  },
  {
    label: "GitHub",
    value: "@Sizasutfu",
    href: "https://github.com/Sizasutfu",
    note: "Where all my code lives.",
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="max-w-xl text-lg text-neutral-600 dark:text-neutral-400">
          I'm open to freelance work and full-time roles. Whether it's a
          project, a question, or just to say hello — email is best.
        </p>
      </header>

      <ul className="divide-y divide-neutral-200 dark:divide-neutral-800">
        {channels.map((channel) => (
          <li key={channel.href}>
            <a
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex flex-col gap-1 py-5 transition sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
                  {channel.label}
                </p>
                <p className="font-medium transition group-hover:opacity-70">
                  {channel.value}
                </p>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {channel.note}
              </p>
            </a>
          </li>
        ))}
      </ul>

      <section className="border-t border-neutral-200 pt-8 dark:border-neutral-800">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Based in Eswatini. Available for remote work.
        </p>
      </section>
    </div>
  );
}