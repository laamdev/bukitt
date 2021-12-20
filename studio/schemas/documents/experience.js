import { IoPinOutline } from 'react-icons/io5';

export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  icon: IoPinOutline,
  initialValue: () => ({
    featured: false,
  }),

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the experience.',
      validation: (Rule) => [
        Rule.required()
          .min(5)
          .error('The experience name must have 5 characters min.'),
        Rule.max(30).warning(
          'Shorter titles (less than 30 characters) are usually better.'
        ),
      ],
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Slug of the experience.',
      options: {
        source: 'name',
        maxLength: 30,
      },
      validation: (Rule) => [
        Rule.required().error('A slug must be generated.'),
      ],
    },

    {
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      description: 'Experience will be featured in the homepage.',
    },

    {
      name: 'guide',
      type: 'file',
      title: 'Guide',
      description: 'PDF file of the experience.',
    },

    {
      name: 'card',
      type: 'cardSimple',
      title: 'Card',
      description: 'Card of the experience.',
    },

    {
      name: 'hero',
      type: 'hero',
      title: 'Hero',
    },

    {
      name: 'details',
      type: 'experienceDetails',
      title: 'Details',
    },

    {
      name: 'featuresSection',
      type: 'experienceFeaturesSection',
      title: 'Features Section',
    },

    {
      name: 'itinerarySection',
      type: 'experienceItinerarySection',
      title: 'Itinerary Section',
    },

    {
      name: 'mapSection',
      type: 'section',
      title: 'Map Section',
      description: 'Map section of the experience page.',
    },

    {
      name: 'accommodationSection',
      type: 'section',
      title: 'Accommodation Section',
      description: 'Accomodation section of the experience page.',
    },

    {
      name: 'highlightsSection',
      type: 'highlightsSection',
      title: 'Highlights Section',
      description: 'Highlight section of the experience page.',
    },

    {
      name: 'destinations',
      type: 'array',
      title: 'Destinations',
      description: 'Destinations included in this experience.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'destination' }],
        },
      ],
    },
  ],
};
