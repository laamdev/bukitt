export default {
  name: 'destinationExperienceSection',
  title: 'Experience Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Section Heading',
    },
    {
      name: 'experience',
      type: 'reference',
      title: 'Experience',
      description: 'Experience that includes the destination.',
      to: [{ type: 'experience' }],
    },
  ],
  options: { collapsible: true, collapsed: true },
};
