export default {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Quote heading',
    },
    {
      name: 'body',
      type: 'text',
      title: 'Quote body',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author Name',
    },
    {
      name: 'role',
      type: 'string',
      title: 'Author Role',
      description: "Role of the quote's author",
    },
    {
      name: 'profilePicture',
      type: 'imageCustom',
      title: 'Profile Picture',
      description:
        'Image should be in JPG format and have a 1:1 aspect ratio (1080x1080 preferred).',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
