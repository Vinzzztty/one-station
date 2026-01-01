import { CheckCircle } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ERPPricingSection() {
    return (
        <section id="pricing" className="py-32 bg-[#F2F4F7] text-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <Reveal>
                        <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Pricing Strategy</span>
                    </Reveal>
                    <Reveal delay={100}>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Flexible Implementation Packages</h2>
                    </Reveal>
                    <Reveal delay={200}>
                        <p className="text-slate-500 max-w-xl mx-auto">Scalable automation solutions tailored to your operational size and technical infrastructure.</p>
                    </Reveal>
                </div>


                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <Reveal delay={300}>
                        <div className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                            <h3 className="text-2xl font-black mb-2">Starter</h3>
                            <p className="text-slate-500 text-sm mb-8">Perfect for small operations testing automation for the first time.</p>
                            <ul className="space-y-5 mb-10 text-sm flex-grow">
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" /> 1 Automation Feature</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" /> Core ERP Integration</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" /> 3 Months Tech Support</li>
                                <li className="flex items-center gap-3 font-medium text-slate-300"><CheckCircle className="w-5 h-5 flex-shrink-0" /> Custom ML Training</li>
                            </ul>
                            <button className="w-full py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-black hover:bg-slate-900 hover:text-white transition-all">Get a Quote</button>
                        </div>
                    </Reveal>

                    <Reveal delay={400}>
                        <div className="bg-purple-600 p-10 rounded-[2.5rem] relative overflow-hidden shadow-2xl shadow-purple-900/20 scale-105 z-10 text-white h-full flex flex-col">
                            <div className="absolute top-0 right-0 p-4 bg-white/20 text-[10px] font-black uppercase tracking-widest rounded-bl-2xl">Recommended</div>
                            <h3 className="text-2xl font-black mb-2">Smart Bundle</h3>
                            <p className="text-purple-100 text-sm mb-8">A complete automation suite designed for rapidly growing organizations.</p>
                            <ul className="space-y-5 mb-10 text-sm flex-grow">
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-white flex-shrink-0" /> 3 Automation Features</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-white flex-shrink-0" /> Full Database Integration</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-white flex-shrink-0" /> Custom Model Training</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-white flex-shrink-0" /> 6 Months Optimization</li>
                            </ul>
                            <button className="w-full py-4 bg-white text-purple-600 rounded-2xl font-black hover:bg-slate-50 transition-all shadow-xl">Get Assessment</button>
                        </div>
                    </Reveal>

                    <Reveal delay={500}>
                        <div className="bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                            <h3 className="text-2xl font-black mb-2">Enterprise</h3>
                            <p className="text-slate-500 text-sm mb-8">Customized automation at scale for multi-branch national corporations.</p>
                            <ul className="space-y-5 mb-10 text-sm flex-grow">
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" /> Full Automation Suite</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" /> Dedicated Developer Support</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" /> 12 Months VIP Support</li>
                                <li className="flex items-center gap-3 font-medium"><CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" /> Multi-location Rollout</li>
                            </ul>
                            <button className="w-full py-4 border-2 border-slate-200 text-slate-400 rounded-2xl font-black hover:border-slate-900 hover:text-slate-900 transition-all">Talk to Sales</button>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
