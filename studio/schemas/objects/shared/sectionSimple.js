export default {
  name: 'sectionSimple',
  type: 'object',
  title: 'Section Simple',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
