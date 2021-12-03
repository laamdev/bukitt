export default {
  name: 'partner',
  title: 'Partner',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'customImage',
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
