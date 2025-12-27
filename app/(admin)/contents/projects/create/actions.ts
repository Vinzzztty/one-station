"use server";

import { auth } from "@/auth";
import {
  createProject,
  deleteProjectById,
  updateProject,
} from "@/services/projects.service";
import { uploadImageToImageKit } from "@/services/imagekit.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  urlProject: z.string().url("Invalid URL"),
  category: z.enum(["Data Science", "Mobile Development", "Website Development", "Training"]),
});

export async function createProjectAction(formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Unauthorized: Please login first" };
  }

  const rawData = {
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    urlProject: formData.get("urlProject")?.toString() || "",
    category: formData.get("category")?.toString() || "Website Development",
  };

  const validated = projectSchema.safeParse(rawData);

  if (!validated.success) {
    const errorDetails = validated.error.flatten().fieldErrors;
    const firstErrorMessage =
      Object.values(errorDetails)[0]?.[0] || "Invalid data";
    return { error: `Validation Failed: ${firstErrorMessage}` };
  }

  // Handle Image Uploads
  const files = formData.getAll("images") as File[];
  const imageUrls: string[] = [];

  for (const file of files) {
    if (file.size > 0 && file.name !== "undefined") {
      try {
        const uploadRes = await uploadImageToImageKit(file);
        imageUrls.push(uploadRes.url);
      } catch (error) {
        console.error("Image upload failed:", error);
        return { error: "Failed to upload images" };
      }
    }
  }

  await createProject({
    ...validated.data,
    imageUrls,
  });

  revalidatePath("/contents/projects");
  redirect("/contents/projects");
}

export async function deleteProjectAction(id: string) {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  await deleteProjectById(id);
  revalidatePath("/contents/projects");
}

export async function updateProjectAction(id: string, formData: FormData) {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: "Unauthorized: Please login first" };
  }

  const rawData = {
    title: formData.get("title")?.toString() || "",
    description: formData.get("description")?.toString() || "",
    urlProject: formData.get("urlProject")?.toString() || "",
    category: formData.get("category")?.toString() || "Website Development",
  };

  const validated = projectSchema.safeParse(rawData);

  if (!validated.success) {
    const errorDetails = validated.error.flatten().fieldErrors;
    const firstErrorMessage =
      Object.values(errorDetails)[0]?.[0] || "Invalid data";
    return { error: `Validation Failed: ${firstErrorMessage}` };
  }

  // Handle Image Uploads (Append new images)
  const files = formData.getAll("images") as File[];
  const newImageUrls: string[] = [];

  for (const file of files) {
    if (file.size > 0 && file.name !== "undefined") {
      try {
        const uploadRes = await uploadImageToImageKit(file);
        newImageUrls.push(uploadRes.url);
      } catch (error) {
        console.error("Image upload failed:", error);
        return { error: "Failed to upload images" };
      }
    }
  }

  // We might want to keep existing images or replace them. 
  // For simplicity, let's assume we are appending or replacing based on logic.
  // But usually update form sends existing images too.
  // Here I will fetch the existing project to merge images if needed, 
  // OR just expect the form to handle it.
  // Since the schema is simple, let's just use the new ones if provided, or keep old ones?
  // Actually, usually we pass "existingImages" in formData.
  
  const existingImages = formData.getAll("existingImages") as string[];
  const finalImageUrls = [...existingImages, ...newImageUrls];

  await updateProject(id, {
    ...validated.data,
    imageUrls: finalImageUrls,
  });

  revalidatePath("/contents/projects");
  redirect("/contents/projects");
}
