export default {
  name: 'feature',
  type: 'object',
  title: 'Feature',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Feature title.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Feature description.',
    },
    {
      name: 'icon',
      type: 'imageCustom',
      title: 'Icon',
      description: 'Feature icon.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
    },
  },
};
