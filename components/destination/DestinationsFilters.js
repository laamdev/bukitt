import { useEffect } from 'react';

export default function DestinationsFilters({
  destinations,
  setFilteredDestinations,
  activeFilter,
  setActiveFilter,
  tagFilters,
}) {
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredDestinations(destinations);
      return;
    }

    const filtered = destinations.filter((destination) =>
      destination.tags.includes(activeFilter)
    );

    setFilteredDestinations(filtered);
  }, [activeFilter]);

  return (
    <section className="mx-auto mt-16 flex max-w-5xl items-center justify-center sm:mt-20 lg:mt-24">
      <div className="inline-flex max-w-7xl flex-wrap items-center justify-center gap-3 lg:gap-6">
        <button
          type="button"
          className={`tw-transition rounded-2xl border border-brand px-2.5 py-0.5 text-sm capitalize text-brand lg:text-lg ${
            activeFilter === 'all' && 'bg-brand text-white'
          }`}
          onClick={() => {
            setActiveFilter('all');
          }}
        >
          all
        </button>

        {tagFilters.map((tag, idx) => (
          <button
            key={idx}
            type="button"
            className={`tw-transition rounded-2xl border border-brand px-2.5 py-0.5 text-sm capitalize text-brand lg:text-lg ${
              activeFilter === tag && 'bg-brand text-white'
            }`}
            onClick={() => {
              setActiveFilter(tag);
            }}
          >
            <span>{tag}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
