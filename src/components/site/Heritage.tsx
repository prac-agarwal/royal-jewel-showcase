import heritageImg from "@/assets/heritage.jpg";
import haveli1 from "@/assets/haveli-1.jpg";
import haveli2 from "@/assets/haveli-2.jpg";
import haveli3 from "@/assets/haveli-3.jpg";
import haveli4 from "@/assets/haveli-4.jpg";
import { Rosette } from "./ornaments";

const stats = [
  { value: "1887", label: "Founded in Jaipur" },
  { value: "VII", label: "Generations of artisans" },
  { value: "240+", label: "Master karigars in residence" },
];

const walls = [
  { img: haveli1, label: "The Courtyard" },
  { img: haveli2, label: "The Setting Bench" },
  { img: haveli3, label: "The Jharokha" },
  { img: haveli4, label: "The Velvet Tray" },
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

      {/* Four walls of the haveli — 2x2 image wall */}
      <div className="relative mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-12">
        <div className="mb-10 flex flex-col items-center text-center md:mb-14">
          <p className="font-tagline text-gold text-[11px] uppercase tracking-[0.4em]">
            The Four Walls
          </p>
          <h3 className="font-display text-maroon mt-3 text-3xl md:text-4xl">
            Inside the haveli
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {walls.map((w) => (
            <figure key={w.label} className="group">
              <div className="chamfer-md relative aspect-[4/5] w-full overflow-hidden">
                <img
                  src={w.img}
                  alt={w.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="font-tagline text-ink/65 mt-3 text-center text-[10px] uppercase tracking-[0.32em]">
                {w.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
