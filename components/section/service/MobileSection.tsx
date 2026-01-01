import Image from "next/image";
import ElegantReveal from "@/components/ui/ElegantReveal";
import { Brain, Smartphone } from "lucide-react";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";

export default function MobileSection() {
  return (
    <section className="py-24 px-6 bg-[#F2F4F7]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT VISUAL */}
          <ElegantReveal>
            <div className="relative flex justify-center">
              <div className="w-[420px] flex flex-col gap-0">
                <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border shadow-xl group">
                  <Image
                    src="/image/mobile.png"
                    alt="Mobile App Preview"
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
                      Mobile App Development
                    </h3>
                  </div>
                </div>
                <ShowProjectsButton href="/contents/projects" category="Mobile Development" />
              </div>
            </div>
          </ElegantReveal>

          {/* RIGHT CONTENT */}
          <div>
            {/* Label */}
            <ElegantReveal delay={100} direction="up">
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-purple-600">
                <Smartphone className="h-4 w-4" />
                Mobile Engineering
              </div>
            </ElegantReveal>

            {/* Title */}
            <ElegantReveal delay={200} direction="up">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Mobile App <br /> Development
              </h2>
            </ElegantReveal>

            {/* Description */}
            <ElegantReveal delay={300} direction="up">
              <p className="text-slate-600 text-lg mb-10">
                We design and develop high-performance mobile applications that
                deliver seamless experiences across iOS and Android platforms.
              </p>
            </ElegantReveal>

            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  title: "iOS Native",
                  desc: "Swift & SwiftUI based development for maximum performance.",
                  icon: Smartphone,
                },
                {
                  title: "Android & Cross-Platform",
                  desc: "Kotlin, and React Native solutions for broad reach.",
                  icon: Smartphone,
                },
                {
                  title: "UX / UI Design",
                  desc: "User-centric design principles at the core of every tap",
                  icon: Brain,
                },
              ].map((item, index) => (
                <ElegantReveal key={item.title} delay={400 + index * 100} direction="up">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                </ElegantReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
