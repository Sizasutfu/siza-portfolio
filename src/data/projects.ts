export type ProjectLink = { label: string; href: string };

export type ProjectFeature = { name: string; detail: string };

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  features?: ProjectFeature[];
  screenshots?: ProjectScreenshot[];
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
      "A social platform with feeds, groups, anonymous messages and live streaming, built three separate times against the same Express and MySQL backend.",
    screenshots: [
      {
        src: "/projects/circlenet-mobile.jpg",
        alt: "CircleNet mobile app showing the global feed with posts, likes and reposts",
        caption: "React Native client, global feed",
      },
    ],
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
          "Anonymous messages. The sender's identity is never recorded, so it can't be leaked by a bad query or a new endpoint.",
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
      "CircleNet started as a vanilla JavaScript app to understand how a social feed actually works without a framework doing the heavy lifting. Once the core was solid, I rebuilt the same product in Next.js and again in React Native: three clients, one backend.",
      "Sharing a single Express and MySQL API across all three forced me to design it properly. Each client needed the same shape of data, so I couldn't let any one of them invent its own. That constraint is the main reason the project taught me more than three unrelated apps would have.",
      "Whispers and Live were the hardest parts. Anonymity has to be structural, not a display setting, and live streaming meant dealing with media in real time. Both are a different kind of problem from anything else in the app.",
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
      "A repair log for the phones I fix. Devices, faults, parts and turnaround. I use it daily.",
    screenshots: [
      {
        src: "/projects/fixlog.jpg",
        alt: "FixLog showing a list of completed phone repairs with device, fault, fix and price",
        caption: "The repair list: device, fault, fix and amount for each job",
      },
    ],
    features: [
      {
        name: "Repair log",
        detail:
          "Every job in one list: device, reported fault, what the fix was, and what it cost. Newest first.",
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
    year: "2026",
    links: [
      { label: "Source", href: "https://github.com/Sizasutfu/Fixlog" },
    ],
    featured: true,
  },
  {
    slug: "musicplayer",
    title: "MusicPlayer",
    description:
      "A local-first music player for Android and iOS. Reads what's already on your device. No account, no streaming, no network.",
    features: [
      {
        name: "Library scanning",
        detail:
          "Reads every audio file on the device through expo-media-library and sorts by title, artist or album.",
      },
      {
        name: "ID3 metadata with caching",
        detail:
          "Extracts tags using @missingcore/audio-metadata and caches them on disk. The first scan is slow; every launch after that is instant.",
      },
      {
        name: "Albums, artists and playlists",
        detail:
          "Each collection has its own detail view. Long-press a track to add it to a playlist, or create a new one inline.",
      },
      {
        name: "Background playback",
        detail:
          "react-native-track-player keeps audio running when the app is backgrounded, with lock screen controls.",
      },
      {
        name: "Gesture-driven player",
        detail:
          "Full-screen player with a reanimated seek bar. Drag anywhere on the bar, no tap targets to hit.",
      },
      {
        name: "Theming",
        detail:
          "Follows the system setting by default, with manual light and dark overrides.",
      },
    ],
    body: [
      "I have music on my phone that I actually own, and none of the mainstream players handle that well anymore. They want a subscription, or an account, or they bury local files under layers of streaming UI.",
      "This one does a single thing: it reads what's on the device and plays it. No account, no network, no recommendations. Just a library, sorted the way you want, with playlists and background playback.",
      "The library scan is the part that had to be fast. Reading ID3 tags from every file on the device takes time on the first run, so metadata is cached to disk after that first pass. Every launch after that opens instantly.",
    ],
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "react-native-track-player",
      "Expo Router",
    ],
    year: "2026",
    links: [],
    featured: true,
  },
];