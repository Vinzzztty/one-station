import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getAllProjects } from "@/services/projects.service";
import { ArrowUpRight } from "lucide-react";
import FeaturedWorkCarousel from "./FeaturedWorkCarousel";

export default async function FeaturedWork() {
  const projects = await getAllProjects();

  // Fallback for development if no projects exist
  const displayProjects = projects.length > 0 ? projects : [
    {
      id: "1",
      title: "E-Commerce Platform Redesign",
      category: "Website Development",
      description: "A complete overhaul of a major retail platform focusing on UX and conversion optimization.",
      imageUrls: ["https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "2",
      title: "Fintech Dashboard",
      category: "Web Application",
      description: "Real-time financial data visualization dashboard for investment banking clients.",
      imageUrls: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "3",
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Patient management system with telemedicine capabilities and secure data handling.",
      imageUrls: ["https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "4",
      title: "AI Analytics Platform",
      category: "Data Science",
      description: "Predictive analytics dashboard powered by machine learning algorithms for retail insights.",
      imageUrls: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    },
    {
      id: "5",
      title: "Logistics Tracking System",
      category: "Web Application",
      description: "Real-time fleet tracking and inventory management system for a global logistics company.",
      imageUrls: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600"],
      urlProject: "#",
    }
  ];

  return (
    <section className="bg-background py-24 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <Reveal>
            <div>
              <h2 className="text-4xl font-bold text-foreground">Featured Work</h2>
              <p className="mt-4 text-muted max-w-xl text-lg">
                Explore our latest projects and see how we help businesses transform their digital presence.
              </p>
            </div>
          </Reveal>
        
        </div>

        <FeaturedWorkCarousel projects={displayProjects} />
      </div>
    </section>
  );
}
