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
      name: 'body',
      type: 'text',
      title: 'Body',
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
