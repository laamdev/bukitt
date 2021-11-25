export default {
  name: 'homeAboutSection',
  title: 'Home About Section',
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
      type: 'text',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
