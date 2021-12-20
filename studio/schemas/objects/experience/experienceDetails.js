import { months } from '../../../data';

export default {
  name: 'experienceDetails',
  type: 'object',
  title: 'Experience Details',
  fields: [
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Experience price.',
    },
    {
      name: 'dateFrom',
      type: 'string',
      title: 'Date From',
      description: 'Experience date from.',
      options: {
        list: [...months],
      },
    },
    {
      name: 'dateTo',
      type: 'string',
      title: 'Date To',
      description: 'Experience date to.',
      options: {
        list: [...months],
      },
    },
    {
      name: 'duration',
      type: 'number',
      title: 'Duration',
      description: 'Experience duration in days.',
    },
    {
      name: 'groupSizeMin',
      type: 'number',
      title: 'Group Size Min',
      description: 'Mininum number of people per group.',
    },
    {
      name: 'groupSizeMax',
      type: 'number',
      title: 'Group Size Max',
      description: 'Maximum number of people per group.',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
