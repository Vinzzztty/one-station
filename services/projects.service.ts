import prisma from "@/lib/prisma";

export async function getAllProjects() {
  return prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getProjectById(id: string) {
  return prisma.project.findUnique({
    where: { id },
  });
}

export async function getProjectsByCategory(category: string) {
  return prisma.project.findMany({
    where: {
      category: category,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function createProject(data: {
  title: string;
  description: string;
  urlProject: string;
  category: string;
  imageUrls: string[];
}) {
  return prisma.project.create({
    data,
  });
}

export async function updateProject(
  id: string,
  data: {
    title?: string;
    description?: string;
    urlProject?: string;
    category?: string;
    imageUrls?: string[];
  }
) {
  return prisma.project.update({
    where: { id },
    data,
  });
}

export async function deleteProjectById(id: string) {
  return prisma.project.delete({
    where: { id },
  });
}
