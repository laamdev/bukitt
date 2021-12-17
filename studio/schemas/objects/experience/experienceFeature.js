export default {
  name: 'experienceFeature',
  type: 'object',
  title: 'Experience Feature',
  fields: [
    {
      name: 'name',
      type: 'text',
      title: 'Name',
      description: 'Feature name.',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
