import { IoShareSocialOutline } from 'react-icons/io5';

export default {
  name: 'socials',
  title: 'Socials',
  icon: IoShareSocialOutline,
  type: 'document',
  fields: [
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      description: 'Enter full URL of Instagram profile.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },

    {
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      description: 'Enter full URL of Facebook profile.',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },

    {
      name: 'email',
      title: 'Email',
      type: 'url',
      description:
        'Email address must follow the format mailto:name@domain.com',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['mailto'],
        }),
    },

    {
      name: 'mobile',
      title: 'Mobile',
      type: 'url',
      description: 'Phone number must follow the format tel:1231231231',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['tel'],
        }),
    },
  ],
};
