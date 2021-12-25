export default {
  name: 'experienceFeature',
  type: 'object',
  title: 'Experience Feature',
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
