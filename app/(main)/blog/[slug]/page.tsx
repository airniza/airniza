import { notFound } from "next/navigation";
import CommentBox from "@/components/blog/CommentBox";
import { getAllPosts, getPostBySlug } from "@/lib/blog-content/blog-posts";
import type { BlogPost } from "@/lib/blog-content/blog-posts";

// ✅ params as Promise
type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  // ✅ Await params before destructuring
  const { slug } = await params;

  // ✅ Await getPostBySlug (make sure it supports async)
  const post: BlogPost | undefined = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <article className="bg-white p-6 rounded-lg shadow">
      {/* Featured image */}
      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full rounded-lg mb-6"
        />
      )}

      <h1 className="text-3xl font-bold mb-3">{post.title}</h1>

      <div className="text-sm text-gray-500 mb-6">
        Published on {post.date} · Last updated on {post.modifiedDate} · By Muffin R.
      </div>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <CommentBox postId={post.id} />
    </article>
  );
}
