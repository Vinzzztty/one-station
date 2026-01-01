import { Database, Users, Zap } from "lucide-react";
import { ClientSuccess } from "./ClientSuccess";
import ElegantReveal from "@/components/ui/ElegantReveal";

export default function BusinessSolutionSection() {
  const solutions = [
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline operations and reduce manual workload",
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Centralize customer data and improve relationships",
    },
    {
      icon: Database,
      title: "Custom ERP",
      description: "Tailored enterprise resource planning solutions",
    },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <ElegantReveal direction="down">
            <div className="text-sm text-primary font-bold mb-4 uppercase tracking-wide">
              Enterprise Solutions
            </div>
          </ElegantReveal>

          <ElegantReveal delay={100} direction="up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Business Solutions
            </h2>
          </ElegantReveal>

          <ElegantReveal delay={200} direction="up">
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Streamlining your operations through technology. We implement and
              customize ERP and CRM systems that become the backbone of your
              productivity.
            </p>
          </ElegantReveal>
        </div>

        {/* SOLUTION CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <ElegantReveal key={solution.title} delay={300 + index * 150} direction="up">
              <div className="bg-background rounded-3xl p-10 border border-border text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Icon */}
                <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted">{solution.description}</p>
              </div>
            </ElegantReveal>
          ))}
        </div>

        {/* CLIENT SUCCESS */}
        <ElegantReveal delay={800} direction="up">
          <div className="mt-20">
            <ClientSuccess />
          </div>
        </ElegantReveal>
      </div>
    </section>
  );
}
