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
      hidden: ({ document }) =>
        document?._type === 'destination' ||
        document?._type === 'aboutPage' ||
        document?._type === 'destinationsPage' ||
        document?._type === 'experiencesPage',
      validation: (Rule) => [
        Rule.max(50).warning('Tagline should be 50 characters max.'),
      ],
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
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
    },
  ],
  options: { collapsible: true, collapsed: true },
};
