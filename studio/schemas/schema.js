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
import tailoredTripPage from './documents/pages/tailoredTripPage';
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
import sectionSimple from './objects/shared/sectionSimple';
import callToAction from './objects/shared/callToAction';
import imageCustom from './objects/shared/imageCustom';
import imageGallery from './objects/shared/imageGallery';
import video from './objects/shared/video';
import textWithImage from './objects/shared/textWithImage';
import quote from './objects/shared/quote';

import highlightsSection from './objects/destination/highlightsSection';
import highlight from './objects/destination/highlight';
import teamSection from './objects/pages/about/teamSection';
import experienceDetails from './objects/experience/experienceDetails';
import experienceFeature from './objects/experience/experienceFeature';
import servicesSection from './objects/pages/home/servicesSection';
import experienceFeaturesSection from './objects/experience/experienceFeaturesSection';
import experienceDestinationsSection from './objects/experience/experienceDestinationsSection';
import experienceItinerarySection from './objects/experience/experienceItinerarySection';
import experienceItineraryItem from './objects/experience/experienceItineraryItem';
import homeTestimonialsSection from './objects/home/homeTestimonialsSection';
import testimonial from './objects/shared/testimonial';

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
    tailoredTripPage,
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
    sectionSimple,
    imageCustom,
    imageGallery,
    callToAction,
    video,
    textWithImage,
    quote,
    highlight,
    highlightsSection,
    servicesSection,
    teamSection,
    experienceDetails,
    experienceFeature,
    experienceFeaturesSection,
    experienceItinerarySection,
    experienceItineraryItem,
    experienceDestinationsSection,
    homeTestimonialsSection,
    testimonial,
    // abstracts
    blockContent,
  ]),
});
