import g1 from "@/assets/collection-1.jpg";
import g2 from "@/assets/collection-2.jpg";
import g3 from "@/assets/collection-3.jpg";
import g4 from "@/assets/collection-4.jpg";
import g5 from "@/assets/collection-5.jpg";
import atmBridal from "@/assets/atm-bridal.jpg";
import atmEmerald from "@/assets/atm-emerald.jpg";
import atmTemple from "@/assets/atm-temple.jpg";
import atmEveryday from "@/assets/atm-everyday.jpg";
import atmRoyal from "@/assets/atm-royal.jpg";
import p1 from "@/assets/piece-1.png";
import p2 from "@/assets/piece-2.png";
import p3 from "@/assets/piece-3.png";
import p4 from "@/assets/piece-4.png";
import p5 from "@/assets/piece-5.png";
import p6 from "@/assets/piece-6.png";
import p7 from "@/assets/piece-7.png";
import p8 from "@/assets/piece-8.png";
import p9 from "@/assets/piece-9.png";
import p10 from "@/assets/piece-10.png";

export type Category =
  | "Necklace"
  | "Choker"
  | "Earrings"
  | "Maang Tikka"
  | "Nath"
  | "Bangles"
  | "Bajuband"
  | "Haathphool"
  | "Kamarbandh"
  | "Payal"
  | "Toe Rings"
  | "Ring";

export const ALL_CATEGORIES: Category[] = [
  "Necklace",
  "Choker",
  "Earrings",
  "Maang Tikka",
  "Nath",
  "Bangles",
  "Bajuband",
  "Haathphool",
  "Kamarbandh",
  "Payal",
  "Toe Rings",
  "Ring",
];

export interface Item {
  id: string;
  name: string;
  category: Category;
  price: number; // INR
  image: string;
}

export interface Collection {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  cover: string;
  atmosphere: string;
  items: Item[];
}

const allPieces = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

// Helper: pick a piece image by category preference
const imgFor = (cat: Category, fallback = 0): string => {
  const map: Partial<Record<Category, string>> = {
    Necklace: p1,
    Choker: p10,
    Earrings: p2,
    "Maang Tikka": p3,
    Nath: p4,
    Bangles: p5,
    Haathphool: p6,
    Kamarbandh: p7,
    Payal: p8,
    Bajuband: p9,
  };
  return map[cat] ?? allPieces[fallback % allPieces.length];
};

const mk = (
  prefix: string,
  i: number,
  name: string,
  category: Category,
  price: number,
): Item => ({
  id: `${prefix}-${i}`,
  name,
  category,
  price,
  image: imgFor(category, i),
});

