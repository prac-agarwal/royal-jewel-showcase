import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  ALL_CATEGORIES,
  type Category,
  type Item,
  findCollection,
  formatInr,
} from "@/lib/collections-data";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const c = findCollection(params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — The House` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.tagline },
        ]
      : [],
  }),
  component: CollectionPage,
  notFoundComponent: () => (
    <div className="bg-ivory text-ink flex min-h-screen items-center justify-center">
      <div className="text-center">
        <p className="font-tagline text-gold text-xs uppercase tracking-[0.4em]">
          404
        </p>
        <h1 className="font-display text-maroon mt-4 text-4xl">
          Collection not found
        </h1>
        <Link
          to="/"
          className="font-tagline text-gold mt-8 inline-block text-xs uppercase tracking-[0.4em] underline underline-offset-8"
        >
          ← Return Home
        </Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="bg-ivory text-ink flex min-h-screen items-center justify-center">
      <p className="font-display text-maroon text-2xl">Something went wrong.</p>
    </div>
  ),
});

const PRICE_BANDS = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under ₹1L", min: 0, max: 100000 },
  { label: "₹1L – ₹5L", min: 100000, max: 500000 },
  { label: "₹5L – ₹10L", min: 500000, max: 1000000 },
  { label: "Above ₹10L", min: 1000000, max: Infinity },
];

function CollectionPage() {
  const collection = Route.useLoaderData();
  const [activeCats, setActiveCats] = useState<Set<Category>>(new Set());
  const [bandIdx, setBandIdx] = useState(0);

  const toggleCat = (c: Category) => {
    setActiveCats((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  };

  const presentCategories = useMemo(
    () =>
      ALL_CATEGORIES.filter((c) =>
        collection.items.some((it: Item) => it.category === c),
      ),
    [collection],
  );

  const filtered = useMemo(() => {
    const band = PRICE_BANDS[bandIdx];
    return collection.items.filter((it: Item) => {
      const inCat = activeCats.size === 0 || activeCats.has(it.category);
      const inPrice = it.price >= band.min && it.price <= band.max;
      return inCat && inPrice;
    });
  }, [collection, activeCats, bandIdx]);

  return (
    <div className="bg-ivory text-ink relative min-h-screen">
      {/* Themed atmospheric backdrop — fixed, faint, sets the mood for this collection */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${collection.atmosphere})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.18,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(250,246,239,0.55) 0%, rgba(250,246,239,0.85) 60%, rgba(250,246,239,0.95) 100%)",
        }}
      />
      <div className="relative z-10">
      {/* Header / cover */}
      <header className="relative h-[55vh] min-h-[420px] overflow-hidden">
        <img
          src={collection.cover}
          alt={collection.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(250,246,239,0.35) 0%, rgba(44,26,14,0.55) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 md:px-12">
          <nav className="flex items-center justify-between pt-8">
            <Link
              to="/"
              className="font-tagline text-ivory text-[11px] uppercase tracking-[0.4em] underline-offset-8 hover:underline"
            >
              ← The House
            </Link>
            <div className="border-ivory/70 h-10 w-10 border" aria-hidden />
          </nav>
          <div className="mt-auto pb-16">
            <p className="font-tagline text-ivory/90 text-xs uppercase tracking-[0.4em]">
              {collection.tagline}
            </p>
            <h1 className="font-display text-ivory mt-4 text-5xl md:text-7xl">
              {collection.title}
            </h1>
            <p
              className="text-ivory/85 mt-6 max-w-2xl text-lg italic md:text-xl"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {collection.description}
            </p>
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="border-gold/20 bg-ivory sticky top-0 z-20 border-b backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6 md:px-12">
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-tagline text-gold mb-3 text-[11px] uppercase tracking-[0.32em]">
                Form
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterChip
                  active={activeCats.size === 0}
                  onClick={() => setActiveCats(new Set())}
                  label="All"
                />
                {presentCategories.map((c) => (
                  <FilterChip
                    key={c}
                    active={activeCats.has(c)}
                    onClick={() => toggleCat(c)}
                    label={c}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="font-tagline text-gold mb-3 text-[11px] uppercase tracking-[0.32em]">
                Price
              </p>
              <div className="flex flex-wrap gap-2">
                {PRICE_BANDS.map((b, i) => (
                  <FilterChip
                    key={b.label}
                    active={bandIdx === i}
                    onClick={() => setBandIdx(i)}
                    label={b.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <p
            className="text-ink/70 text-sm italic"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
          </p>
        </div>

        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p
              className="text-ink/70 text-lg italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              No pieces match this filter. Try widening your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-10 lg:grid-cols-4">
            {filtered.map((it: Item) => (
              <article key={it.id} className="group">
                <div className="chamfer-md bg-ivory-soft relative aspect-square w-full overflow-hidden">
                  <img
                    src={it.image}
                    alt={it.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-6 transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 px-1">
                  <p className="font-tagline text-gold text-[10px] uppercase tracking-[0.32em]">
                    {it.category}
                  </p>
                  <h3 className="font-display text-maroon mt-2 text-base leading-snug md:text-lg">
                    {it.name}
                  </h3>
                  <p
                    className="text-ink/80 mt-1 italic"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {formatInr(it.price)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="bg-maroon">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
          <Link
            to="/"
            className="font-tagline text-ivory/90 text-xs uppercase tracking-[0.4em] underline-offset-8 hover:underline"
          >
            ← Return to The House
          </Link>
        </div>
      </footer>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "font-tagline px-4 py-2 text-[11px] uppercase tracking-[0.28em] transition",
        "chamfer-sm border",
        active
          ? "bg-maroon text-ivory border-transparent"
          : "border-gold/40 text-ink hover:border-gold hover:text-maroon bg-transparent",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
