"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Project } from "@/components/section/projects/ProjectsGrid";

interface ProjectDetailsModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailsModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailsModalProps) {
  const [detailsImageIndex, setDetailsImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset details index when opening
  useEffect(() => {
    if (isOpen) setDetailsImageIndex(0);
  }, [isOpen]);

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

  if (!mounted || !isOpen || !project) return null;

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

  return createPortal(
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-5xl bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button (Moved Outside) */}
        {/* Close Button (Inside Modal) */}
        <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
        >
            <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col h-full overflow-y-auto">
          {/* Full Image Display with Arrows */}
          <div className="w-full aspect-video bg-gray-100 relative group/details shrink-0">
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
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/details:opacity-100 transition-opacity"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
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
          <div className="p-8 md:p-10 space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4 mb-3">
                <h2 className="text-3xl font-bold text-[#140e1b]">
                  {project.title}
                </h2>
                <span className="shrink-0 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {project.category}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {project.detailedExplanation || project.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex justify-end">
              {project.urlProject && (
                <a
                  href={project.urlProject}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Visit Project <ArrowRight className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
