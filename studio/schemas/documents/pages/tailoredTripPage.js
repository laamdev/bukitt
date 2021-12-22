import { IoPencilOutline } from 'react-icons/io5';

export default {
  name: 'tailoredTripPage',
  type: 'document',
  title: 'Tailored Trip Page',
  icon: IoPencilOutline,
  initialValue: {
    title: 'Tailored Trip',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Tailored trip page title.',
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
      description: 'Tailored trip page slug.',
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
      description: 'Tailored trip page hero.',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Page meta info for SEO.',
    },
  ],
};
