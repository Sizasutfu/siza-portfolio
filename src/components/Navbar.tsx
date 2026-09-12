"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `rounded-md px-2.5 py-1.5 transition sm:px-3 ${
      isActive(href)
        ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    }`;

  const mobileLinkClass = (href: string) =>
    `rounded-md px-3 py-2.5 text-base transition ${
      isActive(href)
        ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
        : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80">
      <nav className="mx-auto flex max-w-3xl items-center gap-3 px-6 py-4 text-sm">
        <Link
          href="/"
          className="mr-auto font-semibold tracking-tight transition hover:opacity-70"
        >
          Siza Mndzawe
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 sm:flex sm:gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <ThemeToggle />

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-9 w-9 items-center justify-center rounded-md text-neutral-600 transition hover:bg-neutral-100 sm:hidden dark:text-neutral-400 dark:hover:bg-neutral-800"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out sm:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pt-1 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={mobileLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}