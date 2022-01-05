export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Hero heading.',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
      description: 'Hero body.',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'imageCustom',
      description: 'JPG format and 16:9 aspect ratio.',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
