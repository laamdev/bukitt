export default {
  name: 'homeFeaturesSection',
  type: 'object',
  title: 'Features Section',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Bukitt Features',
      type: 'array',
      of: [{ type: 'feature' }],
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
