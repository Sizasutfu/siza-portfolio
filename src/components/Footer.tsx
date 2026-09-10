import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/Sizasutfu" },
  { label: "Email", href: "mailto:sutfusiza@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between dark:text-neutral-400">
        <p>© {new Date().getFullYear()} Siza Mndzawe</p>
        <div className="flex gap-5">
          {socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="transition hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}