import { getAllCategories } from "@/services/category.service";
import CreateProjectForm from "./CreateProjectForm";

export default async function CreateProjectPage() {
  const categoriesRaw = await getAllCategories();
  const categories = categoriesRaw.map((c) => ({
    id: c.id,
    name: c.name,
  }));
  return <CreateProjectForm categories={categories} />;
}
