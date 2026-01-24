import posts from "./posts.json";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;          // publish date
  modifiedDate: string;  // last modified
  content: string;
  featuredImage?: string;
}

export function getAllPosts(): BlogPost[] {
  return posts as BlogPost[];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return (posts as BlogPost[]).find((post) => post.slug === slug);
}
