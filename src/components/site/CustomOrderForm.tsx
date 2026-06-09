import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-[color:var(--gold)]/60 px-1 py-3 text-lg text-ink placeholder:text-ink/40 focus:border-[color:var(--gold)] focus:outline-none transition-colors";

const labelClass =
  "font-tagline text-[11px] uppercase tracking-[0.3em] text-ink/70";

export function CustomOrderForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="bg-ivory relative py-24 md:py-32" id="commission">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="text-center">
          <p className="font-tagline text-gold text-xs uppercase tracking-[0.4em]">
            By Appointment
          </p>
          <h2 className="font-display text-maroon mt-4 text-4xl md:text-5xl">
            Commission a Private Piece
          </h2>
          <p
            className="text-ink mt-6 text-lg italic md:text-xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Tell us of the bride. We will reply within three days, in writing,
            with a sketch.
          </p>
        </div>

        {sent ? (
          <div className="mt-20 text-center">
            <p
              className="text-maroon text-3xl italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Your note has reached the haveli.
            </p>
            <p
              className="text-ink/80 mt-6 text-lg"
              style={{ fontFamily: "var(--font-body)" }}
            >
              A member of the atelier will write to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-16 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2 md:gap-x-10 md:gap-y-12"
          >
            <label className="block">
              <span className={labelClass}>Name</span>
              <input
                type="text"
                required
                placeholder="Your full name"
                className={`${fieldClass} mt-3`}
              />
            </label>
            <label className="block">
              <span className={labelClass}>Telephone</span>
              <input
                type="tel"
                placeholder="+91 · · · · · · · · · ·"
                className={`${fieldClass} mt-3`}
              />
            </label>
            <label className="block md:col-span-2">
              <span className={labelClass}>Electronic Mail</span>
              <input
                type="email"
                required
                placeholder="name@house.com"
                className={`${fieldClass} mt-3`}
              />
            </label>
            <label className="block">
              <span className={labelClass}>Piece</span>
              <select
                className={`${fieldClass} mt-3 appearance-none`}
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option>Necklace · Rani Haar</option>
                <option>Earrings · Jhumka</option>
                <option>Maang Tikka</option>
                <option>Nath</option>
                <option>Bangles · Chooda</option>
                <option>Haathphool</option>
                <option>Complete Bridal Set</option>
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>Occasion</span>
              <input
                type="text"
                placeholder="Wedding, ceremony, gift…"
                className={`${fieldClass} mt-3`}
              />
            </label>
            <label className="block md:col-span-2">
              <span className={labelClass}>Notes for the Atelier</span>
              <textarea
                rows={3}
                placeholder="Tell us of stones, of the bride, of the season…"
                className={`${fieldClass} mt-3 resize-none`}
              />
            </label>

            <div className="mt-4 flex justify-center md:col-span-2">
              <button
                type="submit"
                className="font-display chamfer-sm bg-gold px-14 py-4 text-xs uppercase tracking-[0.32em] text-ivory transition hover:brightness-110"
              >
                Send to the House
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
