export default {
  name: 'partnersSection',
  title: 'Partners Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },

    {
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'partner' }],
    },
  ],
};
