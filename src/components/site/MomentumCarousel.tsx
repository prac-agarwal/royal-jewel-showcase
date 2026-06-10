import { useEffect, useRef } from "react";
import c1 from "@/assets/carousel-1.jpg";
import c2 from "@/assets/carousel-2.jpg";
import c3 from "@/assets/carousel-3.jpg";
import c4 from "@/assets/carousel-4.jpg";
import c5 from "@/assets/carousel-5.jpg";
import c6 from "@/assets/carousel-6.jpg";
import c7 from "@/assets/carousel-7.jpg";
import c8 from "@/assets/carousel-8.jpg";
import c9 from "@/assets/carousel-9.jpg";
import c10 from "@/assets/carousel-10.jpg";
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

interface Piece {
  img: string;
  piece: string;
  name: string;
  tag: string;
  price: string;
}

const pieces: Piece[] = [
  { img: c1, piece: p1, name: "Rani Haar of Mewar", tag: "Necklace · Kundan & Emerald", price: "₹ 8,40,000" },
  { img: c2, piece: p2, name: "Jhumka Sitara", tag: "Earrings · Gold & Pearl", price: "₹ 2,15,000" },
  { img: c3, piece: p3, name: "Matha Patti Surya", tag: "Maang Tikka · Polki", price: "₹ 3,90,000" },
  { img: c4, piece: p4, name: "Nath of Marwar", tag: "Nose Ring · Ruby & Pearl", price: "₹ 1,75,000" },
  { img: c5, piece: p5, name: "Chooda of the Bride", tag: "Bangles · Lac & Kundan", price: "₹ 4,60,000" },
  { img: c6, piece: p6, name: "Haathphool Padma", tag: "Hand Harness · Kundan", price: "₹ 2,95,000" },
  { img: c7, piece: p7, name: "Kamarbandh Zarina", tag: "Waist Belt · Gold & Kundan", price: "₹ 5,20,000" },
  { img: c8, piece: p8, name: "Payal Ghungroo", tag: "Anklets · Sterling Silver", price: "₹ 1,10,000" },
  { img: c9, piece: p9, name: "Bajuband Aabha", tag: "Armlet · Kundan & Gold", price: "₹ 2,40,000" },
  { img: c10, piece: p10, name: "Choker Mahal", tag: "Choker · Polki Diamond", price: "₹ 6,75,000" },
];

