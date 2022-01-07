export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      description: 'Hero heading.',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      description: 'Hero tagline.',
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
