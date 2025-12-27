import BlogCard from "@/components/ui/blog/BlogCard";
import { getAllBlogs } from "@/services/blogs.service";
import BlogFilter from "@/components/ui/blog/BlogFilter";
import { getAllCategories } from "@/services/category.service";

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const blogs = await getAllBlogs();
  const categories = await getAllCategories();

  // Prepare category names for filter
  const categoryNames = ["All", ...categories.map((cat) => cat.name)];

  return (
    <main className="px-6 py-20">
      {/* Header */}
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-foreground">Our Blog</h1>
        <p className="mt-3 text-muted">
          Insights on AI, web development, and digital innovation.
        </p>
      </section>

      {/* Filter - Client Component */}
      <BlogFilter categories={categoryNames} blogs={blogs} />
    </main>
  );
}
