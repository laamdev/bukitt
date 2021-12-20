import { groq } from 'next-sanity';

// --- FIELDS --- //

const homePageFields = groq`
  _id,
  title,
  featuredSection {
    heading
  },
 "featured": *[_type=='destination' && featured == true] | order(_updatedAt desc) {
    "slug": slug.current,
    "card": card {
      title,
      image
    },
  },
  "hero": hero {
    coverImage
  },

  introductionSection {
    heading,
    body
  },
  aboutSection {
    heading,
    body,
    callToAction {
      linkText,
      url
    }
  },
  stepsSection {
    heading,
    body,
    callToAction {
      linkText,
      url,
    }
  },
  servicesSection {
    heading,
    "experiencesCard": experiencesCard {
      title,
      image,
      callToAction {
        linkText,
        url,
      }
    },
    "tailoredCard": tailoredCard {
      title,
      image,
      callToAction {
        linkText,
        url,
      }
    }
  },
  partnersSection {
    heading,
    "partners": *[_type=='partner'] | order(_updatedAt desc) {
      name,
      logo
    },
  },
  contactSection {
    "contact": *[_type =='contact'][0] {
      phone,
      email,
      address
   }
  }
`;
const aboutPageFields = groq`
  _id,
  title,
  hero {
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
    "team": *[_type=='teamMember'] | order(priority asc, _updatedAt desc)  {
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
const tailoredTripPageFields = groq`
  _id,
  title,
  hero {
    heading,
    body,
    coverImage
  }
`;
const experienceFields = groq`
  _id,
  _updatedAt,
  name,
  "slug": slug.current,
  card {
    title,
    image
  },
  hero {
    heading,
    tagline,
    body,
    coverImage
   }
`;
const destinationFields = groq`
  _id,
  _updatedAt,
  name,
  location,
  "slug": slug.current,
  card {
    title,
    image
    },
  hero {
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

const destinationInExperienceFields = groq`
  _id,
  title,
  hero {
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

const experiencesPageFields = groq`
  _id,
  name,
  hero {
    heading,
    tagline,
    body,
    coverImage
  },
  experiencesHeading,
  destinationsHeading,
  "experiences": *[_type=='experience'] | order(_updatedAt desc) {
  ${experienceFields}
  }
`;
const destinationsPageFields = groq`
  _id,
  title,
  hero {
    heading,
    tagline,
    body,
    coverImage
  },
  experiencesHeading,
  destinationsHeading,
  "destinations": *[_type=='destination'] | order(_updatedAt desc) {
  ${destinationFields}
}
`;

// --- QUERIES --- //

// Page Queries

export const homePageQuery = groq`
*[_type == "homePage"][0] {
  ${homePageFields}
}`;

export const aboutPageQuery = groq`
*[_type == "aboutPage"][0] {
  ${aboutPageFields}
}`;

export const tailoredTripPageQuery = groq`
*[_type == "tailoredTripPage"][0] {
  ${tailoredTripPageFields}
}`;

export const experiencesPageQuery = groq`
*[_type == "experiencesPage"][0] {
  ${experiencesPageFields}
}`;

export const destinationsPageQuery = groq`
*[_type == "destinationsPage"][0] {
  ${destinationsPageFields}
}`;

// Experience Queries
export const experiencesPathsQuery = groq`*[_type == "experience" && defined(slug.current)][].slug.current
`;

export const individualExperienceQuery = groq`
{
  "experience": *[_type == "experience" && slug.current == $slug] | order(_updatedAt desc) [0] {
    _id,
    _updatedAt,
    title,
    "slug": slug.current,
    "guideURL": guide.asset->url,
    hero {
      heading,
      tagline,
      body,
      coverImage
    },
    
    details {
      price,
      dateFrom,
      dateTo,
      duration,
      groupSizeMin,
      groupSizeMax,
    },
    
    featuresSection {
      heading,
      features[] {
        name
      }
    },

    itinerarySection {
      heading,
      itinerary[] {
        day,
        activity
      }
    },
    
    mapSection {
      heading,
      body,
      image
    },
    
    accommodationSection {
      heading,
      body,
      image
    },
    
    destinations[]-> {
      ${destinationInExperienceFields}
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
