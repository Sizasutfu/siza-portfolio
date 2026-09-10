export type ProjectLink = { label: string; href: string };

export type ProjectFeature = { name: string; detail: string };

export type Project = {
  slug: string;
  title: string;
  description: string;
  features?: ProjectFeature[];
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
      "A social platform with feeds, groups, anonymous messages and live streaming — built three separate times against the same Express + MySQL backend.",
    features: [
      {
        name: "Feed",
        detail:
          "Chronological posts with media, likes and comments. Cursor-based pagination so the feed stays fast as it grows.",
      },
      {
        name: "Groups",
        detail:
          "User-created communities with their own feeds and member lists. Posts belong to a group or to the public feed.",
      },
      {
        name: "Whispers",
        detail:
          "Anonymous messages. The sender's identity is stripped server-side before the response is sent, so it's never exposed to the client — and anonymous content still goes through moderation.",
      },
      {
        name: "Live",
        detail:
          "Live video streaming with a real-time chat alongside it. Streams are announced to followers when they start.",
      },
      {
        name: "Direct messages",
        detail:
          "One-to-one conversations with read state and history.",
      },
    ],
    body: [
      "CircleNet started as a vanilla JavaScript app to understand how a social feed actually works without a framework doing the heavy lifting. Once the core was solid, I rebuilt the same product in Next.js and again in React Native — three clients, one backend.",
      "Sharing a single Express and MySQL API across all three forced me to design it properly. Each client needed the same shape of data, so I couldn't let any one of them invent its own. That constraint is the main reason the project taught me more than three unrelated apps would have.",
      "Whispers and Live were the hardest parts. Anonymity has to be enforced on the server, not hidden in the UI — if the sender's ID is anywhere in the response, the feature is broken. And live streaming meant dealing with media in real time, which is a different kind of problem from anything else in the app.",
    ],
    tags: [
      "Next.js",
      "React Native",
      "Express",
      "MySQL",
      "WebSockets",
      "Vanilla JS",
    ],
    year: "2024",
    links: [
      {
        label: "Next.js app",
        href: "https://github.com/Sizasutfu/Circlenet/tree/main/circleNet",
      },
      {
        label: "Backend",
        href: "https://github.com/Sizasutfu/Circlenet/tree/main/circle_backend",
      },
      {
        label: "Vanilla JS app",
        href: "https://github.com/Sizasutfu/Circlenet/tree/main/circle_frontend/frontend",
      },
    ],
    featured: true,
  },
  {
    slug: "fixlog",
    title: "FixLog",
    description:
      "A repair log for the phones I fix — devices, faults, parts and turnaround. I use it daily.",
    features: [
      {
        name: "Device records",
        detail:
          "Model, fault description and repair notes for each job, searchable by customer or device.",
      },
      {
        name: "Status tracking",
        detail:
          "From intake to collected, with a timestamped history of each change.",
      },
      {
        name: "Parts and cost",
        detail:
          "What went into each repair and what it cost, so pricing stays consistent.",
      },
    ],
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