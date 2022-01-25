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
      validation: (Rule) => [
        Rule.max(50).error('Tagline should be 50 characters max.'),
      ],
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
      description: 'Hero body.',
      validation: (Rule) => [
        Rule.max(250).warning(
          'A shorter body text (less than 250 characters) is usually better.'
        ),
      ],
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
