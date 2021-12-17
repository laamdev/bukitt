export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
      description: 'Card text body.',
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
