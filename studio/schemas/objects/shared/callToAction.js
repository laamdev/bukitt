export default {
  name: 'callToAction',
  type: 'object',
  title: 'Call to Action',
  fields: [
    {
      name: 'linkText',
      type: 'string',
      title: 'Link Text',
    },
    {
      name: 'url',
      type: 'string',
      description: 'Link to page.',
      options: {
        list: [
          { title: 'Home Page', value: '' },
          { title: 'Experiences Page', value: 'experiences' },
          { title: 'Destinations Page', value: 'destinations' },
          { title: 'About Page', value: 'about' },
          { title: 'Inquiry Form Page', value: 'inquiry-form' },
        ],
        layout: 'radio',
      },
      title: 'URL',
    },
  ],
};
