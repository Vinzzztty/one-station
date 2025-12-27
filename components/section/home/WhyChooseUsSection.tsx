import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { Zap, Award, ShieldCheck, Headphones } from "lucide-react";

export default function WhyChooseUsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "Agile Methodology",
      description:
        "Iterative rapid-pace development velocity ensures you see results faster.",
    },
    {
      icon: Award,
      title: "Top 1% Talent",
      description:
        "Our rigorous vetting process guarantees you work with the best in the industry.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description:
        "Security is baked into every side of our development lifecycle.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support for peace of mind.",
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl font-bold text-foreground lg:text-4xl">
                Why Choose Us?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-3 max-w-2xl text-lg text-muted">
                We don`t just deliver code we deliver value through a proven
                process.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 100}>
              <div className="group overflow-hidden rounded-3xl border border-border bg-surface p-8 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-2xl">
                {/* Content */}
                <div className="">
                  {/* Icon */}
                  <div className="mb-6 flex gap-6 items-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      {/* Title */}
                      <h3 className="mb-3 text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                        {benefit.title}
                      </h3>

                      {/* Description */}
                      <p className="leading-relaxed text-muted transition-colors duration-300 group-hover:text-foreground">
                        {benefit.description}
                      </p>
                    </div>
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
