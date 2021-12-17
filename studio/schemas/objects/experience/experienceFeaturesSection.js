export default {
  name: 'experienceFeaturesSection',
  type: 'object',
  title: 'Experience Features Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [{ type: 'experienceFeature' }],
    },
  ],
  options: { collapsible: true, collapsed: true },
};
