import { groq } from 'next-sanity';

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
    "partners": *[_type=='partner'] | order(_updatedAt desc) {
      name,
      logo
    },
  }
`;

const aboutPageFields = groq`
  _id,
  title,
 "hero": hero {
    heading,
    body,
    coverImage
  },
  aboutUsSection {
    heading,
    body,
    image
  },
  teamSection {
    heading,
    "team": *[_type=='teamMember'] | order(_updatedAt desc) {
      name,
      role,
      recentTrip,
      futureTrip,
      profilePicture
    },
  },
  quoteSection {
    heading,
    body,
    authorName,
    authorDetail,
    authorImage
  }
`;
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
    destinations[]->{
      ${destinationInAdventureFields}
    }
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

export const aboutPageQuery = groq`
*[_type == "aboutPage"][0] {
  ${aboutPageFields}
}`;

export const adventuresPageQuery = groq`
*[_type == "adventuresPage"][0] {
  ${adventuresPageFields}
}`;

export const destinationsPageQuery = groq`
*[_type == "destinationsPage"][0] {
  ${destinationsPageFields}
}`;
