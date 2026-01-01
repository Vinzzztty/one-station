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
        }}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.id}-${index}`}
            className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[380px]"
          >
            <div className="group relative bg-surface rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
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

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={project.urlProject || "#"}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted line-clamp-3 mb-4 flex-grow">
                  {project.description}
                </p>
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
