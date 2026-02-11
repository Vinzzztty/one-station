"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { getProjectsByCategoryAction } from "@/app/actions/getProjects";
import Button from "./Button";

interface Project {
  id: string;
  title: string;
  description: string;
  urlProject: string;
  imageUrls: string[];
  category: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [detailsImageIndex, setDetailsImageIndex] = useState(0);

  // Auto-rotate for card preview
  useEffect(() => {
    if (!project.imageUrls || project.imageUrls.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.imageUrls.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [project.imageUrls]);

  // Reset details index when opening
  useEffect(() => {
    if (showDetails) setDetailsImageIndex(0);
  }, [showDetails]);

  const nextImage = () => {
    if (!project.imageUrls) return;
    setDetailsImageIndex((prev) => (prev + 1) % project.imageUrls.length);
  };

  const prevImage = () => {
    if (!project.imageUrls) return;
    setDetailsImageIndex((prev) => 
      prev === 0 ? project.imageUrls.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="snap-center shrink-0 w-[300px] md:w-[340px] flex flex-col bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-full aspect-[4/3] bg-gray-200 relative overflow-hidden group">
          {project.imageUrls && project.imageUrls.length > 0 ? (
            <>
              {project.imageUrls.map((url, index) => (
                <div
                  key={url}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={url}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
              {project.imageUrls.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {project.imageUrls.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex
                          ? "w-6 bg-white"
                          : "w-1.5 bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-[#140e1b] mb-2 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {project.description}
          </p>
          <button
            onClick={() => setShowDetails(true)}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors mt-auto"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {showDetails &&
        createPortal(
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              {/* Close Button */}
              <button
                onClick={() => setShowDetails(false)}
                className="absolute top-3 right-3 z-20 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors shadow-sm backdrop-blur-sm"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex flex-col h-full overflow-y-auto">
                {/* Full Image Display with Arrows */}
                <div className="w-full aspect-video bg-gray-100 relative group/details">
                  {project.imageUrls && project.imageUrls.length > 0 ? (
                    <>
                      <Image
                        src={project.imageUrls[detailsImageIndex]} 
                        alt={project.title}
                        fill
                        className="object-contain bg-gray-900" 
                      />
                      
                      {/* Navigation Arrows */}
                      {project.imageUrls.length > 1 && (
                        <>
                          <button 
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/details:opacity-100 transition-opacity"
                          >
                            <ChevronLeft className="w-6 h-6" />
                          </button>
                          <button 
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/details:opacity-100 transition-opacity"
                          >
                            <ChevronLeft className="w-6 h-6 rotate-180" />
                          </button>
                          
                          {/* Dots */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {project.imageUrls.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setDetailsImageIndex(idx)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  idx === detailsImageIndex
                                    ? "w-6 bg-white"
                                    : "w-1.5 bg-white/60 hover:bg-white/80"
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Preview Available
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <h2 className="text-2xl font-bold text-[#140e1b]">
                        {project.title}
                      </h2>
                      <span className="shrink-0 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex justify-end">
                    {project.urlProject && (
                      <a
                        href={project.urlProject}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
                      >
                        Visit Project <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default function ProjectModal({ isOpen, onClose, category }: ProjectModalProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && category) {
      const fetchProjects = async () => {
        setIsLoading(true);
        const result = await getProjectsByCategoryAction(category);
        if (result.projects) {
          setProjects(result.projects as any);
        }
        setIsLoading(false);
      };
      fetchProjects();
    }
  }, [isOpen, category]);

  if (!mounted || !isOpen) return null;

  const getFooterTitle = (cat: string) => {
    switch (cat) {
      case "Data Science":
        return "Ready to leverage your data?";
      case "Mobile Development":
        return "Ready to build your app?";
      case "Website Development":
        return "Ready to launch your website?";
      case "Training":
        return "Ready to upskill your team?";
      default:
        return "Ready to start your project?";
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Modal Content Scrollable Area */}
        <div className="flex flex-col overflow-y-auto">
          {/* Header Section */}
          <div className="pt-10 px-8 md:px-12 pb-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#140e1b] mb-3">
              {category} Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Explore our recent {category} implementations aiming to solve complex business problems.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="w-full px-4 md:px-8 py-8 relative group/carousel">
             {/* Left Navigation Arrow */}
             <button 
                onClick={() => {
                  const container = document.getElementById("project-carousel-container");
                  if (container) {
                    container.scrollBy({ left: -340, behavior: "smooth" });
                  }
                }}
                className="hidden md:flex absolute left-0 top-[160px] -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-primary hover:scale-105 transition-transform duration-200 disabled:opacity-50"
                aria-label="Previous projects"
             >
               <ArrowLeft className="h-8 w-8" />
             </button>

             {/* Right Navigation Arrow */}
             <button 
                onClick={() => {
                  const container = document.getElementById("project-carousel-container");
                  if (container) {
                    container.scrollBy({ left: 340, behavior: "smooth" });
                  }
                }}
                className="hidden md:flex absolute right-0 top-[160px] -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full bg-white shadow-lg border border-gray-100 text-primary hover:scale-105 transition-transform duration-200 disabled:opacity-50"
                aria-label="Next projects"
             >
               <ArrowRight className="h-8 w-8" />
             </button>

              {/* Scroll Container */}
              <div 
                id="project-carousel-container"
                className="flex gap-6 overflow-x-auto pb-6 px-4 snap-x snap-mandatory [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
              >
                {isLoading ? (
                   // Loading Skeletons
                   Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="snap-center shrink-0 w-[300px] md:w-[340px] flex flex-col bg-gray-50 rounded-xl overflow-hidden shadow-sm h-[400px] animate-pulse">
                      <div className="w-full aspect-[4/3] bg-gray-200" />
                      <div className="p-6 space-y-4">
                        <div className="h-6 bg-gray-200 rounded w-3/4" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                      </div>
                    </div>
                  ))
                ) : projects.length > 0 ? (
                  projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
                ) : (
                  <div className="w-full py-12 text-center text-muted">
                    No projects found for this category.
                  </div>
                )}
              </div>
          </div>

          {/* Footer CTA */}
          <div className="border-t border-gray-100 bg-gray-50/80 p-8 md:px-12 mt-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-[#140e1b] mb-2">
                  {getFooterTitle(category)}
                </h3>
                <p className="text-gray-600">
                  Our team of experts is ready to discuss your next big idea.
                </p>
              </div>
              <Button href="/contact" className="!rounded-lg !px-8">
                Start a Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
