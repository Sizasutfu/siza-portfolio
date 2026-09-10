import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sizamndzawe.com"),
  title: {
    default: "Siza Mndzawe — Full-Stack Developer",
    template: "%s — Siza Mndzawe",
  },
  description:
    "Full-stack developer building web and mobile apps with Next.js, React Native and Express.",
  openGraph: {
    title: "Siza Mndzawe — Full-Stack Developer",
    description:
      "Full-stack developer building web and mobile apps with Next.js, React Native and Express.",
    url: "https://sizamndzawe.com",
    siteName: "Siza Mndzawe",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-dvh flex-col bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
        <Navbar />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}