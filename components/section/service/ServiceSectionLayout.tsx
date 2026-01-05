"use client";

import Image from "next/image";
import ElegantReveal from "@/components/ui/ElegantReveal";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Feature {
    title: string;
    description: string;
    icon?: LucideIcon;
}

interface ServiceSectionLayoutProps {
    id?: string;
    label: string;
    labelIcon: LucideIcon;
    title: React.ReactNode;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
    projectCategory: string;
    features: Feature[];
    children?: React.ReactNode;
}

export default function ServiceSectionLayout({
    id,
    label,
    labelIcon: LabelIcon,
    title,
    description,
    imageSrc,
    imageAlt,
    imagePosition = "left",
    projectCategory,
    features,
    children,
}: ServiceSectionLayoutProps) {
    return (
        <section id={id} className="relative w-full h-screen px-4 md:px-5 pt-16 md:pt-48 pb-20 md:pb-0 bg-background overflow-y-auto md:overflow-hidden flex items-start justify-center">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] pointer-events-none">
                <div className="w-full h-full bg-purple-600/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse-slow" />
            </div>
            <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 pointer-events-none">
                <div className="w-full h-full bg-blue-600/5 rounded-full blur-[100px] animate-float-slow" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* MOBILE LAYOUT */}
                <div className="md:hidden">
                    <ElegantReveal direction="up">
                        {/* Mobile Header Card */}
                        <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-3xl p-6 mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                                    <LabelIcon className="h-6 w-6 text-primary" />
                                </div>
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                    {label}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-foreground leading-tight mb-3">
                                {title}
                            </h2>
                            <p className="text-muted text-sm leading-relaxed">
                                {description}
                            </p>
                        </div>
                    </ElegantReveal>

                    {/* Mobile Features Grid */}
                    <ElegantReveal delay={200} direction="up">
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {features.map((item, index) => (
                                <div
                                    key={item.title}
                                    className="bg-surface/30 border border-border rounded-2xl p-4 hover:border-primary/50 transition-colors"
                                >
                                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                        {item.icon ? (
                                            <item.icon className="w-5 h-5 text-primary" />
                                        ) : (
                                            <span className="text-primary font-bold text-sm">{index + 1}</span>
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-foreground text-sm mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-muted line-clamp-2">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </ElegantReveal>

                    {/* Mobile CTA */}
                    <ElegantReveal delay={300} direction="up">
                        <Link
                            href="/contents/projects"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-2xl transition-colors"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </ElegantReveal>
                </div>

                {/* DESKTOP LAYOUT */}
                <div className="hidden md:grid md:grid-cols-2 gap-16 items-center">
                    {/* VISUAL */}
                    <div className={cn(
                        "relative flex justify-center",
                        imagePosition === "right" && "md:order-last md:justify-end"
                    )}>
                        <ElegantReveal direction={imagePosition === "left" ? "right" : "left"}>
                            <div className="w-[420px] flex flex-col gap-0">
                                <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border shadow-xl group">
                                    <Image
                                        src={imageSrc}
                                        alt={imageAlt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold mb-2 shadow-lg">
                                            Project Showcase
                                        </span>
                                        <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md">
                                            {label}
                                        </h3>
                                    </div>
                                </div>
                                <ShowProjectsButton href="/contents/projects" category={projectCategory} />
                            </div>
                        </ElegantReveal>
                    </div>

                    {/* CONTENT */}
                    <div>
                        <ElegantReveal delay={100} direction="up">
                            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                                <LabelIcon className="h-4 w-4" />
                                {label}
                            </div>
                        </ElegantReveal>

                        <ElegantReveal delay={200} direction="up">
                            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                                {title}
                            </h2>
                        </ElegantReveal>

                        <ElegantReveal delay={300} direction="up">
                            <p className="text-muted text-lg mb-10">
                                {description}
                            </p>
                        </ElegantReveal>

                        <div className="space-y-6">
                            {features.map((item, index) => (
                                <ElegantReveal key={item.title} delay={400 + index * 100} direction="up">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center flex-shrink-0 border border-border">
                                            {item.icon ? (
                                                <item.icon className="w-5 h-5 text-primary" />
                                            ) : (
                                                <span className="text-primary font-bold">{index + 1}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-1">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-muted">{item.description}</p>
                                        </div>
                                    </div>
                                </ElegantReveal>
                            ))}
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
