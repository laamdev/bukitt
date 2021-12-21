export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Body',
    },
    {
      name: 'authorName',
      type: 'string',
      title: 'Author Name',
    },
    {
      name: 'authorDetail',
      type: 'string',
      title: 'Author Detail',
      description: "Details of the quote's author",
    },
    {
      name: 'authorImage',
      type: 'imageCustom',
      title: 'Author Image',
      description:
        'Image should be in JPG format and have a 1:1 aspect ratio (1080x1080 preferred).',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
