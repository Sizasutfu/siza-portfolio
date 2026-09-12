import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
};

export type Post = PostMeta & { content: string };

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        summary: data.summary ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  const mdx = path.join(postsDirectory, `${slug}.mdx`);
  const md = path.join(postsDirectory, `${slug}.md`);
  const fullPath = fs.existsSync(mdx) ? mdx : md;

  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    summary: data.summary ?? "",
    tags: data.tags ?? [],
    content,
  };
}

export function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}