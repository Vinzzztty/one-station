"use server";

import { auth } from "@/auth";
import {
    createClient,
    deleteClientById,
    updateClient,
} from "@/services/clients.service";
import { uploadImageToImageKit } from "@/services/imagekit.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createClientAction(formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        return { error: "Unauthorized: Please login first" };
    }

    const name = formData.get("name")?.toString() || "";
    const websiteUrl = formData.get("websiteUrl")?.toString() || "";
    const order = parseInt(formData.get("order")?.toString() || "0", 10);

    if (name.length < 2) {
        return { error: "Name must be at least 2 characters" };
    }

    // Handle Logo Upload
    const logoFile = formData.get("logo") as File;
    if (!logoFile || logoFile.size === 0) {
        return { error: "Logo image is required" };
    }

    let logoUrl = "";
    let logoFileId = "";

    try {
        const uploadRes = await uploadImageToImageKit(logoFile);
        logoUrl = uploadRes.url;
        logoFileId = uploadRes.fileId;
    } catch (error) {
        console.error("Logo upload failed:", error);
        return { error: "Failed to upload logo image" };
    }

    await createClient({
        name,
        logoUrl,
        logoFileId,
        websiteUrl: websiteUrl || undefined,
        order,
    });

    revalidatePath("/contents/clients");
    revalidatePath("/");
    redirect("/contents/clients");
}

export async function updateClientAction(id: string, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        return { error: "Unauthorized: Please login first" };
    }

    const name = formData.get("name")?.toString() || "";
    const websiteUrl = formData.get("websiteUrl")?.toString() || "";
    const order = parseInt(formData.get("order")?.toString() || "0", 10);
    const existingLogoUrl = formData.get("existingLogoUrl")?.toString() || "";
    const existingLogoFileId = formData.get("existingLogoFileId")?.toString() || "";

    if (name.length < 2) {
        return { error: "Name must be at least 2 characters" };
    }

    let logoUrl = existingLogoUrl;
    let logoFileId = existingLogoFileId;

    // Handle new Logo Upload if provided
    const logoFile = formData.get("logo") as File;
    if (logoFile && logoFile.size > 0) {
        try {
            const uploadRes = await uploadImageToImageKit(logoFile);
            logoUrl = uploadRes.url;
            logoFileId = uploadRes.fileId;
        } catch (error) {
            console.error("Logo upload failed:", error);
            return { error: "Failed to upload logo image" };
        }
    }

    await updateClient(id, {
        name,
        logoUrl,
        logoFileId,
        websiteUrl: websiteUrl || undefined,
        order,
    });

    revalidatePath("/contents/clients");
    revalidatePath("/");
    redirect("/contents/clients");
}

export async function deleteClientAction(id: string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    await deleteClientById(id);
    revalidatePath("/contents/clients");
    revalidatePath("/");
}
