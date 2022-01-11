export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Card title.',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
      description: 'Card text body.',
    },
    {
      name: 'image',
      type: 'imageCustom',
      title: 'Image',
      description: 'Card Image.',
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
      title: 'name',
      subtitle: 'priority',
      media: 'profilePicture',
    },
  },
};
