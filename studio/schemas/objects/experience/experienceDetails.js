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
      description: 'Experience duration.',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
