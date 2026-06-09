export function SiteFooter() {
  return (
    <footer className="bg-maroon-deep text-ivory">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 py-20 md:flex-row md:items-end md:px-12 md:py-28">
        {/* Empty brand slot, intentionally blank */}
        <div className="h-20 w-56" aria-hidden="true" />

        <div className="md:text-right">
          <p
            className="font-tagline text-sm uppercase tracking-[0.4em]"
            style={{ color: "var(--gold-soft)" }}
          >
            Jaipur · Udaipur · By Appointment
          </p>
          <p
            className="text-ivory mt-6 max-w-sm text-2xl italic md:ml-auto md:text-3xl"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Heirlooms hand-set by candle, by hand, by lineage.
          </p>
          <p className="font-tagline text-ivory/50 mt-10 text-[11px] uppercase tracking-[0.3em]">
            © MMXXVI · All ornaments reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
