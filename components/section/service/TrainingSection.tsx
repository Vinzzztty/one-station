import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import ShowProjectsButton from "@/components/ui/ShowProjectsButton";

export default function TrainingSection() {
  const programs = [
    {
      title: "Technical Certifications",
      description: "Industry-recognized credentials in emerging technologies",
    },
    {
      title: "Agile Workshops",
      description: "Hands-on training in modern development for your teams",
    },
    {
      title: "Leadership Coaching",
      description: "Develop tech leaders and nurture innovation mindset",
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT VISUAL */}
          <Reveal>
            <div className="relative flex justify-center">
              <div className="w-[420px] flex flex-col gap-0">
                <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-border shadow-xl group">
                  <Image
                    src="/image/training.png"
                    alt="Corporate Training"
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
                      Corporate Training
                    </h3>
                  </div>
                </div>
                <ShowProjectsButton href="/contents/projects" category="Training" />
              </div>
            </div>
          </Reveal>

          {/* RIGHT CONTENT */}
          <div>
            {/* Label */}
            <Reveal>
              <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary">
                <GraduationCap className="h-4 w-4" />
                Corporate Education
              </div>
            </Reveal>

            {/* Title */}
            <Reveal delay={100}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Training
              </h2>
            </Reveal>

            {/* Description */}
            <Reveal delay={200}>
              <p className="text-muted text-lg mb-10">
                Technology moves fast, we help your internal teams keep up. Our
                customized training programs are designed to upskill your
                workforce in the latest tools and methodologies.
              </p>
            </Reveal>

            {/* FEATURES */}
            <div className="space-y-6">
              {programs.map((item, index) => (
                <Reveal key={item.title} delay={300 + index * 150}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-2xl font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
