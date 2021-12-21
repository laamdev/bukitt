export default {
  name: 'testimonial',
  type: 'object',
  title: 'Testimonial',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
    },
    {
      name: 'travelerName',
      type: 'string',
      title: 'Traveler Name',
    },
    {
      name: 'travelerAge',
      type: 'number',
      title: 'Traveler Age',
    },
    {
      name: 'travelerOriginLocation',
      type: 'string',
      title: 'Traveler Origin Location',
    },
    {
      name: 'travelerTripDestination',
      type: 'string',
      title: 'Traveler Trip Destination',
    },
    {
      name: 'travelerImage',
      type: 'imageCustom',
      title: 'Traveler Image',
      description:
        'Image should be in JPG format and have a 1:1 aspect ratio (1080x1080 preferred).',
    },
  ],
  preview: {
    select: {
      title: 'travelerName',
      subtitle: 'travelerTripDestination',
      media: 'travelerImage',
    },
  },
};
