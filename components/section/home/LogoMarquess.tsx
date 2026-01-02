import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { getAllClients } from "@/services/clients.service";

export default async function LogoMarquess() {
  const clients = await getAllClients();

  return (
    <section className="py-16 md:py-24 bg-[#F2F4F7]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10">
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
            {clients.map((client) => (
              <div
                key={client.id}
                className="relative h-16 md:h-20 flex items-center justify-center bg-white rounded-2xl p-4 border border-slate-100 hover:border-purple-200 hover:shadow-md transition-all duration-300"
                title={client.name}
              >
                <Image
                  src={client.logoUrl}
                  alt={client.name}
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 25vw, (max-width: 1200px) 12vw, 10vw"
                />
              </div>
            ))}
          </div>
        </Reveal>

        {clients.length === 0 && (
          <div className="text-center py-8 text-slate-400">
            No clients to display yet.
          </div>
        )}
      </div>
    </section>
  );
}
