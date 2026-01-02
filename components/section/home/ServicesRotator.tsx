"use client";

import { useEffect, useState, useRef } from "react";
import BusinessSolutionSection from "@/components/section/service/BusinessSolustionSection";
import ChatbotAISection from "@/components/section/service/ChatbotAISection";
import DataScienceSection from "@/components/section/service/DataScienceSection";
import MobileSection from "@/components/section/service/MobileSection";
import WebsiteSection from "@/components/section/service/WebsiteSection";
import { cn } from "@/lib/utils";

const SECTIONS = [
    { id: "mobile", label: "Mobile Development", Component: MobileSection },
    { id: "website", label: "Website Development", Component: WebsiteSection },
    { id: "datascience", label: "Data Science", Component: DataScienceSection },
    { id: "chatbot", label: "Chatbot & AI", Component: ChatbotAISection },
    { id: "business", label: "Business Solutions", Component: BusinessSolutionSection },
];

export default function ServicesRotator() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Update active index based on scroll position
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const sectionHeight = window.innerHeight;
            const newIndex = Math.round(scrollTop / sectionHeight);

            if (newIndex >= 0 && newIndex < SECTIONS.length && newIndex !== activeIndex) {
                setActiveIndex(newIndex);
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [activeIndex]);

    const scrollToSection = (index: number) => {
        const container = containerRef.current;
        if (container) {
            const sectionHeight = window.innerHeight;
            container.scrollTo({
                top: index * sectionHeight,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative h-screen overflow-hidden bg-background">
            {/* Side Navigation */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3 items-end">
                {SECTIONS.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(index)}
                        className="group flex items-center gap-3"
                        aria-label={`Go to ${section.label}`}
                    >
                        <span className={cn(
                            "text-xs font-medium uppercase tracking-wider transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                            activeIndex === index ? "text-primary" : "text-slate-400"
                        )}>
                            {section.label}
                        </span>
                        <span className={cn(
                            "w-3 h-3 rounded-full transition-all duration-300 border-2",
                            activeIndex === index
                                ? "bg-primary border-primary scale-125"
                                : "bg-transparent border-slate-400 hover:border-primary hover:scale-110"
                        )} />
                    </button>
                ))}
            </div>

            {/* Fullpage Scroll Container with Snap */}
            <div
                ref={containerRef}
                className="h-screen overflow-y-scroll snap-y snap-proximity scrollbar-hide"
                style={{
                    scrollSnapType: "y proximity",
                    scrollBehavior: "smooth"
                }}
            >
                {SECTIONS.map((section, index) => {
                    const SectionComponent = section.Component;
                    return (
                        <div
                            key={section.id}
                            ref={(el) => { sectionRefs.current[index] = el; }}
                            className="h-screen snap-start overflow-y-auto md:overflow-hidden"
                            style={{ scrollSnapAlign: "start" }}
                        >
                            <SectionComponent />
                        </div>
                    );
                })}
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex md:hidden gap-2 items-center px-4 py-2 rounded-full backdrop-blur-md bg-black/20 border border-white/10 shadow-2xl">
                {SECTIONS.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => scrollToSection(index)}
                        className={cn(
                            "h-2.5 rounded-full transition-all duration-300",
                            activeIndex === index
                                ? "w-8 bg-primary"
                                : "w-2.5 bg-white/50 hover:bg-primary/50"
                        )}
                        aria-label={`Go to ${section.label}`}
                    />
                ))}
            </div>
        </div>
    );
}
