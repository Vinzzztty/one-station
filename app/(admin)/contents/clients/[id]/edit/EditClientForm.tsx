"use client";

import { useState } from "react";
import Link from "next/link";
import { updateClientAction } from "../../create/actions";

interface Client {
    id: string;
    name: string;
    logoUrl: string;
    logoFileId: string | null;
    websiteUrl: string | null;
    order: number;
}

export default function EditClientForm({ client }: { client: Client }) {
    const [isPending, setIsPending] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [logoPreview, setLogoPreview] = useState<string | null>(null);

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert("File too large (max 5MB)");
                return;
            }
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const result = await updateClientAction(client.id, formData);

        if (result?.error) {
            setErrorMsg(result.error);
            setIsPending(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto pb-20">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">
                        Edit Client
                    </h1>
                    <p className="text-muted mt-1">Update client information</p>
                </div>
                <div className="flex gap-3">
                    <Link
                        href="/contents/clients"
                        className="px-5 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-background transition-colors"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-primary hover:bg-primary-dark text-white px-8 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center gap-2"
                    >
                        {isPending ? (
                            <>
                                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Saving...
                            </>
                        ) : (
                            "Save Changes"
                        )}
                    </button>
                </div>
            </div>

            {/* Hidden fields for existing logo */}
            <input type="hidden" name="existingLogoUrl" value={client.logoUrl} />
            <input type="hidden" name="existingLogoFileId" value={client.logoFileId || ""} />

            <div className="bg-surface border border-border rounded-xl p-6 shadow-sm space-y-6">
                {/* Current Logo & Upload */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                        Client Logo
                    </label>
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors bg-background/50 cursor-pointer relative group">
                        <input
                            type="file"
                            name="logo"
                            accept="image/*"
                            onChange={handleLogoChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex justify-center">
                            <img
                                src={logoPreview || client.logoUrl}
                                alt="Logo preview"
                                className="max-h-24 object-contain"
                            />
                        </div>
                        <p className="text-xs text-muted mt-3">Click to upload a new logo</p>
                    </div>
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                        Client Name *
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        defaultValue={client.name}
                        placeholder="e.g. Acme Corporation"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    />
                </div>

                {/* Website URL */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                        Website URL (optional)
                    </label>
                    <input
                        name="websiteUrl"
                        type="url"
                        defaultValue={client.websiteUrl || ""}
                        placeholder="https://example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    />
                </div>

                {/* Order */}
                <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                        Display Order
                    </label>
                    <input
                        name="order"
                        type="number"
                        defaultValue={client.order}
                        placeholder="0"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                    />
                    <p className="text-xs text-muted mt-1">Lower numbers appear first</p>
                </div>
            </div>

            {errorMsg && (
                <div className="fixed bottom-8 right-8 bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-bottom-5">
                    <div className="flex items-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p className="font-medium">{errorMsg}</p>
                    </div>
                </div>
            )}
        </form>
    );
}
