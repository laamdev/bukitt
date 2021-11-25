import { IoMapSharp } from 'react-icons/io5';

export default {
  name: 'destination',
  title: 'Destination',
  icon: IoMapSharp,
  type: 'document',
  initialValue: () => ({
    featured: false,
  }),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('A title of min. 2 characters is required'),
        Rule.max(50).warning(
          'Shorter titles (less than 50 characters) are usually better'
        ),
      ],
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => [
        Rule.required().error('A slug is required and must be generated.'),
      ],
    },

    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },

    {
      name: 'destinationCard',
      title: 'Card',
      type: 'destinationCard',
    },

    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },

    {
      name: 'highlightsSection',
      title: 'Highlights Section',
      type: 'highlightsSection',
    },

    {
      name: 'adventure',
      title: 'Adventure',
      type: 'array',
      type: 'reference',
      to: [{ type: 'adventure' }],
    },
  ],
};
