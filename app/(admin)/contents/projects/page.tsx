import Link from "next/link";
import { getAllProjects } from "@/services/projects.service";
import DeleteProjectButton from "@/components/ui/DeleteProjectButton";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <p className="text-muted mt-1">
            Manage your portfolio projects here.
          </p>
        </div>
        <Link
          href="/contents/projects/create"
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
          Add New Project
        </Link>
      </div>

      {/* TABLE CARD */}
      <div className="bg-surface border border-border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-background/50 text-muted text-sm uppercase tracking-wider">
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">URL</th>
              <th className="p-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {projects.map((item) => (
              <tr
                key={item.id}
                className="group hover:bg-background transition-colors"
              >
                <td className="p-4">
                  <div className="font-medium text-foreground">
                    {item.title}
                  </div>
                </td>

                <td className="p-4 text-muted text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {item.category || "Website Development"}
                  </span>
                </td>

                <td className="p-4 text-muted text-sm">
                  {item.urlProject ? (
                    <a
                      href={item.urlProject}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {item.urlProject}
                    </a>
                  ) : (
                    <span className="text-muted/50">-</span>
                  )}
                </td>

                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/contents/projects/${item.id}/edit`}
                      className="p-2 text-muted hover:text-primary transition-colors rounded-md hover:bg-primary/10"
                      title="Edit"
                    >
                      ✏️
                    </Link>

                    <DeleteProjectButton id={item.id} />
                  </div>
                </td>
              </tr>
            ))}

            {projects.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-muted">
                  No projects found. Create one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center text-sm text-muted pt-2">
        <span>
          Showing 1-{projects.length} of {projects.length} projects
        </span>
      </div>
    </div>
  );
}
