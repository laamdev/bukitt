export default {
  name: 'homeServicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
    },
    {
      name: 'experiencesCard',
      type: 'section',
      title: 'Experiences Card',
    },
    {
      name: 'destinationsCard',
      type: 'section',
      title: 'Destinations Card',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
