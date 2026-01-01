import { CheckCircle, ChevronRight, Globe } from "lucide-react";
import Image from "next/image";
import ElegantReveal from "@/components/ui/ElegantReveal";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";

export default function WebsiteSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <ElegantReveal>
          <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
            <Globe className="h-4 w-4" />
            Web Technologies
          </div>
        </ElegantReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Title */}
            <ElegantReveal delay={100} direction="up">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6">
                Website <br /> Development
              </h2>
            </ElegantReveal>

            {/* Description */}
            <ElegantReveal delay={200} direction="up">
              <p className="text-muted text-lg mb-8">
                High-performance web applications. From corporate landing pages
                to complex web apps, we deliver exceptional digital experiences.
              </p>
            </ElegantReveal>

            {/* Features */}
            <div className="space-y-4">
              {[
                "Responsive & Adaptive Design",
                "Modern Framework (React, Vue, Next.js)",
                "SEO & Performance Optimization",
                "CMS Integration & Headless Architecture",
              ].map((item, index) => (
                <ElegantReveal key={item} delay={300 + index * 100} direction="up">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-semibold">
                      {item}
                    </span>
                  </div>
                </ElegantReveal>
              ))}
            </div>


          </div>

          {/* RIGHT IMAGE */}
          <ElegantReveal>
            <div className="relative flex justify-center md:justify-end">
              <div className="w-[420px] flex flex-col gap-0">
                <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border shadow-xl group">
                  <Image
                    src="/image/website.png"
                    alt="Website Preview"
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
                      Website Development
                    </h3>
                  </div>
                </div>
                <ShowProjectsButton href="/contents/projects" category="Website Development" />
              </div>
            </div>
          </ElegantReveal>
        </div>
      </div>
    </section>
  );
}
