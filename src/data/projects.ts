export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  body?: string[];
  tags: string[];
  year: string;
  links: ProjectLink[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "circlenet",
    title: "CircleNet",
    description:
      "A social platform with posts, profiles and feeds — built three separate times against the same Express + MySQL backend.",
    body: [
      "CircleNet started as a vanilla JavaScript app to understand how a social feed actually works without a framework doing the heavy lifting. Once the core was solid, I rebuilt the same product in Next.js and again in React Native so I could compare the trade-offs first-hand.",
      "The backend is Express and MySQL, shared by all three clients. That constraint forced me to design a clean API rather than letting each frontend invent its own shape.",
    ],
    tags: ["Next.js", "React Native", "Express", "MySQL", "Vanilla JS"],
    year: "2024",
    links: [
      { label: "Next.js app", href: "https://github.com/Sizasutfu/Circlenet/tree/main/circleNet" },
      { label: "Backend", href: "https://github.com/Sizasutfu/Circlenet/tree/main/circle_backend" },
      { label: "Vanilla JS app", href: "https://github.com/Sizasutfu/Circlenet/tree/main/circle_frontend/frontend" },
    ],
    featured: true,
  },
  {
    slug: "fixlog",
    title: "FixLog",
    description:
      "A repair log for the phones I fix — devices, faults, parts and turnaround. I use it daily.",
    body: [
      "I was tracking repairs in a notebook and losing details. FixLog replaced it with something searchable that lives on my phone.",
      "Built with React Native and Supabase for auth and storage. Because it's a tool I actually depend on, it's the project where I've been most ruthless about cutting anything that got in the way.",
    ],
    tags: ["React Native", "Expo", "Supabase"],
    year: "2025",
    links: [
      { label: "Source", href: "https://github.com/Sizasutfu/Fixlog" },
    ],
    featured: true,
  },
];