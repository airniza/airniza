import BlogSidebar from "@/components/blog/BlogSidebar";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6">
      <main className="lg:col-span-8">{children}</main>

      <aside className="lg:col-span-4">
        <BlogSidebar />
      </aside>
    </div>
  );
}
