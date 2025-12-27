import prisma from "@/lib/prisma";

export interface CreateContactData {
  fullName: string;
  email: string;
  phone?: string;
  service: string;
  industry: string;
  businessName?: string;
  budget: string;
  message: string;
}

export async function createContact(data: CreateContactData) {
  return prisma.contact.create({
    data,
  });
}

export async function getAllContacts() {
  return prisma.contact.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
