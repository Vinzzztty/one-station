import ProjectsHero from "@/components/section/projects/ProjectsHero";
import ProjectsGrid from "@/components/section/projects/ProjectsGrid";
import { getAllProjects } from "@/services/projects.service";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Projects | OneStation",
    description: "Explore our portfolio of successful digital transformation projects.",
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
    const projects = await getAllProjects();

    return (
        <div className="pt-8">
            <ProjectsHero />
            <ProjectsGrid projects={projects} />
        </div>
    );
}
