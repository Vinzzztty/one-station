import { FileText, Bot, TrendingUp, PieChart } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const features = [
    {
        id: "ocr",
        title: "Intelligent Document Processing (OCR)",
        icon: <FileText className="w-8 h-8 text-purple-400" />,
        description: "Automatically capture data from physical or digital documents like supplier invoices, POs, and receipts directly into your ERP.",
        stats: "70% Manual Entry Reduction", // Shortened for fit
        timeline: "6-8 Weeks"
    },
    {
        id: "chatbot",
        title: "WhatsApp Internal Chatbot",
        icon: <Bot className="w-8 h-8 text-purple-400" />,
        description: "Enable employees to query stock levels, prices, or order status via WhatsApp without needing to log into the ERP system.",
        stats: "Instant Data Access",
        timeline: "6-8 Weeks"
    },
    {
        id: "analytics",
        title: "Predictive Analytics",
        icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
        description: "Leverage historical data to forecast demand, optimize inventory levels, and predict cash flow patterns for better planning.",
        stats: "85% Forecast Accuracy",
        timeline: "6-8 Weeks"
    },
    {
        id: "reporting",
        title: "Automated Reporting & Alerts",
        icon: <PieChart className="w-8 h-8 text-purple-400" />,
        description: "Schedule automated reports and real-time alerts delivered straight to email or WhatsApp for mission-critical KPIs.",
        stats: "100% Automated Workflow",
        timeline: "4-6 Weeks"
    }
];

export default function ERPFeaturesSection() {
    return (
        <section id="features" className="py-24 bg-slate-900/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <Reveal>
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Automation Built for Your ERP</h2>
                        </Reveal>
                        <Reveal delay={200}>
                            <p className="text-muted">Choose the modules your business needs most. Start small, prove ROI, then scale up.</p>
                        </Reveal>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Reveal key={feature.id} delay={index * 100}>
                            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl flex flex-col hover:border-purple-500/30 transition-all group h-full">
                                <div className="mb-6 p-3 bg-slate-950 rounded-xl w-fit group-hover:bg-purple-900/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-slate-100">{feature.title}</h3>
                                <p className="text-sm text-slate-400 mb-8 flex-grow leading-relaxed">{feature.description}</p>

                                <div className="pt-6 border-t border-slate-800 space-y-3">
                                    <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-500">
                                        <span>Target Goal</span>
                                        <span className="text-purple-400">{feature.stats}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs">
                                        <span className="text-slate-400">Timeline</span>
                                        <span className="font-semibold text-blue-400">{feature.timeline}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
