import { Link } from "@tanstack/react-router";
import g1 from "@/assets/collection-1.jpg";
import g2 from "@/assets/collection-2.jpg";
import g3 from "@/assets/collection-3.jpg";
import g4 from "@/assets/collection-4.jpg";
import g5 from "@/assets/collection-5.jpg";

interface Tile {
  img: string;
  category: string;
  caption: string;
  slug: string;
  spans?: string;
}

const tiles: Tile[] = [
  {
    img: g1,
    category: "The Bridal Vault",
    caption: "Heirloom sets, sealed in velvet and silk",
    slug: "bridal-vault",
    spans: "md:col-span-2 md:row-span-2",
  },
  {
    img: g2,
    category: "Emerald Court",
    caption: "Polki & uncut diamonds",
    slug: "emerald-court",
  },
  {
    img: g3,
    category: "Temple Gold",
    caption: "Antique 22k devotional pieces",
    slug: "temple-gold",
  },
  {
    img: g4,
    category: "Everyday Heirlooms",
    caption: "Delicate chandbalis & chokers",
    slug: "everyday-heirlooms",
  },
  {
    img: g5,
    category: "Royal Regalia",
    caption: "Kamarbandh, payal & full sets",
    slug: "royal-regalia",
  },
];

export function Collections() {
  return (
    <section className="bg-ivory relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-tagline text-gold text-xs uppercase tracking-[0.4em]">
            Five Houses · One Lineage
          </p>
          <h2 className="font-display text-maroon mt-4 text-4xl md:text-5xl">
            The Collections
          </h2>
          <p
            className="text-ink mt-6 text-lg italic md:text-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            From the dowry trunks of Rajputana to the modern bride's vanity.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-5 md:mt-24 md:auto-rows-[300px] md:grid-cols-3 md:gap-6">
          {tiles.map((t) => (
            <Link
              key={t.slug}
              to="/collections/$slug"
              params={{ slug: t.slug }}
              className={`group chamfer-md relative block overflow-hidden ${t.spans ?? ""}`}
            >
              <img
                src={t.img}
                alt={t.category}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(44,26,14,0) 45%, rgba(44,26,14,0.6) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-tagline text-ivory/85 text-[11px] uppercase tracking-[0.32em]">
                  {t.caption}
                </p>
                <h3 className="font-display text-ivory mt-2 text-2xl md:text-3xl">
                  {t.category}
                </h3>
                <p className="font-tagline text-gold mt-3 text-[10px] uppercase tracking-[0.4em] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Enter the collection →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
