import heroImg from "@/assets/hero.jpg";
import { Mandala } from "./ornaments";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ivory">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,246,239,0.55) 0%, rgba(250,246,239,0.72) 40%, rgba(250,246,239,0.92) 100%)",
        }}
      />
      <Mandala className="text-gold pointer-events-none absolute left-1/2 top-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.07]" />

      {/* Empty brand slot top-left */}
      <div className="absolute left-6 top-6 h-14 w-44 md:left-12 md:top-10" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-32 text-center">
        <p className="font-tagline text-maroon text-xs uppercase tracking-[0.4em] md:text-sm">
          A Rajasthan Heirloom House
        </p>
        <h1
          className="text-maroon mt-8 max-w-4xl text-[clamp(3rem,9vw,7rem)] font-light italic leading-[0.95]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Jewels of the
          <br />
          Desert Palace
        </h1>
        <p className="text-ink mt-10 max-w-xl text-lg leading-relaxed md:text-xl" style={{ fontFamily: "var(--font-body)" }}>
          A private catalogue of kundan, polki and meenakari heirlooms, hand-set
          in the courtyards of Jaipur for the modern bride.
        </p>

        <button
          type="button"
          className="font-display chamfer-sm mt-12 bg-gold px-10 py-4 text-xs uppercase tracking-[0.32em] text-ivory transition hover:brightness-110"
        >
          Discover the Collection
        </button>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--ivory)] to-transparent" />
    </section>
  );
}
