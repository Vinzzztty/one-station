"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import ElegantReveal from "@/components/ui/ElegantReveal";
import { cn } from "@/lib/utils";

export interface Project {
    id: string | number;
    title: string;
    category: string;
    description: string;
    imageUrls: string[];
    urlProject?: string;
    problem?: string;
    detailedExplanation?: string;
}

const CATEGORIES = [
    "All",
    "ERP Solution",
    "Mobile Development",
    "Website Development",
    "Chatbot",
    "Data Science",
    "Training",
];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        if (activeCategory === "All") return projects;
        return projects.filter((project) => project.category === activeCategory);
    }, [activeCategory, projects]);

    return (
        <section className="py-15 px-6 bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Category Filter */}
                <ElegantReveal delay={0} direction="down">
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold transition-all border",
                                    activeCategory === category
                                        ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-900/40"
                                        : "bg-slate-900 text-slate-400 border-slate-800 hover:border-purple-500/50 hover:text-purple-400 hover:-translate-y-0.5"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </ElegantReveal>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ElegantReveal key={project.id} delay={index * 50} direction="up">
                            <div className="group bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-purple-900/10 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={
                                            project.imageUrls?.[0] ||
                                            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                                        }
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        {project.urlProject && (
                                            <a
                                                href={project.urlProject}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-purple-600 transition-all ml-auto translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 border border-white/20"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
                                        {project.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.problem || project.description}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between text-sm font-bold text-slate-300 group-hover:text-purple-400 transition-colors">
                                        <span>View Case Study</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </ElegantReveal>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-xl font-bold text-slate-500">
                            No projects found in this category yet.
                        </h3>
                    </div>
                )}
            </div>
        </section>
    );
}
