import { IoHomeOutline } from 'react-icons/io5';

export default {
  name: 'adventuresPage',
  title: 'Adventures Page',
  icon: IoHomeOutline,
  type: 'document',
  fields: [
    {
      name: 'adventuresHeading',
      title: 'Adventures Heading',
      type: 'string',
    },
    {
      name: 'destinationsHeading',
      title: 'Destinations Heading',
      type: 'string',
    },
  ],
};
