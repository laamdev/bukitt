import { months } from '../../../data';

export default {
  name: 'season',
  title: 'Season',
  type: 'object',
  fields: [
    {
      name: 'monthStart',
      title: 'Month Start',
      type: 'string',
      options: {
        list: [...months],
      },
    },
    {
      name: 'monthEnd',
      title: 'Mont End',
      type: 'string',
      options: {
        list: [...months],
      },
    },
    {
      name: 'lowestAverageTemperature',
      title: 'Lowest Average Temperature',
      type: 'number',
    },
    {
      name: 'highestAverageTemperature',
      title: 'Highest Average Temperature',
      type: 'number',
    },
    {
      name: 'precipitation',
      title: 'Precipitation',
      type: 'number',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
