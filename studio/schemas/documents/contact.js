import { IoShareSocialOutline } from 'react-icons/io5';

export default {
  name: 'contact',
  title: 'Contact',
  type: 'document',
  icon: IoShareSocialOutline,
  initialValue: {
    email: 'mailto:',
    phone: 'tel:',
  },
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'url',
      description: 'Contact email.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['mailto'],
        }).error('Must follow the format mailto:name@domain.com'),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'url',
      description: 'Contact phone number.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['tel'],
        }).error('Must follow the format tel:1231231231'),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description: 'Contact phone number.',
    },
  ],
};
