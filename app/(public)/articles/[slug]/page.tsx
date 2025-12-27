import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/markdown/MarkdownRenderer";
import { getBlogBySlug, getAllBlogs } from "@/services/blogs.service";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);

  if (!article) {
    return { title: "Artikel Tidak Ditemukan" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {
      canonical: `/articles/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${process.env.URL_PUBLIC}/articles/${slug}`,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getBlogBySlug(slug);

  if (!article) return notFound();

  const allBlogs = await getAllBlogs();
  const relatedArticles = allBlogs
    .filter((b) => b.category === article.category && b.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">{article.category}</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="mb-8 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          {/* Author Info & Meta */}
          <div className="flex items-center gap-4">
            {/* <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={56}
              height={56}
              className="rounded-full ring-2 ring-border"
            /> */}
            <div>
              <div className="font-semibold text-foreground">
                {article.author.name}
              </div>
              <div className="text-sm text-muted">{article.author.role}</div>
              <div className="mt-1 flex items-center gap-3 text-xs text-muted">
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image - Full Width with Rounded Corners */}
      <section className="mx-auto max-w-5xl px-6 -mt-8 relative z-10">
        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <div className="relative aspect-[21/9] w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-6 py-16">
        <MarkdownRenderer content={article.content} />

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-16 border-t border-border pt-8">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted">
              Tags:
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag: string) => (
                <Link
                  key={tag}
                  href={""}
                  className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-foreground hover:bg-primary hover:text-white transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="mt-12 rounded-2xl border border-border bg-white p-8">
          <div className="flex items-start gap-6">
            {/* <Image
              src={article.author.avatar}
              alt={article.author.name}
              width={80}
              height={80}
              className="rounded-full ring-2 ring-border"
            /> */}
            <div className="flex-1">
              <h3 className="mb-1 text-xl font-bold text-foreground">
                Written by {article.author.name}
              </h3>
              <p className="mb-3 text-sm text-primary font-medium">
                {article.author.role}
              </p>
              <p className="text-sm leading-relaxed text-muted">
                {article.author.bio}
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                View all articles
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter Section */}
      <section className="border-y border-border bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Newsletter
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Get insights delivered to your inbox
          </h2>
          <p className="mb-8 text-muted">
            Join 10,000+ readers receiving our weekly deep dives into technology
            and strategy.
          </p>
          <form className="mx-auto flex max-w-md gap-3">
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 rounded-full border border-border bg-white px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
            >
              Subscribe Free
            </button>
          </form>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground">
              Related Articles
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              View Blog
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="group overflow-hidden rounded-2xl border border-border bg-white hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4">
                    <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-white">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2 text-xs text-muted">
                    {blog.date} • {blog.readTime}
                  </div>
                  <h3 className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
