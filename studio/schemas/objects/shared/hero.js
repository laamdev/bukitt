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
      type: 'text',
      title: 'Body',
      description: 'Hero body.',
      // // validation: (Rule) => [
      // //   Rule.required()
      // //     .min(100)
      // //     .error('Body is required and must be min. 100 char.'),
      // //   Rule.max(250).error('Body must be max. 250 char.'),
      // // ],
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
