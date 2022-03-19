import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { sanityClient } from '@/lib/sanity.server';
import { destinationsPageQuery } from '@/lib/queries';
import { destinationTags } from '@/data/studio';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import List from '@/components/destination/DestinationsList';
import Card from '@/components/destination/DestinationCard';
// // import SearchBar from '@/components/destination/DestinationSearchBar';
import Filters from '@/components/destination/DestinationsFilters';

export default function DestinationsPage({ destinationsPageData }) {
  const [destinations, setDestinations] = useState([]);
  const [tagFilters, setTagFilters] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setDestinations(destinationsPageData.destinations);
    setFilteredDestinations(destinationsPageData.destinations);
    setTagFilters(destinationTags.map((tag) => tag.value));
  }, []);

  return (
    <Layout
      metaTitle={destinationsPageData?.title}
      metaDescription={destinationsPageData?.hero?.body}
    >
      <Hero hero={destinationsPageData?.hero} />

      <Filters
        destinations={destinations}
        setFilteredDestinations={setFilteredDestinations}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        tagFilters={tagFilters}
      />

      <List>
        <AnimatePresence>
          {filteredDestinations.map((destination) => {
            return <Card key={destination._id} destination={destination} />;
          })}
        </AnimatePresence>
      </List>
    </Layout>
  );
}

export async function getStaticProps() {
  const destinationsPageData = await sanityClient.fetch(destinationsPageQuery);

  return {
    props: { destinationsPageData },
  };
}
