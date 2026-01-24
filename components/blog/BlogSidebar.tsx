import Link from "next/link";
import { getAllPosts } from "@/lib/blog-content/blog-posts";

export default function BlogSidebar() {
  const posts = getAllPosts();

  return (
    <div className="bg-gray-50 p-5 rounded-lg sticky top-24">
      <h3 className="font-semibold mb-4">Latest Posts</h3>

      <ul className="space-y-3">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
