import { IoPricetagOutline } from 'react-icons/io5';

export default {
  name: 'destinationTag',
  type: 'document',
  title: 'Destination Tag',
  icon: IoPricetagOutline,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};