export function MomentumCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    x: 0,
    velocity: 0,
    pointerDown: false,
    lastX: 0,
    lastT: 0,
    pointerId: 0 as number,
    raf: 0 as number,
    min: 0,
    max: 0,
  });

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const state = stateRef.current;

    const apply = () => {
      el.style.transform = `translate3d(${state.x}px, 0, 0)`;
    };

    const recalcBounds = () => {
      const parent = el.parentElement;
      if (!parent) return;
      const overflow = el.scrollWidth - parent.clientWidth;
      state.min = -Math.max(0, overflow);
      state.max = 0;
      if (state.x < state.min) state.x = state.min;
      if (state.x > state.max) state.x = state.max;
      apply();
    };

    const tick = () => {
      if (state.pointerDown) {
        state.raf = 0;
        return;
      }
      state.velocity *= 0.95;
      state.x += state.velocity;
      if (state.x < state.min) {
        state.x = state.min;
        state.velocity = 0;
      } else if (state.x > state.max) {
        state.x = state.max;
        state.velocity = 0;
      }
      apply();
      if (Math.abs(state.velocity) > 0.15) {
        state.raf = requestAnimationFrame(tick);
      } else {
        state.raf = 0;
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      state.pointerDown = true;
      state.pointerId = e.pointerId;
      state.lastX = e.clientX;
      state.lastT = performance.now();
      state.velocity = 0;
      if (state.raf) cancelAnimationFrame(state.raf);
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
      el.style.cursor = "grabbing";
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!state.pointerDown) return;
      const now = performance.now();
      const dx = e.clientX - state.lastX;
      const dt = Math.max(1, now - state.lastT);
      state.x += dx;
      if (state.x < state.min) state.x = state.min;
      if (state.x > state.max) state.x = state.max;
      state.velocity = state.velocity * 0.7 + (dx / dt) * 16 * 0.3;
      state.lastX = e.clientX;
      state.lastT = now;
      apply();
    };

    const endDrag = (e: PointerEvent) => {
      if (!state.pointerDown) return;
      state.pointerDown = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* noop */
      }
      el.style.cursor = "grab";
      if (!state.raf) state.raf = requestAnimationFrame(tick);
    };

    const onDragStart = (e: Event) => e.preventDefault();

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("dragstart", onDragStart);
    window.addEventListener("resize", recalcBounds);

    recalcBounds();
    el.style.cursor = "grab";

    return () => {
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("dragstart", onDragStart);
      window.removeEventListener("resize", recalcBounds);
      if (state.raf) cancelAnimationFrame(state.raf);
    };
  }, []);

  return (
    <section className="bg-ivory relative overflow-hidden py-24 md:py-32">
      <style>{`
        @keyframes piece-spin {
          0% { transform: rotateY(-25deg) rotateX(8deg) scale(0.9); }
          50% { transform: rotateY(25deg) rotateX(-4deg) scale(1.02); }
          100% { transform: rotateY(-25deg) rotateX(8deg) scale(0.9); }
        }
        .piece-stage {
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          perspective: 1200px;
        }
        .piece-3d {
          transform: rotateY(-25deg) rotateX(8deg) scale(0.9);
          transition: transform 0.6s ease;
          filter: drop-shadow(0 25px 35px rgba(92, 26, 26, 0.35))
                  drop-shadow(0 0 20px rgba(184, 135, 42, 0.4));
        }
        .model-img {
          transition: filter 0.6s ease, transform 0.6s ease;
        }
        .piece-card:hover .model-img {
          filter: blur(18px) brightness(0.85);
          transform: scale(1.05);
        }
        .piece-card:hover .piece-stage {
          opacity: 1;
        }
        .piece-card:hover .piece-3d {
          animation: piece-spin 6s ease-in-out infinite;
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 flex items-end justify-between md:mb-20">
          <div>
            <p className="font-tagline text-gold text-xs uppercase tracking-[0.4em]">
              The Atelier · Volume I
            </p>
            <h2 className="font-display text-maroon mt-4 text-4xl md:text-5xl">
              Ten Signature Pieces
            </h2>
          </div>
          <p
            className="text-ink hidden max-w-xs text-right italic md:block"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Drag to wander · Hover to behold
          </p>
        </div>
      </div>

      <div className="select-none overflow-hidden" style={{ touchAction: "pan-y" }}>
        <div
          ref={trackRef}
          className="flex gap-6 px-6 will-change-transform md:gap-10 md:px-12"
          style={{ width: "max-content" }}
        >
          {pieces.map((p, i) => (
            <article
              key={i}
              className="piece-card group w-[78vw] max-w-[420px] flex-shrink-0 sm:w-[58vw] md:w-[36vw] lg:w-[26vw]"
            >
              <div className="chamfer-lg bg-ivory-soft relative aspect-[3/4] w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  draggable={false}
                  loading="lazy"
                  className="model-img h-full w-full object-cover"
                />
                <div className="piece-stage absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={p.piece}
                    alt={`${p.name} piece detail`}
                    draggable={false}
                    loading="lazy"
                    className="piece-3d max-h-[85%] max-w-[85%] object-contain"
                  />
                </div>
              </div>
              <div className="mt-6 px-1">
                <p className="font-tagline text-gold text-[11px] uppercase tracking-[0.3em]">
                  {p.tag}
                </p>
                <h3 className="font-display text-maroon mt-3 text-xl md:text-2xl">
                  {p.name}
                </h3>
                <p
                  className="text-ink/80 mt-2 text-lg italic"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {p.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
