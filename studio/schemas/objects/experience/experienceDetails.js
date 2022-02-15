import { months } from '../../../data';

export default {
  name: 'experienceDetails',
  type: 'object',
  title: 'Experience Details',
  fields: [
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Experience price.',
    },
    {
      name: 'dateFrom',
      title: 'Date From',
      type: 'string',
      description: 'Experience date from.',
      options: {
        list: [...months],
      },
    },
    {
      name: 'dateTo',
      title: 'Date To',
      type: 'string',
      description: 'Experience date to.',
      options: {
        list: [...months],
      },
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'number',
      description: 'Experience duration in days.',
    },
    {
      name: 'groupSize',
      title: 'Group Size',
      type: 'number',
      description: 'Mininum number of people per group.',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
