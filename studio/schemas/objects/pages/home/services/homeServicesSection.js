export default {
  name: 'homeServicesSection',
  title: 'Services Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Services section heading.',
    },
    {
      name: 'experiencesCard',
      type: 'homeServicesCard',
      title: 'Experiences Card',
      description: 'Card links to our list of experiences.',
    },
    {
      name: 'tailoredCard',
      type: 'homeServicesCard',
      title: 'Tailored Card',
      description: 'Card links to our list of destinations.',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
