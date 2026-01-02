import { notFound } from "next/navigation";
import { getClientById } from "@/services/clients.service";
import EditClientForm from "./EditClientForm";

export default async function EditClientPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const client = await getClientById(id);

    if (!client) {
        notFound();
    }

    return <EditClientForm client={client} />;
}
