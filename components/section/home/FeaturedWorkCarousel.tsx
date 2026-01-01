"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // SSR placeholder to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex -ml-6 py-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                <div className="bg-surface rounded-2xl overflow-hidden border border-border h-[350px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6 py-4">
          {projects.map((project, index) => (
            <div key={project.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
              <Reveal delay={index * 100}>
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
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Buttons (visible only on small screens) */}
      <div className="flex justify-center gap-4 mt-8 md:hidden">
        <button
          onClick={scrollPrev}
          className="h-10 w-10 rounded-full border border-border bg-background hover:bg-surface flex items-center justify-center transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-foreground" />
        </button>
        <button
          onClick={scrollNext}
          className="h-10 w-10 rounded-full border border-border bg-background hover:bg-surface flex items-center justify-center transition-colors"
        >
          <ArrowRight className="h-5 w-5 text-foreground" />
        </button>
      </div>
    </div>
  );
}
