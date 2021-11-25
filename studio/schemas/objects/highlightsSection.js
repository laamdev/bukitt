export default {
  name: 'highlightsSection',
  title: 'Highlights Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'highlight' }],
    },
  ],
  options: { collapsible: true, collapsed: true },
};
