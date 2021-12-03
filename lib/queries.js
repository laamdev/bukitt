import { groq } from 'next-sanity';
const adventureFields = groq`
  _id,
  _updatedAt,
  title,
  "slug": slug.current,
  "card": adventureCard {
    name,
    thumbnail
  },
  "hero": hero{
    heading,
    tagline,
    body,
    coverImage
   }
`;

const destinationFields = groq`
  _id,
  title,
  "slug": slug.current,
  "card": destinationCard{
    name,
    location,
    thumbnail
    },
  "hero": hero{
     heading,
     tagline,
     body,
     coverImage
   },
   "mapSection": mapSection{
    heading,
    body,
    image
  },
   "highlightsSection": highlightsSection{
     heading,
     highlights
   }
`;

const destinationInAdventureFields = groq`
  _id,
  title,
  "hero": hero{
    heading,
    tagline,
    body,
    coverImage
  },
  "highlightsSection": highlightsSection{
    heading,
    highlights
  },
  "mapSection": mapSection{
    heading,
    body,
    image
  }
`;

const homePageFields = groq`
  _id,
  title,
 "featured": *[_type=='destination' && featured == true] | order(_updatedAt desc) {
    "card": destinationCard {
      name,
      slug,
      location,
      thumbnail
    },
  },
  "hero": hero {
    coverImage
  },
  featuredSection {
    heading
  },
  introductionSection {
    heading,
    body
  },
  aboutSection {
    heading,
    body,
    cta
  },
  stepsSection {
    heading,
    body,
    cta
  },
  offerSection {
    heading,
    firstImage,
    firstLink,
    secondImage,
    secondLink
  },
  partnersSection {
    heading,
    partners[]
  }
`;

const adventuresPageFields = groq`
  _id,
  adventuresHeading,
  destinationsHeading,
  "adventures": *[_type=='adventure'] | order(_updatedAt desc) {
  ${adventureFields}
  },
  "destinations": *[_type=='destination'] | order(_updatedAt desc) {
  ${destinationFields}
}
`;
const destinationsPageFields = groq`
  _id,
  adventuresHeading,
  destinationsHeading,
  "destinations": *[_type=='destination'] | order(_updatedAt desc) {
  ${destinationFields}
}
`;

// QUERIES

// Adventure Queries
export const adventuresPathsQuery = groq`*[_type == "adventure" && defined(slug.current)][].slug.current
`;

export const individualAdventureQuery = groq`
{
  "adventure": *[_type == "adventure" && slug.current == $slug] | order(_updatedAt desc) [0] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    "hero": hero{
      heading,
      tagline,
      body,
      coverImage
    },
    "mapSection": mapSection{
      heading,
      body,
      image
    },
    "accommodationSection": accommodationSection{
      heading,
      body,
      image
    },
    destinations[]->{${destinationInAdventureFields}}
  }
}`;

// Destination Queries
export const destinationsPathsQuery = groq`*[_type == "destination" && defined(slug.current)][].slug.current
`;

export const individualDestinationQuery = groq`
{
  "destination": *[_type == "destination" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${destinationFields}
  }
}`;

// Page Queries

export const homePageQuery = groq`
*[_type == "homePage"][0] {
  ${homePageFields}
}`;

export const adventuresPageQuery = groq`
*[_type == "adventuresPage"][0] {
  ${adventuresPageFields}
}`;

export const destinationsPageQuery = groq`
*[_type == "destinationsPage"][0] {
  ${destinationsPageFields}
}`;
