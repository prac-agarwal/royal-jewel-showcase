const steps = [
  {
    numeral: "I",
    title: "The Sketch",
    text: "A master designer draws the piece on parchment, balancing classical Mughal motifs against the modern silhouette of the bride.",
  },
  {
    numeral: "II",
    title: "Ghaat",
    text: "The bare gold framework is hand-cast and chiselled into a precise lattice that will hold every uncut stone in place.",
  },
  {
    numeral: "III",
    title: "Khudai",
    text: "The reverse face is engraved with meenakari — enamel of ruby, emerald and ivory — so the jewel sings even from behind.",
  },
  {
    numeral: "IV",
    title: "Jadai",
    text: "Polki diamonds, uncut and unfaceted, are set into the gold with foil backing — a technique unique to Rajputana.",
  },
  {
    numeral: "V",
    title: "Pakai",
    text: "The finished piece is gently polished, blessed at the family shrine, and laid to rest in a velvet trunk bearing the house seal.",
  },
];

export function CraftTimeline() {
  return (
    <section className="bg-maroon text-ivory relative overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="font-tagline text-xs uppercase tracking-[0.4em]"
            style={{ color: "var(--gold-soft)" }}
          >
            The Five Hands
          </p>
          <h2 className="font-display mt-5 text-4xl md:text-6xl">
            From dust of the desert to the bride's ear.
          </h2>
          <p
            className="text-ivory/75 mt-6 text-lg italic md:text-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Every piece passes through five generations of skill — a slow
            choreography unchanged in a hundred and forty years.
          </p>
        </div>

        <ol className="mt-20 grid grid-cols-1 gap-y-14 md:mt-28 md:grid-cols-5 md:gap-x-8 md:gap-y-0">
          {steps.map((step) => (
            <li key={step.numeral} className="text-center md:text-left">
              <div
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 md:mx-0"
                style={{ borderColor: "var(--gold)" }}
              >
                <span
                  className="font-display text-2xl"
                  style={{ color: "var(--gold-soft)" }}
                >
                  {step.numeral}
                </span>
              </div>
              <h3 className="font-display mt-6 text-xl tracking-wider md:text-2xl">
                {step.title}
              </h3>
              <p
                className="text-ivory/70 mt-4 text-base leading-relaxed md:text-lg"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
