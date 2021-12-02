export default {
  name: 'sectionSimpleCTA',
  title: 'Section Simple CTA',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
