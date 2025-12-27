import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CTASection() {
  return (
    <section className="bg-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to innovate?
          </h2>
        </Reveal>

        {/* DESCRIPTION */}
        <Reveal delay={100}>
          <p className="text-gray-400 text-lg mb-10">
            Whether you need a complete digital transformation or a specific
            technical solution, One Station is ready to help bring your vision
            to life.
          </p>
        </Reveal>

        {/* CTA BUTTON */}
        <Reveal delay={200}>
          <Button href="/contact">
            <span className="text-lg">Start Your Project</span>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
