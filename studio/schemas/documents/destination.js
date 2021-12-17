import { IoMapOutline } from 'react-icons/io5';

import { locations } from '../../data';

export default {
  name: 'destination',
  title: 'Destination',
  icon: IoMapOutline,
  type: 'document',
  initialValue: () => ({
    featured: false,
  }),
  fields: [
    {
      name: 'name',
      title: 'Name',
      description: 'Destination name.',
      type: 'string',
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
      title: 'Slug',
      type: 'slug',
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
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Destination featured in the homepage.',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Destination location (state or country).',
      options: {
        list: [...locations],
      },
    },
    {
      name: 'card',
      title: 'Card',
      type: 'cardSimple',
      description: 'Destination card.',
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
      description: 'Destination page hero.',
    },
    {
      name: 'mapSection',
      title: 'Map Section',
      type: 'section',
      description: 'Map section of the destination page.',
    },
    {
      name: 'highlightsSection',
      title: 'Highlights Section',
      type: 'highlightsSection',
      description: 'Highlight section of the destination page.',
    },
    {
      name: 'experience',
      type: 'reference',
      title: 'Experience',
      description: 'Experience that includes the destination.',
      to: [{ type: 'experience' }],
    },
  ],
};
