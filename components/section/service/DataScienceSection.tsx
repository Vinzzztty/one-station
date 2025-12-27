import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { BarChart3, Brain, CheckCircle } from "lucide-react";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";

export default function DataScienceSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <Reveal>
          <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <BarChart3 className="h-4 w-4" />
            Analytics & AI
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Data Science
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-muted text-lg mb-10">
                Turning raw data into actionable intelligence for your
                enterprise. We design scalable data architectures, predictive
                models, and decision-ready analytics systems.
              </p>
            </Reveal>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Reveal delay={300}>
                <div className="rounded-2xl bg-white p-6 border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4">
                    <BarChart3 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">
                    Predictive Analytics
                  </h3>
                  <p className="text-sm text-muted">
                    Forecast trends and patterns to stay ahead of the market.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="rounded-2xl bg-white p-6 border border-border shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4">
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
              </Reveal>
            </div>

            <Reveal delay={500}>
              <div className="mt-8 rounded-2xl bg-white p-6 border border-border shadow-sm hover:shadow-md transition-all">
                <div className="mb-4">
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
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <Reveal delay={300}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
