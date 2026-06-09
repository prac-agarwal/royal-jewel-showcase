import heritageImg from "@/assets/heritage.jpg";
import { Rosette } from "./ornaments";

const stats = [
  { value: "1887", label: "Founded in Jaipur" },
  { value: "VII", label: "Generations of artisans" },
  { value: "240+", label: "Master karigars in residence" },
];

export function Heritage() {
  return (
    <section className="bg-ivory relative overflow-hidden py-24 md:py-32">
      <Rosette className="text-gold absolute -left-32 top-1/3 h-[460px] w-[460px] opacity-[0.08]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-12 lg:gap-24">
        <div className="md:col-span-7 md:pr-8">
          <p className="font-tagline text-gold text-xs uppercase tracking-[0.4em]">
            Heritage · Est. 1887
          </p>
          <h2 className="font-display text-maroon mt-5 text-4xl leading-tight md:text-6xl">
            Four walls of a haveli, a lineage of seven.
          </h2>
          <div
            className="text-ink mt-8 space-y-6 text-lg leading-relaxed md:text-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <p>
              Behind a hand-carved sandstone door in the old quarter of Jaipur,
              our karigars still set every kundan stone by candle and by hand —
              the same way their great-grandfathers did for the courts of Amer
              and Mewar.
            </p>
            <p className="italic">
              Each piece is a small inheritance. A promise that craft, once
              kept, is never quite lost.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 md:gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-gold text-3xl md:text-5xl">
                  {s.value}
                </p>
                <p className="font-tagline text-ink/70 mt-3 text-[11px] uppercase tracking-[0.28em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="chamfer-lg relative aspect-[3/4] w-full overflow-hidden">
            <img
              src={heritageImg}
              alt="Master karigar setting a kundan stone by hand"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="font-tagline text-ink/60 mt-5 text-center text-[11px] uppercase tracking-[0.3em]">
            The Workshop · Johari Bazaar
          </p>
        </div>
      </div>
    </section>
  );
}
