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
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Hero tagline.',
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
      description: 'Hero body.',
    },
    {
      name: 'callToAction',
      type: 'callToAction',
      title: 'CTA',
      description: 'Hero CTA.',
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
