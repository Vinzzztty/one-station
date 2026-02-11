"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrls: string[];
  urlProject: string;
};

interface FeaturedWorkCarouselProps {
  projects: Project[];
}

export default function FeaturedWorkCarousel({ projects }: FeaturedWorkCarouselProps) {
  const [mounted, setMounted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Duplicate projects to create seamless infinite loop
  const duplicatedProjects = [...projects, ...projects];

  // SSR placeholder to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative overflow-hidden">
        <div className="flex gap-6 py-4">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[380px]"
            >
              <div className="bg-surface rounded-2xl overflow-hidden border border-border h-[400px]" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {/* Smooth infinite scrolling container */}
      <div
        className="flex gap-6 py-4"
        style={{
          width: 'max-content',
          animation: 'scroll 120s linear infinite',
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[480px]"
          >
            <div className="group relative bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 h-full">
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                {project.imageUrls && project.imageUrls.length > 0 ? (
                  <Image
                    src={project.imageUrls[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-muted">
                    No Image
                  </div>
                )}

                {/* Overlay - Content shows on hover */}
                {/* On mobile (touch), we might want to consider showing improved visibility or just relying on tap */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider text-purple-400 mb-1 md:mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 line-clamp-2 mb-3 md:mb-4">
                      {project.description}
                    </p>
                    <Link
                      href={project.urlProject || "#"}
                      className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs md:text-sm font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}