export const collections: Collection[] = [
  {
    slug: "bridal-vault",
    title: "The Bridal Vault",
    tagline: "Heirloom sets, sealed in velvet and silk",
    description:
      "Complete bridal trousseaus assembled in our Jaipur atelier — every piece you will wear from the haldi to the vidaai.",
    cover: g1,
    items: [
      mk("bv", 1, "Rani Haar of Mewar", "Necklace", 840000),
      mk("bv", 2, "Sheesh Phool Tikka", "Maang Tikka", 390000),
      mk("bv", 3, "Marwari Nath", "Nath", 175000),
      mk("bv", 4, "Bridal Chooda", "Bangles", 460000),
      mk("bv", 5, "Pearl Drop Jhumka", "Earrings", 215000),
      mk("bv", 6, "Padma Haathphool", "Haathphool", 295000),
      mk("bv", 7, "Saath Lara Choker", "Choker", 675000),
      mk("bv", 8, "Zarina Kamarbandh", "Kamarbandh", 520000),
      mk("bv", 9, "Bridal Bajuband Pair", "Bajuband", 240000),
      mk("bv", 10, "Ghungroo Payal", "Payal", 110000),
      mk("bv", 11, "Mehndi Toe Rings", "Toe Rings", 38000),
      mk("bv", 12, "Solitaire Engagement Ring", "Ring", 950000),
    ],
  },
  {
    slug: "emerald-court",
    title: "Emerald Court",
    tagline: "Polki & uncut diamonds set in emerald constellations",
    description:
      "A house dedicated to the green stone — Colombian emeralds paired with rose-cut polki, in the manner of the Mughal court.",
    cover: g2,
    items: [
      mk("ec", 1, "Emerald Rani Haar", "Necklace", 1240000),
      mk("ec", 2, "Zamrud Choker", "Choker", 880000),
      mk("ec", 3, "Polki Chandbali", "Earrings", 320000),
      mk("ec", 4, "Sabz Maang Tikka", "Maang Tikka", 410000),
      mk("ec", 5, "Mughal Bajuband", "Bajuband", 285000),
      mk("ec", 6, "Emerald Kada", "Bangles", 540000),
      mk("ec", 7, "Court Kamarbandh", "Kamarbandh", 720000),
      mk("ec", 8, "Emerald Solitaire", "Ring", 1100000),
      mk("ec", 9, "Zamrud Haathphool", "Haathphool", 365000),
    ],
  },
  {
    slug: "temple-gold",
    title: "Temple Gold",
    tagline: "Antique 22k devotional pieces",
    description:
      "Hand-cast in pure 22k gold by temple artisans — motifs of Lakshmi, lotus and peacock untouched for three centuries.",
    cover: g3,
    items: [
      mk("tg", 1, "Lakshmi Haar", "Necklace", 680000),
      mk("tg", 2, "Mango Jhumka", "Earrings", 145000),
      mk("tg", 3, "Lotus Maang Tikka", "Maang Tikka", 195000),
      mk("tg", 4, "Peacock Bajuband", "Bajuband", 210000),
      mk("tg", 5, "Temple Kada Pair", "Bangles", 320000),
      mk("tg", 6, "Vaddanam Belt", "Kamarbandh", 590000),
      mk("tg", 7, "Anklet of Goddess", "Payal", 88000),
      mk("tg", 8, "Lakshmi Coin Ring", "Ring", 62000),
      mk("tg", 9, "Mettelu Toe Rings", "Toe Rings", 24000),
    ],
  },
  {
    slug: "everyday-heirlooms",
    title: "Everyday Heirlooms",
    tagline: "Delicate chandbalis & chokers for the modern day",
    description:
      "Light, wearable, and quietly Rajputana — pieces made for office mornings, dinner evenings, and the everything in between.",
    cover: g4,
    items: [
      mk("eh", 1, "Featherweight Choker", "Choker", 78000),
      mk("eh", 2, "Little Chandbali", "Earrings", 42000),
      mk("eh", 3, "Mini Maang Tikka", "Maang Tikka", 56000),
      mk("eh", 4, "Singular Bangle", "Bangles", 38000),
      mk("eh", 5, "Slim Haathphool", "Haathphool", 64000),
      mk("eh", 6, "Whisper Nath", "Nath", 48000),
      mk("eh", 7, "Threadwork Payal", "Payal", 32000),
      mk("eh", 8, "Stacking Ring", "Ring", 28000),
      mk("eh", 9, "Plain Toe Ring", "Toe Rings", 14000),
      mk("eh", 10, "Sliver Bajuband", "Bajuband", 92000),
    ],
  },
  {
    slug: "royal-regalia",
    title: "Royal Regalia",
    tagline: "Kamarbandh, payal & the full Rajput set",
    description:
      "Statement, ceremonial, unapologetic. The pieces commissioned by the Thikanas of Marwar for darbar and durbar alike.",
    cover: g5,
    items: [
      mk("rr", 1, "Regalia Kamarbandh", "Kamarbandh", 1450000),
      mk("rr", 2, "Maharani Choker", "Choker", 1180000),
      mk("rr", 3, "Darbar Rani Haar", "Necklace", 1680000),
      mk("rr", 4, "Royal Bajuband Pair", "Bajuband", 720000),
      mk("rr", 5, "Court Chooda", "Bangles", 880000),
      mk("rr", 6, "Heavy Ghungroo Payal", "Payal", 240000),
      mk("rr", 7, "Maharani Nath", "Nath", 410000),
      mk("rr", 8, "Surya Maang Tikka", "Maang Tikka", 560000),
      mk("rr", 9, "Imperial Haathphool", "Haathphool", 690000),
      mk("rr", 10, "Royal Toe Rings", "Toe Rings", 95000),
    ],
  },
];

export const findCollection = (slug: string): Collection | undefined =>
  collections.find((c) => c.slug === slug);

export const formatInr = (n: number): string => {
  // Indian numbering: 8,40,000
  const s = String(n);
  if (s.length <= 3) return `₹ ${s}`;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const withCommas = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `₹ ${withCommas},${last3}`;
};
