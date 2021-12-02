import { IoHomeOutline } from 'react-icons/io5';

export default {
  name: 'homePage',
  title: 'Home Page',
  icon: IoHomeOutline,
  type: 'document',
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
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },

    {
      name: 'introductionSection',
      title: 'Introduction Section',
      type: 'sectionSimple',
    },

    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'sectionSimpleCTA',
    },

    {
      name: 'exploreSection',
      title: 'Explore Section',
      type: 'section',
    },
  ],
};
