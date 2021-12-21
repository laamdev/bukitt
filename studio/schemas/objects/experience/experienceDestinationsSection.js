export default {
  name: 'experienceDestinationsSection',
  type: 'object',
  title: 'Experience Destinations Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Experience price.',
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
  options: { collapsible: true, collapsed: true },
};
