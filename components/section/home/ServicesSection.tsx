import Reveal from "@/components/ui/Reveal";
import { Cloud, Bot, Palette, Briefcase } from "lucide-react";

const services = [
  {
    title: "Cloud Architecture",
    icon: Cloud,
    description:
      "Scalable, Secure, and cost-effective cloud infrastructure solutions designed for high availability.",
  },
  {
    title: "AI Consulting",
    icon: Bot,
    description:
      "Leverage data-driven insights and automation to stay ahead of the curve with custom AI models.",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "User-centric interfaces and experiences that delight customers and drive conversion rates",
  },
  {
    title: "Staff Augmentation",
    icon: Briefcase,
    description:
      "Access top-tier engineering talent on demand to scale your team quickly and efficiently",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h2 className="text-4xl font-bold text-foreground">
            What We Do Best
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 text-muted">
            Comprehensive technology services tailored for modern enterprises.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 100}>
                <div className="rounded-2xl border border-border bg-surface p-6 text-left hover:-translate-y-1 hover:shadow-lg transition-all">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h4 className="font-semibold text-foreground">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
