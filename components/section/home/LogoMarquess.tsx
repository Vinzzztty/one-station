import Reveal from "@/components/ui/Reveal";
import fs from "fs";
import Image from "next/image";
import path from "path";

const getLogos = () => {
  const directoryPath = path.join(process.cwd(), "public", "logo-client");
  try {
    const fileNames = fs.readdirSync(directoryPath);
    const images = fileNames.filter((file) =>
      /\.(png|jpe?g|svg|webp)$/.test(file)
    );

    return images.map((name) => `/logo-client/${name}`);
  } catch (error) {
    console.error("Error reading logo directory:", error);
    return [];
  }
};

export default function LogoMarquess() {
  const logos = getLogos();

  return (
    <section className="py-16 md:py-24 bg-[#F2F4F7]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 max-w-xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Clients
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-slate-500 text-sm leading-relaxed">
              With a wide-range of clients in any industry with different scales
              and challenges, from multinational, state-owned enterprise, and
              private businesses, One Station has fulfilled its commitment to grow with
              its clients.
            </p>
          </Reveal>
        </div>

        {/* Logo Grid */}
        <Reveal delay={200}>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4">
            {logos.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-16 md:h-20 flex items-center justify-center bg-white rounded-2xl p-4 border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
              >
                <Image
                  src={src}
                  alt={`Client logo ${index + 1}`}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 10vw"
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
