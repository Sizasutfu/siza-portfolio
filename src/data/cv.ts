export type CVEntry = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
};

export const summary =
  "Self-taught full-stack developer and phone repair technician. I built and use FixLog daily to run my repair business, and I've built CircleNet — a social platform with live streaming and anonymous messaging — three times against a single backend.";

export const experience: CVEntry[] = [
  {
    role: "Phone Repair Technician",
    org: "Self-employed",
    period: "2015 — Present",
    location: "Eswatini",
    points: [
      "Run a phone repair business end to end — diagnosis, repair, sourcing parts, pricing and customer records.",
      "Built FixLog, a React Native and Supabase app I use daily to track every job from intake to collection.",
      "Handle hardware faults across iOS and Android, including screen, battery and charging port repairs.",
    ],
  },
];

export const education: CVEntry[] = [];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "MySQL", "Supabase", "WebSockets"],
  },
  {
    label: "Tooling",
    items: ["Git", "Expo", "Vercel"],
  },
];