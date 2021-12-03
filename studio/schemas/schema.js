// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import destination from './documents/destination';
import adventure from './documents/adventure';
import homePage from './documents/homePage';
import adventuresPage from './documents/adventuresPage';
import destinationsPage from './documents/destinationsPage';
import teamMember from './documents/teamMember';
import socials from './documents/socials';

// objects
import adventureCard from './objects/adventureCard';
import blockContent from './objects/blockContent';
import cta from './objects/cta';
import customImage from './objects/customImage';
import destinationCard from './objects/destinationCard';
import form from './objects/form';
import hero from './objects/hero';
import highlight from './objects/highlight';
import highlightsSection from './objects/highlightsSection';
import section from './objects/section';
import socialMedia from './objects/socialMedia';
import doubleImage from './objects/doubleImage';
import partner from './objects/partner';
import partnersSection from './objects/partnersSection';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // DOOCUMENTS
    // The following are document types which will appear
    // in the studio.
    adventure,
    destination,
    homePage,
    adventuresPage,
    destinationsPage,
    teamMember,

    // OBJECTS
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    adventureCard,
    cta,
    destinationCard,
    doubleImage,
    form,
    hero,
    highlight,
    highlightsSection,
    section,
    socialMedia,
    blockContent,
    customImage,
    socials,
    partner,
    partnersSection,
  ]),
});
