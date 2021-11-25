export default {
  title: 'Custom Image',
  name: 'customImage',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      title: 'Alt',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
    },
  ],
};
