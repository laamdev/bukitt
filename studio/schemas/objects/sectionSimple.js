export default {
  name: 'sectionSimple',
  title: 'Section Simple',
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
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
