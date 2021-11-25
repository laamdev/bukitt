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
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'customImage',
      description:
        'Image should be in JPG format and have a 16:9 aspect ratio (1920x1080 preferred).',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
