import Image from "next/image";

function ClientSuccess() {
  const hasImage = true; // ganti true kalau sudah ada gambar real

  return (
    <div className="bg-background rounded-3xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="grid md:grid-cols-2">
        {/* LEFT - FULL IMAGE */}
        <div className="relative h-64 md:h-80">
          {hasImage ? (
            <Image
              src="/image/client.png"
              alt="Logistics Dashboard"
              fill
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-surface flex items-center justify-center text-muted text-sm font-medium">
              Image Placeholder
            </div>
          )}
        </div>

        {/* RIGHT - CONTENT */}
        <div className="p-10 md:p-12 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Client Success: Logistics Co.
          </h3>

          <p className="text-muted mb-8 leading-relaxed">
            Developed a comprehensive tracking system that improved delivery
            accuracy by{" "}
            <span className="font-semibold text-foreground">40%</span>, while
            reducing operational costs through automation.
          </p>

          {/* CLIENT INFO */}
          <div className="flex items-center gap-4">
            <Image
              src="/image/avatar.png"
              alt="Sarah Johnson"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-foreground">Sarah Johnson</div>
              <div className="text-sm text-muted">Operations Director</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ClientSuccess };
