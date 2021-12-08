export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'authorDetail',
      title: 'Author Detail',
      type: 'string',
      description: "Details of the quote's author",
    },
    {
      name: 'authorImage',
      title: 'Author Image',
      type: 'customImage',
      description:
        'Image should be in JPG format and have a 1:1 aspect ratio (1080x1080 preferred).',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
