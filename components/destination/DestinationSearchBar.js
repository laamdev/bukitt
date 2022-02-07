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
      <div className="text-neautral-400 focus-within:text-neautral-600 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5" aria-hidden="true" />
        </div>
        <input
          id="search"
          className="text-neautral-900 placeholder-neautral-500 block w-full rounded-2xl border border-slate-300 bg-slate-100 py-2 pl-10 pr-3 leading-5 shadow-md focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600 sm:text-sm"
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
