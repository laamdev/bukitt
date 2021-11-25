import { IoPerson } from 'react-icons/io5';

export default {
  name: 'teamMember',
  title: 'Team Member',
  icon: IoPerson,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required()
          .min(2)
          .error('A name of min. 2 characters is required.'),
        Rule.max(50).warning('Names must be less than ess than 50 characters.'),
      ],
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'recentTrip',
      title: 'Recent Trip',
      type: 'string',
    },
    {
      name: 'futureTrip',
      title: 'Future Trip',
      type: 'string',
    },
    {
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'customImage',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'profilePicture',
    },
  },
};
