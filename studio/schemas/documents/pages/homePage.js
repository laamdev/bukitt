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
      type: 'homeServicesSection',
      title: 'Services Section',
      description: 'Home page services section.',
    },
    {
      name: 'featuredDestinationsSection',
      type: 'section',
      title: 'Featured Destinations Section',
      description: 'Home page featured destinations section.',
    },
    {
      name: 'featuredExperienceSection',
      type: 'homeFeaturedExperienceSection',
      title: 'Featured Experience Section',
      description: 'Home page featured experience section.',
    },
    {
      name: 'featuresSection',
      type: 'homeFeaturesSection',
      title: 'Features Section',
      description: 'Home page features section.',
    },
    {
      name: 'testimonialsSection',
      type: 'homeTestimonialsSection',
      title: 'Testimonials Section',
      description: 'Home page testimonials section.',
    },
    {
      name: 'partnersSection',
      type: 'section',
      title: 'Partners Section',
      description: 'Home page partners section.',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Page meta info for SEO.',
    },
  ],
};
