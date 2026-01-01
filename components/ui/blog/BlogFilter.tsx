"use client";

import { useState } from "react";
import BlogCard from "@/components/ui/blog/BlogCard";

type BlogFilterProps = {
  categories: string[];
  blogs: Array<{
    slug: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
    author: {
      name: string;
      role: string;
      avatar: string;
      bio: string;
    };
  }>;
};

export default function BlogFilter({ categories, blogs }: BlogFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <>
      {/* Filter */}
      <div className="mb-12 flex justify-center gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition
              ${activeCategory === cat
                ? "bg-primary text-white"
                : "bg-surface border border-border text-muted hover:bg-primary hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <section className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <BlogCard key={blog.slug} {...blog} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted">No articles found in this category.</p>
          </div>
        )}
      </section>
    </>
  );
}
