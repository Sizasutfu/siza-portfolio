"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-3xl items-center gap-6 px-6 py-4 text-sm">
        <Link
          href="/"
          className="font-semibold tracking-tight transition hover:opacity-70"
        >
          Siza Mndzawe
        </Link>

        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-2.5 py-1.5 transition sm:px-3 ${
                isActive(link.href)
                  ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}