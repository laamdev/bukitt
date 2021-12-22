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
      name: 'keywords',
      type: 'text',
      title: 'Keywords',
      description: 'Page meta keywords for SEO. Separate, with, commas.',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Page meta description for SEO.',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Page open graph meta image for SEO. 1200x630',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
