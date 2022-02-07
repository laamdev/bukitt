export default {
  name: 'homeFeaturedDestinationsSection',
  type: 'object',
  title: 'Featured Experience Section',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    },
    {
      name: 'featuredDestinations',
      title: 'Featured Destinations',
      type: 'array',
      description: 'Destinations featured in home page.',
      of: [
        {
          type: 'reference',
          to: [{ type: 'destination' }],
        },
      ],
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
