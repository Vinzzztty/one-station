"use client";

import { useState, useEffect } from "react";
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

const AUTO_SWITCH_INTERVAL = 5000; // 30 seconds

export default function ServicesRotator() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SECTIONS.length);
        }, AUTO_SWITCH_INTERVAL);

        return () => clearInterval(interval);
    }, [isPaused]);

    const CurrentSection = SECTIONS[activeIndex].Component;

    return (
        <div
            className="relative group min-h-[600px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-4 items-center px-4 py-2 rounded-full backdrop-blur-sm bg-black/10 border border-white/5 shadow-2xl">
                {SECTIONS.map((section, index) => (
                    <button
                        key={section.id}
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={cn(
                            "h-3 rounded-full transition-all duration-300 shadow-sm",
                            activeIndex === index
                                ? "w-10 bg-primary"
                                : "w-3 bg-slate-300/50 hover:bg-primary/50 hover:scale-125"
                        )}
                        aria-label={`Switch to ${section.label}`}
                    />
                ))}
            </div>

            {/* Content Area with Fade Transition */}
            <div key={activeIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CurrentSection />
            </div>
        </div>
    );
}
