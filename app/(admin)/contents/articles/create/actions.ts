"use server";

import { auth } from "@/auth";
import {
  createArticle,
  deleteArticleById,
  getArticleById,
  updateArticleDb,
} from "@/services/blogs.service";
import { createCategory } from "@/services/category.service";
import {
  deleteImageFromImageKit,
  uploadImageToImageKit,
} from "@/services/imagekit.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const articleSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z.string().min(3, "Slug is missing"),
  excerpt: z.string().min(5, "Excerpt is too short"),
  content: z.string().min(10, "Content must be at least 10 characters"),

  categoryId: z.string().optional(),
  newCategoryName: z.string().optional(),

  tags: z.string().optional(),
});

export async function publishArticleAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Unauthorized: Please login first" };
  }

  const getString = (key: string) => {
    const value = formData.get(key);
    if (!value || value === "null" || value === "") return undefined;
    return value.toString();
  };

  const rawData = {
    title: formData.get("title")?.toString() || "",
    slug: formData.get("slug")?.toString() || "",
    excerpt: formData.get("excerpt")?.toString() || "",
    content: formData.get("content")?.toString() || "",

    categoryId: getString("categoryId"),
    newCategoryName: getString("newCategoryName"),
    tags: getString("tags"),

    file: formData.get("coverImage") as File,
  };

  const validated = articleSchema.safeParse(rawData);

  if (!validated.success) {
    const errorDetails = validated.error.flatten().fieldErrors;
    console.error("❌ Zod Validation Failed:", errorDetails);
    const firstErrorMessage =
      Object.values(errorDetails)[0]?.[0] || "Invalid data";
    return { error: `Validation Failed: ${firstErrorMessage}` };
  }

  try {
    let finalCategoryId = rawData.categoryId;

    if (rawData.newCategoryName) {
      const newCat = await createCategory(rawData.newCategoryName);
      finalCategoryId = newCat.id;
    }

    if (!finalCategoryId) {
      return { error: "Please select a category or create a new one." };
    }

    let coverImageUrl = "";
    let coverImageFileId = "";
    if (
      rawData.file &&
      rawData.file.size > 0 &&
      rawData.file.name !== "undefined"
    ) {
      const uploadRes = await uploadImageToImageKit(rawData.file);
      coverImageUrl = uploadRes.url;
      coverImageFileId = uploadRes.fileId;
      console.log("cover image url :", coverImageUrl);
      console.log("cover image file id :", coverImageFileId);
    } else {
      return { error: "Cover image is required." };
    }

    let tagsArray: string[] = [];
    try {
      if (rawData.tags) {
        tagsArray = JSON.parse(rawData.tags);
      }
    } catch (e) {}
    await createArticle({
      title: rawData.title,
      slug: rawData.slug,
      excerpt: rawData.excerpt,
      content: rawData.content,
      coverImage: coverImageUrl,
      coverImageFileId: coverImageFileId,
      categoryId: finalCategoryId,
      adminId: session.user.id,
      tags: tagsArray,
    });
  } catch (error) {
    console.error("🔥 Server Error:", error);
    return { error: "Failed to publish article. Check server logs." };
  }

  revalidatePath("/contents/articles");
  redirect("/contents/articles");
}

export async function deleteArticleAction(id: string) {
  const article = await getArticleById(id);

  if (article?.coverImageFileId) {
    await deleteImageFromImageKit(article.coverImageFileId);
  }

  await deleteArticleById(id);

  revalidatePath("/contents/articles");
}

export async function updateArticleAction(
  id: string,
  prevState: any,
  formData: FormData
) {
  const session = await auth();
  if (!session?.user?.id) return { error: "Unauthorized" };

  const existingArticle = await getArticleById(id);

  if (!existingArticle) {
    return { error: "Article not found" };
  }

  const getString = (key: string) => {
    const val = formData.get(key);
    return val ? val.toString().trim() : "";
  };

  const title = getString("title") || "";
  const slug = getString("slug") || "";
  const excerpt = getString("excerpt") || "";
  const content = getString("content") || "";
  let categoryId = getString("categoryId");
  const newCategoryName = getString("newCategoryName");
  const tagsJson = getString("tags");

  const file = formData.get("coverImage") as File;

  try {
    if (newCategoryName) {
      const newCat = await createCategory(newCategoryName);
      categoryId = newCat.id;
    }

    let newCoverImage = undefined;
    let newCoverImageFileId = undefined;

    if (file && file.size > 0 && file.name !== "undefined") {
      if (existingArticle.coverImageFileId) {
        try {
          await deleteImageFromImageKit(existingArticle.coverImageFileId);
        } catch (e) {
          console.error("Gagal hapus gambar lama:", e);
        }
      }

      const uploadRes = await uploadImageToImageKit(file);
      newCoverImage = uploadRes.url;
      newCoverImageFileId = uploadRes.fileId;
    }

    let tagsArray: string[] = [];
    try {
      if (tagsJson) tagsArray = JSON.parse(tagsJson);
    } catch (e) {}

    await updateArticleDb(id, {
      title,
      slug,
      excerpt,
      content,
      categoryId,
      tags: tagsArray,
      coverImage: newCoverImage,
      coverImageFileId: newCoverImageFileId,
    });
  } catch (error) {
    console.error("Update failed:", error);
    return { error: "Failed to update article" };
  }

  revalidatePath("/contents/articles");
  redirect("/contents/articles");
}
