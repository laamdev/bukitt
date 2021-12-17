export default {
  name: 'experienceItineraryItem',
  type: 'object',
  title: 'Experience Itinerary Item',
  fields: [
    {
      name: 'day',
      type: 'number',
      title: 'Day',
    },
    {
      name: 'activity',
      type: 'text',
      title: 'Activity',
    },
  ],
  preview: {
    select: {
      title: 'day',
      subtitle: 'activity',
    },
  },
};
