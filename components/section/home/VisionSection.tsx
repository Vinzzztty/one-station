import Reveal from "@/components/ui/Reveal";
import { Sparkles, Users } from "lucide-react";
import Image from "next/image";
export default function VisionSection() {
  const features = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Constantly pushing boundaries to find better solutions.",
    },
    {
      icon: Users,
      title: "People Centric",
      description: "Empowering talent to deliver their best work.",
    },
  ];

  return (
    <section className="relative bg-surface py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <Reveal>
            <div className="mb-6 gap-2 py-2">
              <span className="text-md font-semibold uppercase tracking-wide text-primary">
                Our Vision
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-4xl font-bold leading-tight text-foreground lg:text-5xl">
              Building the future of <span className="">enterprise tech.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
              We combine human ingenuity with powerful software solutions to
              solve the most complex challenges of the modern digital landscape.
              Our mission is to democratize access to elite engineering talent.
            </p>
          </Reveal>

          {/* Feature Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={300 + index * 100}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  {/* Icon */}
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Content */}
                  <h4 className="relative mb-2 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h4>
                  <p className="relative text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <Reveal delay={300}>
          <div className="relative flex justify-center lg:justify-end">
            {/* Image Container */}
            <div className="relative w-full max-w-xl aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl border border-border">
              {/* Image */}
              <Image
                src="/image/data-science.png"
                alt="Enterprise Technology Vision"
                fill
                className="object-cover"
                priority
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Bottom Left Text Content */}
              <div className="absolute bottom-6 left-6 right-6 max-w-sm">
                <p className="text-sm italic text-white leading-relaxed">
                  One Station transformed how we approach digital product
                  development.
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-600" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Sarah Chen
                    </p>
                    <p className="text-xs text-white/70">CTO, FinTech Global</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
