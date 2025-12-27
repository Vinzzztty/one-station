import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 via-white to-white py-32 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse-glow -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <Reveal>
          <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Leading the Future
            </span>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={100}>
          <h1 className="text-5xl font-bold leading-tight text-foreground sm:text-6xl md:text-7xl">
            Innovate faster with <br className="hidden sm:block" />
            <span className="text-primary">One Station</span> expertise.
          </h1>
        </Reveal>

        {/* Description */}
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            We bridge the gap between complex enterprise needs and cutting-edge
            technology solutions to drive sustainable growth.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25">
              <a href="/contact" className="relative z-10">Start Your Project</a>
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button
              variant="secondary"
              className="rounded-full px-8 py-6 text-lg border-2"
            >
              <svg
                className="mr-2 h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </Button>
          </div>
        </Reveal>

        {/* Social Proof */}
        <Reveal delay={400}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
              ].map((url, i) => (
                <div
                  key={i}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-background ring-2 ring-background"
                >
                  <Image
                    src={url}
                    alt={`Innovator ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm font-medium text-foreground">
              <span className="font-bold">500+ Innovators</span>
              <span className="ml-1 text-muted">trust our solutions</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
