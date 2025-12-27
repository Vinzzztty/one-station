import prisma from "@/lib/prisma";

export async function getAllCategories() {
  return prisma.category.findMany({
    orderBy: { name: "asc" },
  });
}

export async function createCategory(name: string) {
  return prisma.category.create({
    data: {
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
    },
  });
}
