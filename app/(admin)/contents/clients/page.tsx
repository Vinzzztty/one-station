import Link from "next/link";
import Image from "next/image";
import { getAllClients } from "@/services/clients.service";
import DeleteClientButton from "@/components/ui/DeleteClientButton";

export default async function ClientsPage() {
    const clients = await getAllClients();

    return (
        <div className="space-y-6">
            {/* HEADER */}
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold text-foreground">Clients</h2>
                    <p className="text-muted mt-1">
                        Manage your client logos displayed on the homepage.
                    </p>
                </div>
                <Link
                    href="/contents/clients/create"
                    className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg font-medium shadow-sm transition-colors flex items-center gap-2 hover-lift"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Add New Client
                </Link>
            </div>

            {/* GRID CARD */}
            <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden p-6">
                {clients.length === 0 ? (
                    <div className="text-center py-12 text-muted">
                        No clients found. Add one to get started.
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {clients.map((client) => (
                            <div
                                key={client.id}
                                className="group relative bg-background border border-border rounded-xl p-4 hover:border-primary/50 transition-all"
                            >
                                {/* Logo */}
                                <div className="relative h-20 mb-3 bg-white rounded-lg flex items-center justify-center">
                                    <Image
                                        src={client.logoUrl}
                                        alt={client.name}
                                        fill
                                        className="object-contain p-2"
                                        sizes="(max-width: 768px) 50vw, 20vw"
                                    />
                                </div>

                                {/* Info */}
                                <div className="text-center">
                                    <h3 className="font-medium text-foreground text-sm truncate">
                                        {client.name}
                                    </h3>
                                    {client.websiteUrl && (
                                        <a
                                            href={client.websiteUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs text-muted hover:text-primary truncate block"
                                        >
                                            {client.websiteUrl.replace(/^https?:\/\//, "")}
                                        </a>
                                    )}
                                    <span className="text-xs text-muted">Order: {client.order}</span>
                                </div>

                                {/* Actions - show on hover */}
                                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Link
                                        href={`/contents/clients/${client.id}/edit`}
                                        className="p-1.5 bg-surface border border-border rounded-md text-muted hover:text-primary hover:bg-primary/10 transition-colors"
                                        title="Edit"
                                    >
                                        ✏️
                                    </Link>
                                    <DeleteClientButton id={client.id} />
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center text-sm text-muted pt-2">
                <span>
                    Showing {clients.length} client{clients.length !== 1 ? "s" : ""}
                </span>
            </div>
        </div>
    );
}
