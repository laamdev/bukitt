import { IoHomeOutline } from 'react-icons/io5';

export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  icon: IoHomeOutline,
  initialValue: {
    title: 'Home',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Home page title.',
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
      type: 'slug',
      title: 'Slug',
      description: 'Home page slug.',
      options: {
        source: 'title',
        maxLength: 30,
      },
      validation: (Rule) => [
        Rule.required().error('A slug must be generated.'),
      ],
    },
    {
      name: 'hero',
      type: 'hero',
      title: 'Hero',
      description: 'Home page hero.',
    },
    {
      name: 'servicesSection',
      type: 'servicesSection',
      title: 'Services Section',
      description: 'Home page services section.',
    },
    {
      name: 'featuredSection',
      type: 'section',
      title: 'Featured Section',
      description: 'Home page featured section.',
    },
    {
      name: 'aboutSection',
      type: 'section',
      title: 'About Section',
      description: 'Home page about section.',
    },
    {
      name: 'exploreSection',
      type: 'section',
      title: 'Explore Section',
      description: 'Home page explore section.',
    },
    {
      name: 'testimonialsSection',
      type: 'homeTestimonialsSection',
      title: 'Testimonials Section',
      description: 'Home page testimonials section.',
    },
    {
      name: 'stepsSection',
      type: 'section',
      title: 'Steps Section',
      description: 'Home page steps section.',
    },
    {
      name: 'partnersSection',
      type: 'section',
      title: 'Partners Section',
      description: 'Home page partners section.',
    },
  ],
};
