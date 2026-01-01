import Image from "next/image";
import ElegantReveal from "@/components/ui/ElegantReveal";
import { Bot, MessageSquare, Zap, Sparkles } from "lucide-react";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";

export default function ChatbotAISection() {
    return (
        <section className="py-24 px-6 bg-[#F2F4F7]">
            <div className="max-w-7xl mx-auto">
                {/* Label */}
                <ElegantReveal>
                    <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-600">
                        <Bot className="h-4 w-4" />
                        Conversational AI
                    </div>
                </ElegantReveal>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* LEFT IMAGE */}
                    <ElegantReveal delay={300}>
                        <div className="relative flex justify-center md:justify-start">
                            <div className="w-[420px] flex flex-col gap-0">
                                <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border shadow-xl group">
                                    <Image
                                        src="/image/data-science.png"
                                        alt="AI Chatbot Interface"
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 p-6 w-full">
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold mb-2 shadow-lg">
                                            Project Showcase
                                        </span>
                                        <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md">
                                            AI Customer Support Bot
                                        </h3>
                                    </div>
                                </div>

                                <ShowProjectsButton href="/contents/projects" category="Chatbot" />
                            </div>
                        </div>
                    </ElegantReveal>

                    {/* RIGHT CONTENT */}
                    <div>
                        <ElegantReveal delay={100}>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Chatbot & AI Agent
                            </h2>
                        </ElegantReveal>

                        <ElegantReveal delay={200}>
                            <p className="text-slate-600 text-lg mb-10">
                                Build intelligent conversational experiences that automate customer support,
                                streamline operations, and provide 24/7 assistance. Our AI agents understand
                                context, learn from interactions, and integrate seamlessly with your systems.
                            </p>
                        </ElegantReveal>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ElegantReveal delay={300}>
                                <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                                    <div className="mb-4">
                                        <MessageSquare className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">
                                        Custom Chatbots
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        WhatsApp, Telegram, web-based chatbots tailored to your business needs.
                                    </p>
                                </div>
                            </ElegantReveal>

                            <ElegantReveal delay={400}>
                                <div className="rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                                    <div className="mb-4">
                                        <Zap className="h-6 w-6 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">
                                        Process Automation
                                    </h3>
                                    <p className="text-sm text-slate-500">
                                        Automate repetitive tasks with intelligent AI workflows and integrations.
                                    </p>
                                </div>
                            </ElegantReveal>
                        </div>

                        <ElegantReveal delay={500}>
                            <div className="mt-8 rounded-2xl bg-white p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-purple-300 transition-all">
                                <div className="mb-4">
                                    <Sparkles className="h-6 w-6 text-purple-600" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-3">
                                    LLM Integration
                                </h4>
                                <p className="text-sm text-slate-500">
                                    Leverage GPT, Claude, and other large language models for advanced
                                    reasoning and natural language understanding.
                                </p>
                            </div>
                        </ElegantReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
