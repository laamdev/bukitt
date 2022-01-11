// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// DOCUMENTS
// --- products
import destination from './documents/destination';
import experience from './documents/experience';
// --- pages
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

// objects
import hero from './objects/shared/hero';
import card from './objects/shared/card';
import cardSimple from './objects/shared/cardSimple';
import form from './objects/shared/form';
import section from './objects/shared/section';
import callToAction from './objects/shared/callToAction';
import imageCustom from './objects/shared/imageCustom';
import imageGallery from './objects/shared/imageGallery';
import video from './objects/shared/video';
import quote from './objects/shared/quote';
import seo from './objects/shared/seo';

//home
import homeServicesSection from './objects/pages/home/services/homeServicesSection';
import homeServicesCard from './objects/pages/home/services/homeServicesCard';
import homeFeaturesSection from './objects/pages/home/homeFeaturesSection';

import feature from './objects/shared/feature';
//individual experience
import experienceFeaturesSection from './objects/experience/experienceFeaturesSection';
import experienceDestinationsSection from './objects/experience/experienceDestinationsSection';
import highlightsSection from './objects/destination/highlightsSection';
import experienceItinerarySection from './objects/experience/experienceItinerarySection';
import experienceDetails from './objects/experience/experienceDetails';
import highlight from './objects/destination/highlight';
import teamSection from './objects/pages/about/teamSection';
import experienceItineraryItem from './objects/experience/experienceItineraryItem';
import homeTestimonialsSection from './objects/pages/home/homeTestimonialsSection';
import homeFeaturedExperienceSection from './objects/pages/home/homeFeaturedExperienceSection';
import testimonial from './objects/shared/testimonial';
//blog
import blogPost from './objects/blog/blogPost';
import blogPostAuthor from './objects/blog/blogPostAuthor';

// abstracts
import blockContent from './objects/shared/blockContent';

export default createSchema({
  name: 'content',
  types: schemaTypes.concat([
    // DOCUMENTS
    // --- products
    destination,
    experience,
    // --- pages
    homePage,
    aboutPage,
    experiencesPage,
    destinationsPage,
    inquiryFormPage,
    // --- misc
    teamMember,
    socials,
    contact,
    partner,

    // OBJECTS
    hero,
    card,
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
    homeServicesSection,
    homeServicesCard,
    homeTestimonialsSection,
    homeFeaturesSection,
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
    blogPostAuthor,
    //abstracts
    blockContent,
  ]),
});
