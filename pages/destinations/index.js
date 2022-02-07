import { useState, useEffect } from 'react';

import { sanityClient } from '@/lib/sanity.server';
import { destinationsPageQuery } from '@/lib/queries';
import { classNames } from '@/utils/helpers';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import List from '@/components/destination/DestinationsList';
import Card from '@/components/destination/DestinationCard';
import SearchBar from '@/components/destination/DestinationSearchBar';

export default function DestinationsPage({ destinationsPageData }) {
  const destinations = destinationsPageData.destinations;
  const tagFilters = destinationsPageData.tags.map((tag) => tag.name);

  //! STATE
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  const [destinationNames] = useState(
    destinations.map((destination) => destination.name.toLowerCase())
  );

  const [searchString, setSearchString] = useState('');

  const [isAllTag, setIsAllTag] = useState(true);

  const [tags, setTags] = useState([]);

  //! DYNAMIC DATA
  useEffect(() => {
    // go trough the array of destination names and return
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

      <section className="tw-section mx-auto max-w-5xl">
        <div className="mx-auto w-full max-w-2xl">
          <SearchBar
            searchString={searchString}
            setSearchString={setSearchString}
          />
        </div>

        <div className="mt-12 inline-flex max-w-7xl flex-wrap items-center justify-center gap-3 lg:gap-6">
          <button
            type="button"
            className={classNames(
              isAllTag ? 'bg-brand-400' : 'bg-brand-100',
              'rounded-2xl bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800 lg:text-sm'
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
                'rounded-2xl bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800 lg:text-sm'
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
              <span>{tag}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="tw-section mx-auto max-w-7xl">
        <List>
          {filteredDestinations.map((destination) => {
            const destinationTags = destination.tags.map((tag) => tag.name);

            if (
              !isAllTag &&
              destinationTags.some((tag) => tags.includes(tag))
            ) {
              return <Card key={destination._id} destination={destination} />;
            } else if (isAllTag) {
              return <Card key={destination._id} destination={destination} />;
            }
          })}
        </List>
        {filteredDestinations.length === 0 && (
          <div className="mx-auto text-center">No results!</div>
        )}
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
