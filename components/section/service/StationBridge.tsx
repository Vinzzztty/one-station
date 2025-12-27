import Button from "@/components/ui/Button";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function StationBridge() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* GLOW */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-600 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <Reveal>
                <div className="inline-flex text-sm text-primary rounded-full bg-primary/20 px-4 py-2 font-semibold mb-4 uppercase tracking-wide">
                  Comprehensive Platform
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Station Bridge
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-gray-300 text-lg mb-8">
                  A unique ecosystem connecting ambitious startups with
                  enterprise resources. We act as a bridge between innovation
                  and scale, providing mentorship, infrastructure, and capital
                  introductions.
                </p>
              </Reveal>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Reveal delay={300}>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      500+
                    </div>
                    <div className="text-sm text-white">Projects Delivered</div>
                  </div>
                </Reveal>

                <Reveal delay={400}>
                  <div className="p-4">
                    <div className="text-2xl font-bold text-primary mb-1">
                      $10M+
                    </div>
                    <div className="text-sm text-white">
                      Capital & Growth Impact
                    </div>
                  </div>
                </Reveal>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <Reveal>
              <div className="relative flex justify-center md:justify-end">
                <div className="w-full h-[320px] md:h-[360px] relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/image/station.png"
                    alt="Station Bridge Platform"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
