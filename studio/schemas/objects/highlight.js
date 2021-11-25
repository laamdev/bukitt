export default {
  name: 'highlight',
  title: 'Highlight',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('A card name of min. 2 characters is required.'),
        Rule.max(50).warning('The card name must be less than 50 characters.'),
      ],
      description: 'Simplified name of the destination.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'customImage',
      description:
        'Image should be in JPG format and have a 4:3 aspect ratio (1600x1200 preferred).',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'thumbnail', // Use the userPortait image field as thumbnail
    },
  },
};
