"use server";

import { getProjectsByCategory } from "@/services/projects.service";

export async function getProjectsByCategoryAction(category: string) {
  try {
    const projects = await getProjectsByCategory(category);
    return { projects };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { error: "Failed to fetch projects" };
  }
}
