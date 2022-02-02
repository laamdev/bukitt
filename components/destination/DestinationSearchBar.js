import { SearchIcon } from '@heroicons/react/solid';

export default function DestinationSearchBar({
  searchString,
  setSearchString,
}) {
  return (
    <div>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative text-neautral-400 focus-within:text-neautral-600">
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <SearchIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          id="search"
          className="block w-full bg-neutral-100 py-2 pl-10 pr-3 border border-neutral-300 rounded-2xl shadow-md leading-5 text-neautral-900 placeholder-neautral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-600 focus:ring-white focus:border-white sm:text-sm"
          placeholder="Search"
          type="search"
          name="search"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
      </div>
    </div>
  );
}
