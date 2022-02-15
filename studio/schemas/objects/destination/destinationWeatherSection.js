export default {
  name: 'destinationWeatherSection',
  title: 'Weather Section',
  type: 'object',
  fields: [
    {
      name: 'spring',
      title: 'Spring',
      type: 'season',
    },
    {
      name: 'summer',
      title: 'Summer',
      type: 'season',
    },
    {
      name: 'fall',
      title: 'Fall',
      type: 'season',
    },
    {
      name: 'winter',
      title: 'Winter',
      type: 'season',
    },
  ],
  options: { collapsible: true, collapsed: true },
};
