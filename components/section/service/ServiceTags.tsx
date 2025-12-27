"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import {
  BarChart3,
  BriefcaseBusiness,
  Globe,
  GraduationCap,
  Smartphone,
  Zap,
} from "lucide-react";

export default function ServiceTags() {
  const [active, setActive] = useState<string | null>(null);

  const services = [
    { icon: BarChart3, text: "Data Science" },
    { icon: Smartphone, text: "Mobile App" },
    { icon: Globe, text: "Web Dev" },
    { icon: BriefcaseBusiness, text: "Business Solutions" },
    { icon: GraduationCap, text: "E-training" },
    { icon: Zap, text: "Support" },
  ];

  return (
    <Reveal>
      <div className="border-y border-border py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {services.map((service, index) => {
              const isActive = active === service.text;
              const Icon = service.icon;

              return (
                <Reveal key={service.text} delay={index * 80}>
                  <button
                    onClick={() => setActive(service.text)}
                    className={`
                      group flex items-center gap-2 rounded-full px-6 py-3
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-primary/10"
                          : "bg-surface hover:bg-border"
                      }
                    `}
                  >
                    {/* Icon */}
                    <Icon
                      className={`
                        h-5 w-5 transition-colors duration-300
                        ${
                          isActive
                            ? "text-primary"
                            : "text-muted group-hover:text-foreground"
                        }
                      `}
                    />

                    {/* Text */}
                    <span
                      className={`
                        font-medium transition-colors duration-300
                        ${
                          isActive
                            ? "text-primary"
                            : "text-muted group-hover:text-foreground"
                        }
                      `}
                    >
                      {service.text}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
