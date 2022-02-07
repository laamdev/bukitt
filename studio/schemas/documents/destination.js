import { IoMapOutline } from 'react-icons/io5';

import { locations, destinationCategories, seasons } from '../../data';

export default {
  name: 'destination',
  type: 'document',
  title: 'Destination',
  icon: IoMapOutline,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Destination name.',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('The destination name must have 2 characters min.'),
        Rule.max(30).warning(
          'Shorter titles (less than 30 characters) are usually better.'
        ),
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Destination slug.',
      options: {
        source: 'name',
        maxLength: 30,
      },
      validation: (Rule) => [
        Rule.required().error('A slug is required and must be generated.'),
      ],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'destinationTag' }],
        },
      ],
    },
    {
      name: 'season',
      type: 'string',
      title: 'Season',
      description: 'Destination season.',
      options: {
        list: [...seasons],
        // // layout: 'radio',
      },
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
      description: 'Destination location (state or country).',
      options: {
        list: [...locations],
      },
    },
    {
      name: 'card',
      type: 'cardSimple',
      title: 'Card',
      description: 'Destination card.',
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero',
      description: 'Destination page hero.',
    },
    {
      name: 'mapSection',
      type: 'section',
      title: 'Map Section',
      description: 'Map section of the destination page.',
    },
    {
      name: 'highlightsSection',
      type: 'highlightsSection',
      title: 'Highlights Section',
      description: 'Highlight section of the destination page.',
    },
    {
      name: 'experienceSection',
      type: 'destinationExperienceSection',
      title: 'Experience Section',
      description: 'Experience that includes the destination.',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Page meta info for SEO.',
    },
  ],
};
