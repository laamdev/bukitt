export default {
  name: 'destinationCategory',
  type: 'document',
  title: 'Destination Category',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Destination category name.',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
