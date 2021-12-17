// textWithIllustration.js

export default {
  name: 'textWithImage',
  type: 'object',
  title: 'Text with Image',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
    },
    // {
    //   name: 'excerpt',
    //   type: 'text',
    //   title: 'Excerpt',
    // },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
    },
    {
      name: 'image',
      type: 'imageCustom',
      title: 'Image',
    },
  ],
};
