import Reveal from "@/components/ui/Reveal";

export default function ERPProcessSection() {
    return (
        <section id="process" className="py-32 bg-[#F8FBFF] text-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <Reveal>
                            <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">How we deliver</span>
                        </Reveal>
                        <Reveal delay={100}>
                            <h2 className="text-4xl md:text-5xl font-black mb-4">Our Approach: Start Small, Scale Fast</h2>
                        </Reveal>
                        <Reveal delay={200}>
                            <p className="text-slate-500 text-lg">We don't do massive overhauls. We implement automation in focused stages to ensure immediate value.</p>
                        </Reveal>
                    </div>
                    <div className="pb-2">
                        <Reveal delay={300}>
                            <div className="h-1 w-32 bg-purple-600 rounded-full" />
                        </Reveal>
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { step: "01", title: "Discovery", desc: "We analyze your current manual workflows and identify high-impact gaps." },
                        { step: "02", title: "Pilot Build", desc: "Develop one high-priority feature using your actual live data." },
                        { step: "03", title: "Rollout", desc: "Training your team and full integration with your ERP modules." },
                        { step: "04", title: "Optimization", desc: "Continuous model tuning to reach 90%+ accuracy levels." }
                    ].map((step, i) => (
                        <Reveal key={i} delay={400 + (i * 100)}>
                            <div className="relative group p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 h-full">
                                {/* Numbers adjusted for better readability (darker slate watermark) */}
                                <div className="text-8xl font-black text-slate-200/60 absolute -top-12 -left-2 z-0 select-none group-hover:text-purple-200/50 transition-colors">
                                    {step.step}
                                </div>
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                                <div className="mt-6 w-10 h-1 bg-purple-600/20 group-hover:w-full transition-all duration-700" />
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
