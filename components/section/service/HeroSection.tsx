import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <Image
              src="/image/hero.png"
              alt="Hero Background"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-slate-900/80" />
          </div>

          {/* GLOW EFFECT (STATIC) */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 p-12 md:p-16 max-w-2xl">
            {/* Heading */}
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-36 leading-tight">
                Engineering the Future
              </h1>
            </Reveal>

            {/* Description */}
            <Reveal delay={100}>
              <p className="text-xl text-gray-300 mb-8">
                One Station provides comprehensive digital solutions for modern
                enterprises, from raw data to deployed infrastructure. We bridge
                the gap between vision and reality.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-4">
                <Button href="https://wa.me/6285155424787">
                  Get Consultation
                </Button>
                <Button variant="secondary" href="/articles">
                  View Case Studies
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
