import { IoPinOutline } from 'react-icons/io5';

export default {
  name: 'adventure',
  title: 'Adventure',
  icon: IoPinOutline,
  type: 'document',
  initialValue: () => ({
    featured: false,
  }),

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('A title of min. 2 characters is required.'),
        Rule.max(50).warning(
          'Shorter titles (less than 50 characters) are usually better.'
        ),
      ],
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 50,
      },
      validation: (Rule) => [
        Rule.required().error('A slug is required and must be generated.'),
      ],
    },

    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },

    {
      name: 'adventureCard',
      title: 'Card',
      type: 'adventureCard',
    },

    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },

    {
      name: 'mapSection',
      title: 'Map Section',
      type: 'section',
    },

    {
      name: 'accommodationSection',
      title: 'Accommodation Section',
      type: 'section',
    },

    {
      name: 'destinations',
      title: 'Destinations',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'destination' }],
        },
      ],
    },

    {
      name: 'form',
      title: 'Form',
      type: 'form',
    },

    // // {
    // //   name: "adventureType",
    // //   title: "Adventure Type",
    // //   type: "string",
    // //   options: {
    // //     list: [
    // //       { title: "Summer", value: "summer" },
    // //       { title: "Winter", value: "winter" },
    // //     ],
    // //   },
    // // },
  ],
};
