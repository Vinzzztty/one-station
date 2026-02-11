"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
    id: string;
    title: string;
    description: string;
    urlProject: string;
    category: string;
    imageUrls: string[];
};

interface HeroSlideshowProps {
    projects: Project[];
}

export default function HeroSlideshow({ projects }: HeroSlideshowProps) {
    const [current, setCurrent] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted || projects.length === 0) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [mounted, projects.length]);

    const next = () => setCurrent((prev) => (prev + 1) % projects.length);
    const prev = () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

    // Loading/SSR state
    if (!mounted || projects.length === 0) {
        return (
            <div className="relative w-full aspect-video bg-slate-900/50 border border-purple-900/20 rounded-[2rem] overflow-hidden flex items-center justify-center">
                <span className="text-muted text-sm">Loading projects...</span>
            </div>
        );
    }

    const currentProject = projects[current];

    return (
        <div className="relative w-full aspect-video bg-slate-900/50 border border-purple-900/20 rounded-[2rem] overflow-hidden group">
            {/* Full Image */}
            {currentProject.imageUrls?.[0] && (
                <Image
                    src={currentProject.imageUrls[0]}
                    alt={currentProject.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                />
            )}

            {/* Hover Overlay - Hidden by default, shows on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-8 text-center">
                <span className="text-purple-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {currentProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-3 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {currentProject.title}
                </h3>
                <p className="text-slate-300 text-sm max-w-xs mb-6 line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {currentProject.description}
                </p>

                <Link
                    href={currentProject.urlProject || "#"}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-bold transition-all translate-y-4 group-hover:translate-y-0 duration-300 delay-150"
                >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots - Always visible */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {projects.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all ${current === i ? 'w-8 bg-purple-500' : 'w-2 bg-white/50 hover:bg-white/70'}`}
                    />
                ))}
            </div>
        </div>
    );
}
