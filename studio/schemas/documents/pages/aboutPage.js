import { IoNewspaperOutline } from 'react-icons/io5';

export default {
  name: 'aboutPage',
  title: 'About Page',
  icon: IoNewspaperOutline,
  type: 'document',
  initialValue: {
    title: 'about',
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'About page title.',
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
      description: 'Slug of the page.',
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
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'aboutSection',
      title: 'About Section',
      type: 'section',
    },
    {
      name: 'teamSection',
      type: 'teamSection',
      title: 'Team Section',
    },
    {
      name: 'quoteSection',
      title: 'Quote Section',
      type: 'quote',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Page meta info for SEO.',
    },
  ],
};
