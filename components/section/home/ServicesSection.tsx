"use client";

import ElegantReveal from "@/components/ui/ElegantReveal";
import {
    Database,
    Globe,
    LayoutGrid,
    Smartphone,
    Cpu, /* Using Cpu for AI */
    ArrowRight,
} from "lucide-react";
import Link from "next/link";

const serviceItems = [
    {
        title: "Custom ERP Development",
        features: [
            "Module untuk inventory, accounting, HR, production",
            "Real-time reporting & analytics",
            "Multi-location & multi-currency support",
            "Integration dengan existing systems"
        ],
        icon: Database,
        href: "/erp-solution",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        primary: true
    },
    {
        title: "Mobile ERP Apps",
        features: [
            "Native iOS & Android applications",
            "Offline-first untuk field teams",
            "Real-time data synchronization",
            "Location tracking & digital signatures"
        ],
        icon: Smartphone,
        href: "/service#mobile-development",
        color: "text-purple-500",
        bg: "bg-purple-500/10"
    },
    {
        title: "ERP AI & Automation",
        features: [
            "Intelligent data validation",
            "Predictive demand forecasting",
            "Automated approval workflows",
            "OCR for document processing"
        ],
        icon: Cpu,
        href: "/service#chatbot-ai",
        color: "text-pink-500",
        bg: "bg-pink-500/10"
    },
    {
        title: "Website & E-Commerce",
        features: [
            "Company profile & landing pages",
            "B2B/B2C e-commerce platforms",
            "Integration dengan ERP system",
            "Payment gateway & logistics integration"
        ],
        icon: Globe,
        href: "/service#website-development",
        color: "text-cyan-500",
        bg: "bg-cyan-500/10"
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px] -translate-x-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ElegantReveal direction="down">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
                            <LayoutGrid className="w-3 h-3" /> Our Expertise
                        </span>
                    </ElegantReveal>
                    <ElegantReveal delay={100} direction="up">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                            ERP & Digital Solutions
                        </h2>
                    </ElegantReveal>
                    <ElegantReveal delay={200} direction="up">
                        <p className="max-w-2xl mx-auto text-slate-600 text-lg">
                            Optimize your business operations with an integrated technology ecosystem.
                        </p>
                    </ElegantReveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {serviceItems.map((item, index) => (
                        <ElegantReveal
                            key={item.title}
                            delay={300 + index * 50}
                            direction="up"
                        >
                            <Link
                                href={item.href}
                                className={`group block h-full bg-white rounded-3xl p-6 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${item.primary ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-200 hover:border-purple-200'}`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">
                                    {item.title}
                                </h3>

                                <ul className="space-y-2 mb-6 flex-grow">
                                    {item.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-400 flex-shrink-0" />
                                            <span className="leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex items-center text-sm font-bold text-purple-600 mt-auto">
                                    <span className="group-hover:mr-2 transition-all">
                                        Learn more
                                    </span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                </div>
                            </Link>
                        </ElegantReveal>
                    ))}
                </div>

                <ElegantReveal delay={600} direction="up">
                    <div className="mt-16 text-center">
                        <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
                            We also provided <span className="font-semibold text-purple-600">chatbot development</span>, <span className="font-semibold text-purple-600">data science</span>, dan <span className="font-semibold text-purple-600">machine learning services</span> for ERP clients who need advanced analytics.
                        </p>
                    </div>
                </ElegantReveal>
            </div>
        </section>
    );
}
