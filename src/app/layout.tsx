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
  metadataBase: new URL("https://portfolio.circlenet.social"),
  title: {
    default: "Siza Mndzawe — Full-Stack Developer",
    template: "%s — Siza Mndzawe",
  },
  description:
    "Full-stack developer building web and mobile apps with Next.js, React Native and Express.",
    openGraph: {
      siteName: "Siza Mndzawe",
      type: "website",
      url: "https://portfolio.circlenet.social",
    },

};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siza Mndzawe",
  alternateName: ["Sbeats_sz", "King Pele"],
  url: "https://portfolio.circlenet.social",
  email: "sutfusiza@gmail.com",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer and music producer from Eswatini. I build web and mobile apps with Next.js, React Native and Express.",
  sameAs: [
    "https://github.com/Sizasutfu",
    "https://www.instagram.com/sbeats_sz",
    "https://www.facebook.com/profile.php?id=100080187507190",
  ],
  knowsAbout: [
    "Next.js",
    "React Native",
    "Express",
    "MySQL",
    "Supabase",
    "WebSockets",
    "Music production",
    "Deep house",
    "Amapiano",
  ],
};

const themeScript = `
try {
  var stored = localStorage.getItem('theme');
  var dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if (dark) document.documentElement.classList.add('dark');
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
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