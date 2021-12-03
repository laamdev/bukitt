export default {
  name: 'doubleImage',
  title: 'Double Image',
  type: 'object',
  fields: [
    {
      name: 'firstImage',
      title: 'First Image',
      type: 'customImage',
      description:
        'Image should be in JPG format and have a 3:4 aspect ratio (1200x1600 preferred).',
    },
    {
      name: 'firstLink',
      title: 'First Link',
      type: 'string',
      description: 'Link to second page.',
      options: {
        list: [
          { title: 'Home Page', value: '' },
          { title: 'Adventures Page', value: 'adventures' },
          { title: 'Destinations Page', value: 'destinations' },
          { title: 'About Page', value: 'about' },
          { title: 'Tailored Trip Page', value: 'tailored-trip' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'secondImage',
      title: 'Second Image',
      type: 'customImage',
      description:
        'Image should be in JPG format and have a 3:4 aspect ratio (1200x1600 preferred).',
    },
    {
      name: 'secondLink',
      title: 'Second Link',
      type: 'string',
      description: 'Link to second page.',
      options: {
        list: [
          { title: 'Home Page', value: '' },
          { title: 'Adventures Page', value: 'adventures' },
          { title: 'Destinations Page', value: 'destinations' },
          { title: 'About Page', value: 'about' },
          { title: 'Tailored Trip Page', value: 'tailored-trip' },
        ],
        layout: 'radio',
      },
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
