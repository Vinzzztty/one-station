import prisma from "@/lib/prisma";

export async function getAllClients() {
    return prisma.client.findMany({
        orderBy: [
            { order: "asc" },
            { createdAt: "desc" },
        ],
    });
}

export async function getClientById(id: string) {
    return prisma.client.findUnique({
        where: { id },
    });
}

export async function createClient(data: {
    name: string;
    logoUrl: string;
    logoFileId?: string;
    websiteUrl?: string;
    order?: number;
}) {
    return prisma.client.create({
        data,
    });
}

export async function updateClient(
    id: string,
    data: {
        name?: string;
        logoUrl?: string;
        logoFileId?: string;
        websiteUrl?: string;
        order?: number;
    }
) {
    return prisma.client.update({
        where: { id },
        data,
    });
}

export async function deleteClientById(id: string) {
    return prisma.client.delete({
        where: { id },
    });
}
