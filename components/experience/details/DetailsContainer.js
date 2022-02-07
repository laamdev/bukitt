export default function DetailsContainer({ children }) {
  return (
    <section className="tw-section">
      <div className="mx-auto max-w-7xl">
        <div className="relative">
          <dl className="rounded-lg bg-slate-50 shadow-lg sm:grid sm:grid-cols-4">
            {children}
          </dl>
        </div>
      </div>
    </section>
  );
}
