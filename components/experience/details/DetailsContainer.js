export default function DetailsContainer({ children }) {
  return (
    <section className="tw-section">
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <dl className="rounded-lg bg-neutral-50 shadow-lg sm:grid sm:grid-cols-4">
            {children}
          </dl>
        </div>
      </div>
    </section>
  );
}
