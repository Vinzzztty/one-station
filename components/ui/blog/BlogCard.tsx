import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author: {
    name: string;
    avatar: string;
  };
};

export default function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  readTime,
  slug,
  author,
}: BlogCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="group">
      <article className="h-full overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image Container - 16:9 ratio */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Category Badge */}
          <div className="absolute left-4 top-4">
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta Info */}
          <div className="mb-3 flex items-center gap-3 text-xs text-muted">
            <span>{author.name}</span>
            <span>•</span>
            <span>{date}</span>
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl font-bold leading-tight text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="mb-4 text-sm text-muted line-clamp-3">{excerpt}</p>

          {/* Read More */}
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            Read More
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
          </div>
        </div>
      </article>
    </Link>
  );
}
