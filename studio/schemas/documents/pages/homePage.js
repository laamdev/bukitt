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
    },
    {
      name: 'servicesSection',
      type: 'homeServicesSection',
      title: 'Services Section',
    },
    {
      name: 'featuredDestinationsSection',
      type: 'homeFeaturedDestinationsSection',
      title: 'Featured Destinations Section',
    },
    {
      name: 'featuredExperienceSection',
      type: 'homeFeaturedExperienceSection',
      title: 'Featured Experience Section',
    },
    {
      name: 'featuresSection',
      type: 'homeFeaturesSection',
      title: 'Features Section',
    },
    {
      name: 'testimonialsSection',
      type: 'homeTestimonialsSection',
      title: 'Testimonials Section',
    },
    {
      name: 'partnersSection',
      type: 'section',
      title: 'Partners Section',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
    },
  ],
};
