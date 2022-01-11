import { IoPencilOutline } from 'react-icons/io5';

export default {
  name: 'inquiryFormPage',
  type: 'document',
  title: 'Inquiry Form Page',
  icon: IoPencilOutline,
  initialValue: {
    title: 'Inquiry Form',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Inquiry Form page title.',
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
      description: 'Inquiry Form page slug.',
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
      description: 'Inquiry Form page hero.',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Page meta info for SEO.',
    },
  ],
};
