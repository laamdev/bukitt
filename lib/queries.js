import { groq } from 'next-sanity';

// --- FIELDS --- //

const homePageFields = groq`
  _id,
  title,
  "slug": slug.current,
  hero{
    heading,
    tagline,
    body,
    coverImage,
    "coverImageUrl": coverImage.asset->url
  },
  featuredDestinationsSection{
    sectionHeading,
    featuredDestinations[0...4]->{
      _id,
      "slug": slug.current,
      card
    }
  },
  featuredExperienceSection{
    heading,
    body,
    featuredExperience->{
      _id,
      name,
      "slug": slug.current,
      hero{
        heading,
        coverImage,
        body
      },
    },
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
   features[]
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
    sectionHeading,
    experiencesCard{
      heading,
      body,
      image,
      callToAction{
        linkText,
        url,
      }
    },
    destinationsCard{
      heading,
      body,
      image,
      callToAction{
        linkText,
        url,
      }
    }
  },
  testimonialsSection{
    heading,
    testimonials
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
  },
  seo {
    title,
    keywords,
    description,
    image
  }
`;
const aboutPageFields = groq`
  _id,
  title,
  "slug": slug.current,
  hero {
    heading,
    tagline,
    body,
    coverImage
  },
  aboutSection {
    heading,
    body,
    image
  },
  teamSection {
    heading,
    body,
    "team": *[_type=='teamMember'] | order(priority asc, _updatedAt desc)  {
      _id,
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
    author,
    role,
    profilePicture
  },
  seo {
    title,
    keywords,
    description,
    image
  }
`;
const inquiryFormPageFields = groq`
  _id,
  title,
  "slug": slug.current,
  hero {
    heading,
    tagline,
    body,
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
  category,
  location,
  "slug": slug.current,
  card{
    title,
    image
  },
  hero{
     heading,
     body,
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
const blogPostFields = groq`
  _id,
  title,
  'slug': slug.current,
  'author': author->{
    name, 
    'picture': profilePicture.asset->url
  },
  'date': publishedAt,
  'coverImage': mainImage,
  category,
  excerpt,
  body[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
  },
  "characterCount": length(pt::text(body)),
  // assumes 5 characters as mean word length
  // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
  "wordCount": round(length(pt::text(body)) / 5),
  // Words per minute: 180
  "readingTime": round(length(pt::text(body)) / 5 / 180 ),
  seo {
    title,
    keywords,
    description,
    image
  }
`;
const blogPageFields = groq`
  _id,
  title,
  "slug": slug.current,
  hero {
    heading,
    tagline,
    body,    
    coverImage
  },
  "blogPosts": *[_type=='blogPost'] | order(_updatedAt desc) {
    ${blogPostFields}
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
  "slug": slug.current,
  hero {
    heading,
    tagline,
    body,    
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
  "slug": slug.current,
  hero {
    heading,
    tagline,
    body,    
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

export const inquiryFormPageQuery = groq`
*[_type == "inquiryFormPage"][0] {
  ${inquiryFormPageFields}
}`;

export const experiencesPageQuery = groq`
*[_type == "experiencesPage"][0] {
  ${experiencesPageFields}
}`;

export const destinationsPageQuery = groq`
*[_type == "destinationsPage"][0] {
  ${destinationsPageFields}
}`;

export const blogPageQuery = groq`
* [_type == "blogPage"][0] {
  ${blogPageFields}
}`;

// Experience Queries
export const experiencesPathsQuery = groq`*[_type == "experience" && defined(slug.current)][].slug.current
`;

export const individualExperienceQuery = groq`
{
  "experience": *[_type == "experience" && slug.current == $slug] | order(_updatedAt desc) [0] {
    _id,
    _updatedAt,
    name,
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
      body,
      features[] {
        title,
        description,
        icon
      }
    },
    itinerarySection {
      heading,
      itinerary
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
    },
    seo {
      title,
      description
    }
  }
}`;

export const individualBlogPostQuery = groq`
{
  "blogPost": *[_type == "blogPost" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${blogPostFields}
  }
}`;

// Destination Queries
export const destinationsPathsQuery = groq`*[_type == "destination" && defined(slug.current)][].slug.current
`;

export const blogPostPathsQuery = groq`*[_type == "blogPost" && defined(slug.current)][].slug.current
`;

export const individualDestinationQuery = groq`
{
  "destination": *[_type == "destination" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${destinationFields}
  }
}`;
