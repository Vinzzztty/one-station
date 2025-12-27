import Reveal from "@/components/ui/Reveal";
import { Users, Rocket, Smile } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "50+",
      label: "Collaborations",
      icon: Users,
    },
    {
      value: "200+",
      label: "Projects Shipped",
      icon: Rocket,
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      icon: Smile,
    },
  ];

  return (
    <section className="bg-background py-24">
      <Reveal>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 100}>
                <div className="flex items-center gap-6 rounded-2xl border border-border bg-surface p-8 hover:-translate-y-1 hover:shadow-lg transition-all">
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {item.value}
                    </h3>
                    <p className="mt-1 text-muted">{item.label}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
