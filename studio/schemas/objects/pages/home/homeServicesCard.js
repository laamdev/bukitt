export default {
  name: 'homeServicesCard',
  title: 'Services Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Card title.',
      validation: (Rule) => [
        Rule.required()
          .min(5)
          .error('The card title is required and must be 5 characters min.'),
        Rule.max(25).warning(
          'A shorter title (around 25 characters or less) is usually better.'
        ),
      ],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Card description text.',
      validation: (Rule) => [
        Rule.required()
          .min(25)
          .error(
            'The card description is required and must be 25 characters min.'
          ),
        Rule.max(150).warning(
          'A shorter description (around 150 characters or less) is usually better.'
        ),
      ],
    },
    {
      name: 'image',
      type: 'imageCustom',
      title: 'Image',
      description: 'Card background image.',
    },
    {
      name: 'callToAction',
      type: 'callToAction',
      title: 'Call To Action',
      description: 'Card call to action.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
};
