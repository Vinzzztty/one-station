"use client";

import Image from "next/image";
import ElegantReveal from "@/components/ui/ElegantReveal";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon?: LucideIcon;
}

interface ServiceSectionLayoutProps {
    label: string;
    labelIcon: LucideIcon;
    title: React.ReactNode;
    description: string;
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
    projectCategory: string;
    features: Feature[];
    children?: React.ReactNode; // For any extra custom content if needed
}

export default function ServiceSectionLayout({
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
        <section className="relative w-full h-[850px] px-6 bg-background overflow-hidden flex items-center justify-center pb-48">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] pointer-events-none">
                <div className="w-full h-full bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none">
                <div className="w-full h-full bg-blue-600/5 rounded-full blur-[100px] animate-float-slow" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* VISUAL - Position based on imagePosition prop */}
                    <div className={cn("relative flex justify-center", imagePosition === "right" && "md:order-last md:justify-end")}>
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
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                                    {/* Content Overlay - Title on Image */}
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
                        {/* Label */}
                        <ElegantReveal delay={100} direction="up">
                            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                                <LabelIcon className="h-4 w-4" />
                                {label}
                            </div>
                        </ElegantReveal>

                        {/* Title */}
                        <ElegantReveal delay={200} direction="up">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                                {title}
                            </h2>
                        </ElegantReveal>

                        {/* Description */}
                        <ElegantReveal delay={300} direction="up">
                            <p className="text-muted text-lg mb-10">
                                {description}
                            </p>
                        </ElegantReveal>

                        {/* Features List */}
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
