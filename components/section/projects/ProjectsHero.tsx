"use client";

import ElegantReveal from "@/components/ui/ElegantReveal";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ProjectsHero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] pointer-events-none">
                <div className="w-full h-full bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none">
                <div className="w-full h-full bg-blue-600/5 rounded-full blur-[100px] animate-float-slow" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <ElegantReveal delay={0} direction="down">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles className="w-3 h-3" /> Our Portfolio
                    </span>
                </ElegantReveal>

                <ElegantReveal delay={100} direction="up">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground">
                        Showcasing Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                            Best Work
                        </span>
                    </h1>
                </ElegantReveal>

                <ElegantReveal delay={200} direction="up">
                    <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
                        Explore a collection of our most impactful projects. From custom ERP
                        systems to cutting-edge mobile apps and AI solutions, we deliver
                        excellence.
                    </p>
                </ElegantReveal>

                <ElegantReveal delay={300} direction="up">
                    <div className="flex justify-center">
                        <Link
                            href="/contact"
                            className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-purple-900/20 hover:shadow-purple-700/40 hover:-translate-y-1"
                        >
                            Start Your Project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </ElegantReveal>
            </div>
        </section>
    );
}
