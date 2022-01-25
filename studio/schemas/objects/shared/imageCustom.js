export default {
  name: 'imageCustom',
  type: 'image',
  title: 'Image Custom',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
  ],
};
