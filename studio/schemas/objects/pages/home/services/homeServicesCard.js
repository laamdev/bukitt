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
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Card description text.',
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
