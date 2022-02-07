// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

//! DOCUMENTS
//* Destination
import destination from './documents/destination';
import destinationTag from './documents/destinationTag';

//* Experience
import experience from './documents/experience';
//? pages
import homePage from './documents/pages/homePage';
import aboutPage from './documents/pages/aboutPage';
import experiencesPage from './documents/pages/experiencesPage';
import destinationsPage from './documents/pages/destinationsPage';
import inquiryFormPage from './documents/pages/inquiryFormPage';
import blogPage from './documents/pages/blogPage';
// --- misc
import teamMember from './documents/teamMember';
import socials from './documents/socials';
import contact from './documents/contact';
import partner from './documents/partner';
// --- blog
import blogPost from './documents/blogPost';

//! OBJECTS
import hero from './objects/shared/hero';
import cardSimple from './objects/shared/cardSimple';
import form from './objects/shared/form';
import section from './objects/shared/section';
import callToAction from './objects/shared/callToAction';
import imageCustom from './objects/shared/imageCustom';
import imageGallery from './objects/shared/imageGallery';
import video from './objects/shared/video';
import quote from './objects/shared/quote';
import seo from './objects/shared/seo';

//* home
import homeServicesSection from './objects/pages/home/homeServicesSection';
import homeServicesCard from './objects/pages/home/homeServicesCard';
import homeFeaturesSection from './objects/pages/home/homeFeaturesSection';
import homeNewsletterSection from './objects/pages/home/homeNewsletterSection';
import homeTestimonialsSection from './objects/pages/home/homeTestimonialsSection';
import homeFeaturedExperienceSection from './objects/pages/home/homeFeaturedExperienceSection';
import homeFeaturedDestinationsSection from './objects/pages/home/homeFeaturedDestinationsSection';

import feature from './objects/shared/feature';
import experienceFeaturesSection from './objects/experience/experienceFeaturesSection';
import experienceDestinationsSection from './objects/experience/experienceDestinationsSection';
import highlightsSection from './objects/destination/highlightsSection';
import experienceItinerarySection from './objects/experience/experienceItinerarySection';
import experienceDetails from './objects/experience/experienceDetails';
import highlight from './objects/destination/highlight';
import teamSection from './objects/pages/about/teamSection';
import experienceItineraryItem from './objects/experience/experienceItineraryItem';

import testimonial from './objects/shared/testimonial';

// abstracts
import blockContent from './objects/shared/blockContent';

export default createSchema({
  name: 'content',
  types: schemaTypes.concat([
    //! DOCUMENTS
    //* pages
    homePage,
    aboutPage,
    experiencesPage,
    destinationsPage,
    inquiryFormPage,

    //* Destination
    destination,
    destinationTag,

    //* Experience
    experience,

    // --- misc
    teamMember,
    socials,
    contact,
    partner,

    //! OBJECTS
    hero,
    cardSimple,
    form,
    section,
    imageCustom,
    imageGallery,
    callToAction,
    video,
    quote,
    highlight,
    highlightsSection,
    teamSection,
    //home
    homeFeaturedExperienceSection,
    homeFeaturedDestinationsSection,
    homeServicesSection,
    homeServicesCard,
    homeTestimonialsSection,
    homeFeaturesSection,
    homeNewsletterSection,
    //experience
    experienceDetails,
    feature,
    experienceFeaturesSection,
    experienceItinerarySection,
    experienceItineraryItem,
    experienceDestinationsSection,

    testimonial,
    seo,
    //blog
    blogPage,
    blogPost,
    //abstracts
    blockContent,
  ]),
});
