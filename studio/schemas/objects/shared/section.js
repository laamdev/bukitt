export default {
  name: 'section',
  type: 'object',
  title: 'Section',
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
    {
      name: 'image',
      type: 'imageCustom',
      title: 'Image',
    },
    {
      name: 'callToAction',
      type: 'callToAction',
      title: 'Call To Action',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
