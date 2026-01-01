import Reveal from "@/components/ui/Reveal";
import { Database, Smartphone, Bot, Rocket } from "lucide-react";

export default function VisionSection() {
  const solutions = [
    {
      icon: Database,
      title: "Core ERP Development",
      features: [
        "Custom modules for inventory, accounting, HR, operations",
        "Real-time reporting and analytics",
        "Multi-location and multi-currency support",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      features: [
        "Native iOS and Android apps",
        "Field team management",
        "Real-time data sync",
      ],
    },
    {
      icon: Bot,
      title: "AI & Automation",
      features: [
        "Intelligent data entry and validation",
        "Predictive analytics",
        "Automated workflows and approvals",
      ],
    },
    {
      icon: Rocket,
      title: "Ongoing Evolution",
      features: [
        "Feature additions as you scale",
        "Performance optimization",
        "Technical support and training",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#F2F4F7]">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <Reveal>
            <div className="text-sm text-purple-600 font-bold mb-4 uppercase tracking-widest">
              Enterprise Solutions
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get the best <span className="text-purple-600">ERP solutions</span> from your best partner
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
              Streamlining your operations through technology. We implement and
              customize ERP systems that become the backbone of your productivity.
            </p>
          </Reveal>
        </div>

        {/* SOLUTION CARDS - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={300 + index * 100}>
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-purple-300 h-full">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-purple-100 shrink-0">
                    <solution.icon className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {solution.title}
                  </h3>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-purple-500 shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Note */}
        <Reveal delay={700}>
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500 italic max-w-2xl mx-auto">
              We also provide <b>web development, e-commerce, POS and data science services</b>
              for our ERP clients' broader digital needs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
