import { getProjectById } from "@/services/projects.service";
import EditProjectForm from "./EditProjectForm";
import { notFound } from "next/navigation";

interface EditProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditProjectPage(props: EditProjectPageProps) {
  const params = await props.params;
  const project = await getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return <EditProjectForm project={project} />;
}
