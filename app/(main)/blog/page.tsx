import Link from "next/link";
import { getAllPosts } from "@/lib/blog-content/blog-posts";

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.id} className="border-b pb-6">
            {post.featuredImage && (
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full rounded mb-4"
              />
            )}

            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <div className="text-sm text-gray-500 mb-2">
              Published: {post.date} · Updated: {post.modifiedDate}
            </div>

            <p className="text-gray-700">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
