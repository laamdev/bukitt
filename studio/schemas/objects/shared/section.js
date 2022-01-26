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
      name: 'toggleCTA',
      type: 'boolean',
      title: 'With CTA?',
    },
    {
      name: 'callToAction',
      type: 'callToAction',
      title: 'Call To Action',
      hidden: ({ parent }) => !parent?.toggleCTA,
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
