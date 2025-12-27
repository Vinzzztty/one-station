import prisma from "@/lib/prisma";

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return `${Math.ceil(wordCount / wordsPerMinute)} min read`;
}

function formatBlogForUI(article: any) {
  return {
    slug: article.slug,
    title: article.title,
    excerpt: article.excerpt,
    content: article.content,
    image:
      article.coverImage ??
      "https://ik.imagekit.io/onestation/default-article.jpg",
    category: article.category.name,
    date: new Date(article.publishedAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    readTime: calculateReadTime(article.content),
    tags: article.tags,
    author: {
      name: article.admin.name,
      role: "Technology Writer",
      avatar:
        article.admin.avatar ??
        "https://ik.imagekit.io/onestation/default-avatar.jpg",
      bio: article.admin.bio ?? "Passionate about technology and innovation.",
    },
  };
}

export async function getAllBlogs() {
  const articles = await prisma.article.findMany({
    include: {
      admin: {
        select: {
          name: true,
          avatar: true,
          bio: true,
        },
      },
      category: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
  });

  return articles.map(formatBlogForUI);
}

export async function getBlogBySlug(slug: string) {
  const article = await prisma.article.findUnique({
    where: { slug },
    include: {
      admin: {
        select: {
          name: true,
          avatar: true,
          bio: true,
        },
      },
      category: {
        select: {
          name: true,
          slug: true,
        },
      },
    },
  });

  if (!article) return null;
  return formatBlogForUI(article);
}

export async function getAllArticlesForAdmin() {
  return prisma.article.findMany({
    select: {
      id: true,
      title: true,
      publishedAt: true,
      admin: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      publishedAt: "desc",
    },
  });
}

export async function createArticle(data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  coverImageFileId: string;
  categoryId: string;
  adminId: string;
  tags: string[];
}) {
  return prisma.article.create({
    data: {
      ...data,
      publishedAt: new Date(),
    },
  });
}

export async function getArticleById(id: string) {
  return prisma.article.findUnique({
    where: { id },
  });
}

// 2. Fungsi Update ke Database
export async function updateArticleDb(
  id: string,
  data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    coverImage?: string;
    coverImageFileId?: string;
    categoryId: string;
    tags: string[];
  }
) {
  return prisma.article.update({
    where: { id },
    data: {
      ...data,
      ...(data.coverImage ? { coverImage: data.coverImage } : {}),
      ...(data.coverImageFileId
        ? { coverImageFileId: data.coverImageFileId }
        : {}),
      updatedAt: new Date(),
    },
  });
}

export async function deleteArticleById(id: string) {
  try {
    return await prisma.article.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error deleting article:", error);
    throw new Error("Failed to delete article");
  }
}
