export default {
  name: 'servicesSection',
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
      title: 'Experiences Card',
      type: 'card',
      description: 'Experiences card.',
    },
    {
      name: 'tailoredCard',
      type: 'card',
      title: 'Tailored Card',
      description: 'Tailored card.',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
