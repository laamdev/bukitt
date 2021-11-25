export default {
  name: 'section',
  title: 'Section',
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
      name: 'image',
      title: 'Image',
      type: 'customImage',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
