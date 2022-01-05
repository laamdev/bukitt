export default {
  name: 'testimonial',
  type: 'object',
  title: 'Testimonial',
  fields: [
    {
      name: 'quote',
      type: 'text',
      title: 'Quote',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age',
    },
    {
      name: 'origin',
      type: 'string',
      title: 'Origin',
    },
    {
      name: 'destination',
      type: 'string',
      title: 'Destination',
    },
    {
      name: 'thumbnail',
      type: 'imageCustom',
      title: 'Thumbnail',
      description:
        'Image should be in JPG format and have a 1:1 aspect ratio (1080x1080 preferred).',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'travelerTripDestination',
      media: 'thumbnail',
    },
  },
};
