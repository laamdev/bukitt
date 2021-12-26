export default {
  name: 'homeFeaturedExperienceSection',
  type: 'object',
  title: 'Featured Experience Section',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Featured experience section heading.',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
      description: 'Featured experience section body.',
    },
    {
      name: 'featuredExperience',
      type: 'reference',
      title: 'Featured Experience',
      to: [{ type: 'experience' }],
      description: 'Featured experience.',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
