// imageGallery.js

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'imageCustom',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
};
