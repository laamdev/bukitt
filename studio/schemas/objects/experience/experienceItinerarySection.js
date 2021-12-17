export default {
  name: 'experienceItinerarySection',
  type: 'object',
  title: 'Experience Itinerary Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'itinerary',
      type: 'array',
      title: 'Itinerary',
      of: [{ type: 'experienceItineraryItem' }],
    },
  ],
  options: { collapsible: true, collapsed: true },
};
