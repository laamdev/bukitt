export default {
  name: 'homeTestimonialsSection',
  type: 'object',
  title: 'Testimonials Section',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }],
    },
  ],
  options: { collapsible: true, collapsed: true, columns: 1 },
};
