export default {
  name: 'highlight',
  title: 'Highlight',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Highlight card title.',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('A card heading of min. 2 characters is required.'),
        Rule.max(50).warning('The card name must be less than 50 characters.'),
      ],
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
      description: 'Highlight card text body.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageCustom',
      description: 'Highlight card image.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
