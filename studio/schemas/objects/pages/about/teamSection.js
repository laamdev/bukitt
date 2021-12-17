export default {
  name: 'teamSection',
  type: 'object',
  title: 'Team Section',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
