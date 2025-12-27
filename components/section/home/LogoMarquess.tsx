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
  const duplicatedLogos = [...logos, ...logos];
  return (
    <section className="py-20 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <p className="mb-12 text-lg font-semibold text-muted-foreground text-gray-500">
            TRUSTED BY INDUSTRY LEADERS
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="flex animate-infinite-scroll gap-12 items-center">
              {duplicatedLogos.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="relative h-12 w-32 flex-shrink-0 opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                >
                  <Image
                    src={src}
                    alt={`Client logo ${index}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
