"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ExternalLink, ArrowRight, X, Zap, TrendingUp, ArrowLeft } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export interface PortfolioProject {
    id: string | number;
    title: string;
    category: string;
    description: string;
    imageUrls: string[];
    urlProject?: string;

    // Optional fields for fallback data only
    problem?: string;
    solution?: string;
    impact?: string;
    detailedExplanation?: string;
}

interface ERPPortfolioClientProps {
    projects: PortfolioProject[];
}

export default function ERPPortfolioClient({ projects }: ERPPortfolioClientProps) {
    const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
    const [mounted, setMounted] = useState(false);

    // Embla Carousel Setup
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "start", slidesToScroll: 1 },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
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

    const displayProjects = projects;

    // Loading State / SSR placeholder
    if (!mounted) {
        return (
            <section id="portfolio" className="py-24 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white">Our Recent Work</h2>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {displayProjects.slice(0, 3).map((item) => (
                            <div key={item.id} className="h-96 bg-slate-950 rounded-3xl border border-slate-800 animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="portfolio" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <Reveal>
                            <span className="text-purple-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Proven Results</span>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="text-4xl md:text-5xl font-black text-white">Our Recent Work</h2>
                        </Reveal>
                    </div>

                    {/* Navigation Buttons for larger screens */}
                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={scrollPrev}
                            className="h-12 w-12 rounded-full border border-slate-700 bg-slate-900 hover:bg-purple-600 hover:border-purple-500 hover:text-white text-slate-400 flex items-center justify-center transition-all"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="h-12 w-12 rounded-full border border-slate-700 bg-slate-900 hover:bg-purple-600 hover:border-purple-500 hover:text-white text-slate-400 flex items-center justify-center transition-all"
                        >
                            <ArrowRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>


                {/* Embla Carousel */}
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-6 py-4">
                        {displayProjects.map((item, index) => (
                            <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6">
                                <Reveal key={item.id} delay={index * 100}>
                                    <div
                                        onClick={() => setSelectedProject(item)}
                                        className="bg-slate-950 border border-slate-800 rounded-3xl hover:border-purple-500/40 transition-all flex flex-col group cursor-pointer overflow-hidden shadow-xl h-full"
                                    >
                                        <div className="h-48 w-full overflow-hidden relative">
                                            <Image
                                                src={item.imageUrls?.[0] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                                                onError={(e: any) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'; }}
                                            />
                                        </div>
                                        <div className="p-8 flex flex-col flex-grow">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h3 className="text-xl font-black mb-1 group-hover:text-purple-400 transition-colors text-white">{item.title}</h3>
                                                    <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">{item.category}</span>
                                                </div>
                                                {item.urlProject && (
                                                    <div className="p-2 bg-slate-900 rounded-lg">
                                                        <ExternalLink className="w-4 h-4 text-purple-400" />
                                                    </div>
                                                )}
                                            </div>


                                            <div className="space-y-6 flex-grow py-4">
                                                <div>
                                                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-2">
                                                        {item.problem ? "Challenge" : "Overview"}
                                                    </div>
                                                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                                                        {item.problem || item.description}
                                                    </p>
                                                </div>
                                            </div>


                                            <div className="mt-4 pt-6 border-t border-slate-900 flex items-center justify-between">
                                                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">Detail Case Study</span>
                                                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                                            </div>
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
                        className="h-10 w-10 rounded-full border border-slate-700 bg-slate-900 hover:bg-purple-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                    >
                        <ArrowLeft className="h-5 w-5" />
                    </button>

                    <button
                        onClick={scrollNext}
                        className="h-10 w-10 rounded-full border border-slate-700 bg-slate-900 hover:bg-purple-600 hover:text-white text-slate-400 flex items-center justify-center transition-colors"
                    >
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Portfolio Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-slate-900 border border-purple-500/30 rounded-[2.5rem] w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl shadow-purple-900/20 text-white">
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 p-3 bg-slate-950/50 hover:bg-red-500/20 rounded-full text-slate-400 hover:text-red-400 transition-all z-10"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="grid md:grid-cols-2 gap-0">
                            <div className="h-64 md:h-auto overflow-hidden relative min-h-[300px]">
                                <Image
                                    src={selectedProject.imageUrls?.[0] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                    onError={(e: any) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'; }}
                                />
                            </div>
                            <div className="p-10 md:p-12 space-y-8">
                                <div>
                                    <span className="text-purple-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Case Study Breakdown</span>
                                    <h2 className="text-3xl font-black mb-2">{selectedProject.title}</h2>
                                    <span className="text-sm text-slate-500">{selectedProject.category}</span>
                                </div>


                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <Zap className="w-3 h-3 text-purple-400" />
                                            {selectedProject.detailedExplanation ? "How It Works" : "Description"}
                                        </h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            {selectedProject.detailedExplanation || selectedProject.description}
                                        </p>
                                    </div>

                                    {selectedProject.impact && (
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                <TrendingUp className="w-3 h-3 text-green-400" /> Business Impact
                                            </h4>
                                            <p className="text-white text-sm font-semibold leading-relaxed bg-green-950/30 border border-green-500/20 p-4 rounded-xl">
                                                {selectedProject.impact}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <div className="pt-4">
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="w-full py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-purple-900/20"
                                    >
                                        Close Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
