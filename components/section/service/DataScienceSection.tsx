import Image from "next/image";
import ElegantReveal from "@/components/ui/ElegantReveal";
import { BarChart3, Brain, CheckCircle } from "lucide-react";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";

export default function DataScienceSection() {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] pointer-events-none">
        <div className="w-full h-full bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none">
        <div className="w-full h-full bg-blue-600/5 rounded-full blur-[100px] animate-float-slow" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Label */}
        <ElegantReveal delay={0} direction="down">
          <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <BarChart3 className="h-4 w-4" />
            Analytics & AI
          </div>
        </ElegantReveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <ElegantReveal delay={100} direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Data Science
              </h2>
            </ElegantReveal>

            <ElegantReveal delay={200} direction="up">
              <p className="text-muted text-lg mb-10">
                Turning raw data into actionable intelligence for your
                enterprise. We design scalable data architectures, predictive
                models, and decision-ready analytics systems.
              </p>
            </ElegantReveal>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ElegantReveal delay={300} direction="up">
                <div className="rounded-2xl bg-surface p-6 border border-border shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    Predictive Analytics
                  </h3>
                  <p className="text-sm text-muted">
                    Forecast trends and patterns to stay ahead of the market.
                  </p>
                </div>
              </ElegantReveal>

              <ElegantReveal delay={400} direction="up">
                <div className="rounded-2xl bg-surface p-6 border border-border shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    Machine Learning
                  </h3>
                  <p className="text-sm text-muted">
                    Intelligent systems that learn, adapt, and scale
                    automatically.
                  </p>
                </div>
              </ElegantReveal>
            </div>

            <ElegantReveal delay={500} direction="up">
              <div className="mt-8 rounded-2xl bg-surface p-6 border border-border shadow-sm hover:shadow-md transition-all group hover:-translate-y-1">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-3">
                  Big Data Infrastructure
                </h4>
                <p className="text-sm text-muted">
                  Scalable Architecture for massive datasets handling petabytes
                  of information
                </p>
              </div>
            </ElegantReveal>
          </div>

          {/* RIGHT IMAGE */}
          <ElegantReveal delay={300} direction="left">
            <div className="relative flex justify-center md:justify-end">
              <div className="w-[420px] flex flex-col gap-0">
                <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border shadow-xl group">
                  <Image
                    src="/image/data-science.png"
                    alt="Data Science Dashboard"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-bold mb-2 shadow-lg">
                      Project Showcase
                    </span>
                    <h3 className="text-white text-xl font-bold leading-tight drop-shadow-md">
                      Data Science Dashboard
                    </h3>
                  </div>
                </div>

                <ShowProjectsButton href="/contents/projects" category="Data Science" />
              </div>
            </div>
          </ElegantReveal>
        </div>
      </div>
    </section>
  );
}
