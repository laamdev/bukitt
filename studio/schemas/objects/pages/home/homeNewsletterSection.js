export default {
  name: 'homeNewsletterSection',
  type: 'object',
  title: 'Newsletter Section',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
