import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Main Heading */}
        <Reveal delay={100}>
          <h2 className="text-center text-4xl font-bold leading-tight lg:text-6xl">
            Ready to start your{" "}
            <span className="relative inline-block">project?</span>
          </h2>
        </Reveal>

        {/* Subheading */}
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-purple-200">
            Lets discuss how One Station can help you build, scale, and
            innovate. Our team is ready to transform your vision into reality.
          </p>
        </Reveal>

        {/* CTA Buttons */}
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact">
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
              </span>
            </Button>

            <Button variant="secondary" href="/articles">
              <span className="flex items-center gap-2">
                View Case Studies
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
