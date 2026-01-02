"use client";

import { deleteClientAction } from "@/app/(admin)/contents/clients/create/actions";
import { useState } from "react";

export default function DeleteClientButton({ id }: { id: string }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this client?")) return;

        setIsDeleting(true);
        try {
            await deleteClientAction(id);
        } catch (error) {
            console.error("Failed to delete client:", error);
            alert("Failed to delete client");
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="p-2 text-muted hover:text-red-500 transition-colors rounded-md hover:bg-red-500/10 disabled:opacity-50"
            title="Delete"
        >
            {isDeleting ? "..." : "🗑️"}
        </button>
    );
}
