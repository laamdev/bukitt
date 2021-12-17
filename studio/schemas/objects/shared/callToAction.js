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
          { title: 'Tailored Trip Page', value: 'tailored-trip' },
        ],
        layout: 'radio',
      },
      title: 'URL',
    },
    // {
    //   name: 'url',
    //   type: 'url',
    //   title: 'URL',
    // },
  ],
};
