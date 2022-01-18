export default {
  name: 'seo',
  type: 'object',
  title: 'SEO',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Page meta title for SEO.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Page meta description for SEO.',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
