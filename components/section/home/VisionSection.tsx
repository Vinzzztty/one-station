import Reveal from "@/components/ui/Reveal";
import { Database, Smartphone, Bot, Rocket, CheckCircle, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function VisionSection() {
  const solutions = [
    {
      icon: Database,
      module: "01",
      title: "Core ERP Development",
      description: "End-to-end orchestration for high-concurrency business operations.",
      features: [
        "Inventory, HR, Production",
        "Real-time Analytics",
        "Multi-currency Support",
        "Seamless Integration",
      ],
    },
    {
      icon: Smartphone,
      module: "02",
      title: "Mobile Integration",
      description: "Enterprise-grade native mobile applications for field teams.",
      features: [
        "Native iOS & Android",
        "Offline-first Access",
        "Real-time Data Sync",
        "Digital Signatures",
      ],
    },
    {
      icon: Bot,
      module: "03",
      title: "AI & Automation",
      description: "Predictive foresight and automated intelligence for decisions.",
      features: [
        "Demand Forecasting",
        "NLP Automation",
        "OCR Processing",
        "Anomaly Detection",
      ],
    },
    {
      icon: Rocket,
      module: "04",
      title: "Ongoing Evolution",
      description: "Continuous scaling support as your systems grow.",
      features: [
        "Feature Additions",
        "Performance Optimization",
        "Technical Support",
        "Team Training",
      ],
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center md:text-left mb-12">
          <Reveal>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <span className="h-px w-12 bg-purple-600"></span>
              <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-[10px]">
                Enterprise Solutions
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight leading-tight">
              Get the best <span className="text-purple-600">ERP solutions</span> from your best partner
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
              Streamlining your operations through technology. We implement and
              customize ERP systems that become the backbone of your productivity.
            </p>
          </Reveal>
        </div>

        {/* SOLUTION CARDS - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={300 + index * 50}>
              <div className="bg-white rounded-[2rem] p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-purple-400 h-full flex flex-col group">
                {/* Header: Icon & Module Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-purple-50 rounded-2xl">
                    <solution.icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                    Module {solution.module}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {solution.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6 flex-grow">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-purple-100 bg-purple-50/50 text-purple-600 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-300"
                  >
                    View Module Specs
                    <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
