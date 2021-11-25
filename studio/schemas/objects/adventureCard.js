export default {
  name: 'adventureCard',
  title: 'Adventure Card',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Adventure package name.',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('A card name of min. 2 characters is required.'),
        Rule.max(50).warning('The card name must be less than 50 characters.'),
      ],
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'customImage',
      description:
        'Image should be in JPG format and have a 4:3 aspect ratio (1600x1200 preferred).',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
