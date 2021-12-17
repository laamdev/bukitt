export default {
  name: 'cardSimple',
  title: 'Card Simple',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Card title.',
    },
    {
      name: 'image',
      type: 'imageCustom',
      title: 'Image',
      description: 'Card Image.',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
