import { FaRegHandshake } from 'react-icons/fa';

export default {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  icon: FaRegHandshake,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'imageCustom',
    },
  ],
};
