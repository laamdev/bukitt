import { useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/solid';

import { sanityClient } from '@/lib/sanity.server';
import { destinationsPageQuery } from '@/lib/queries';
import { classNames } from '@/utils/helpers';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import DestinationsList from '@/components/destination/DestinationsList';
import DestinationCard from '@/components/destination/DestinationCard';

export default function DestinationsPage({ destinationsPageData }) {
  const destinations = destinationsPageData.destinations;
  const tagFilters = destinationsPageData.tags.map((tag) => tag.name);

  //! STATE
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  const [destinationNames, setDestinationNames] = useState(
    destinations.map((destination) => destination.name.toLowerCase())
  );

  const [searchString, setSearchString] = useState('');

  const [isAllTag, setIsAllTag] = useState(true);

  const [tags, setTags] = useState([]);

  //! DYNAMIC DATA
  useEffect(() => {
    const filteredDestinationsNames = [...destinationNames].filter(
      (name) => name.indexOf(searchString.trim().toLowerCase()) !== -1
    );

    const refilteredDestinations = [...destinations].filter((destination) =>
      filteredDestinationsNames.includes(destination.name.toLowerCase())
    );

    setFilteredDestinations(refilteredDestinations);
  }, [searchString, destinationNames, destinations]);

  useEffect(() => {
    if (tags.length > 0) {
      setIsAllTag(false);
    } else {
      setIsAllTag(true);
    }
  }, [tags]);

  return (
    <Layout
      title={`${
        destinationsPageData?.seo?.title
          ? destinationsPageData?.seo?.title
          : 'Destinations'
      }`}
      description={`${
        destinationsPageData?.seo?.description
          ? destinationsPageData?.seo?.description
          : 'A unique selection of unforgettable destinations hand-picked by our expert travel concierge for a unique blend of outdoorsy adventure and luxurious comfort.'
      }`}
    >
      <Hero hero={destinationsPageData?.hero} />

      <section className="tw-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center space-y-6 mx-auto">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative text-gray-400 focus-within:text-gray-600">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <SearchIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search"
                  className="block w-full bg-white py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-600 focus:ring-white focus:border-white sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                  value={searchString}
                  onChange={(e) => setSearchString(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 lg:gap-3">
              <button
                type="button"
                className={classNames(
                  isAllTag ? 'bg-brand-400' : 'bg-brand-100',
                  'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800'
                )}
                onClick={() => {
                  setTags([]);
                  setIsAllTag(true);
                }}
              >
                All
              </button>

              {tagFilters.map((tag, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={classNames(
                    tags.includes(tag) ? 'bg-brand-400' : 'bg-brand-100',
                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800'
                  )}
                  onClick={() => {
                    if (!tags.includes(tag)) {
                      setTags([...tags, tag]);
                    } else {
                      const selectedTags = [...tags].filter(
                        (selectedTag) => selectedTag !== tag
                      );
                      setTags(selectedTags);
                    }
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="w-full">
              <DestinationsList>
                {filteredDestinations.map((destination) => {
                  const destinationTags = destination.tags.map(
                    (tag) => tag.name
                  );

                  if (
                    !isAllTag &&
                    destinationTags.some((tag) => tags.includes(tag))
                  ) {
                    return (
                      <DestinationCard
                        key={destination._id}
                        destination={destination}
                      />
                    );
                  } else if (isAllTag) {
                    return (
                      <DestinationCard
                        key={destination._id}
                        destination={destination}
                      />
                    );
                  }
                })}
              </DestinationsList>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const destinationsPageData = await sanityClient.fetch(destinationsPageQuery);

  return {
    props: { destinationsPageData },
  };
}
