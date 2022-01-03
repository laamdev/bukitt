import { groq } from 'next-sanity';

// --- FIELDS --- //

const homePageFields = groq`
  _id,
  title,
  featuredDestinationsSection {
    heading
  },
 "featuredDestinations": *[_type=='destination' && featured == true] | order(_updatedAt desc) {
    "slug": slug.current,
    card {
      title,
      image
    },
  },
 featuredExperienceSection{
    heading,
    body,
    featuredExperience->{
      _id,
      title,
      "slug": slug.current,
      hero{
        heading,
        tagline,
        body,
        callToAction,
        coverImage
      },
      card {
        title,
        image
      }
    },
  },
  hero{
    heading,
    tagline,
    body,
    callToAction,
    coverImage
  },
  aboutSection{
    heading,
    body,
    callToAction{
      linkText,
      url
    }
  },
  featuresSection{
   heading,
   features[] {
     title,
     description,
     icon
    }
  },
  stepsSection{
    heading,
    body,
    callToAction{
      linkText,
      url,
    }
  },
  servicesSection{
    heading,
    experiencesCard{
      title,
      description,
      image,
      callToAction{
        linkText,
        url,
      }
    },
    tailoredCard{
      title,
      description,
      image,
      callToAction{
        linkText,
        url,
      }
    }
  },
  testimonialsSection{
    heading,
    testimonials[]{
      heading,
      body,
      travelerName,
      travelerAge,
      travelerOriginLocation,
      travelerTripDestination,
      travelerImage
    }
  },
  partnersSection{
    heading,
    "partners": *[_type=='partner'] | order(_updatedAt desc){
      name,
      logo
    },
  },
  contactSection{
    "contact": *[_type =='contact'][0]{
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
    callToAction,
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
  },
  seo {
    title,
    keywords,
    description,
    image
    }
`;
const enquiryFormPageFields = groq`
  _id,
  title,
  hero {
    heading,
    body,
    callToAction,
    coverImage
  },
  "destinations": *[_type=='destination'] | order(_updatedAt desc) {
    name
  },
  "experiences": *[_type=='experience'] | order(_updatedAt desc) {
    name
  },
  seo {
    title,
    keywords,
    description,
    image
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
    callToAction,
    coverImage
   },
   seo {
    title,
    keywords,
    description,
    image
    }
`;
const destinationFields = groq`
  _id,
  _updatedAt,
  name,
  location,
  "slug": slug.current,
  card{
    title,
    image
    },
  hero{
     heading,
     tagline,
     body,
     callToAction,
     coverImage
   },
  mapSection{
    heading,
    body,
    image
  },
  highlightsSection{
     heading,
     highlights
   },
  seo {
    title,
    keywords,
    description,
    image
   }
`;

const destinationInExperienceFields = groq`
  _id,
  title,
  "slug": slug.current,
  card {
    title,
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
    callToAction,
    coverImage
  },
  "experiences": *[_type=='experience'] | order(_updatedAt desc) {
  ${experienceFields}
  },
  seo {
    title,
    keywords,
    description,
    image
    }
`;
const destinationsPageFields = groq`
  _id,
  title,
  hero {
    heading,
    tagline,
    body,    
    callToAction,
    coverImage
  },
  "destinations": *[_type=='destination'] | order(_updatedAt desc) {
  ${destinationFields}
  },
  seo {
    title,
    keywords,
    description,
    image
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

export const enquiryFormPageQuery = groq`
*[_type == "enquiryFormPage"][0] {
  ${enquiryFormPageFields}
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
      callToAction,
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
      body,
      features[] {
        title,
        description,
        icon
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
    destinationsSection {
      heading,
      destinations[]-> {
        ${destinationInExperienceFields}
      }
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
