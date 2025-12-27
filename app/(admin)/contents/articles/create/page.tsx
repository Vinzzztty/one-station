import { getAllCategories } from "@/services/category.service";
import CreateArticleForm from "./CreateArticleForm";

export default async function CreateArticlePage() {
  const categories = await getAllCategories();

  return (
    <>
      <CreateArticleForm categories={categories} />
    </>
  );
}
