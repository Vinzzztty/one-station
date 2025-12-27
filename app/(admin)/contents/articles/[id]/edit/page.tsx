// app/(admin)/contents/articles/[id]/edit/page.tsx
import { notFound } from "next/navigation";
import { getArticleById } from "@/services/blogs.service";
import EditArticleForm from "./EditArticleForm"; // Import file yang baru dibuat di atas
import { getAllCategories } from "@/services/category.service";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPage({ params }: PageProps) {
  const { id } = await params;

  const [article, categories] = await Promise.all([
    getArticleById(id),
    getAllCategories(),
  ]);

  if (!article) {
    notFound();
  }

  return (
    <main>
      <EditArticleForm article={article} categories={categories} />
    </main>
  );
}
