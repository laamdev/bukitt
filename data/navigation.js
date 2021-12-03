import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';

export const navLinks = [
  { name: 'Home', href: '/', current: true },
  { name: 'Adventures', href: '/adventures', current: false },
  { name: 'About Us', href: '/about', current: false },
  { name: 'Blog', href: '/blog', current: false },
];

export const userLinks = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bukitttravel/?hl=en',
    icon: <IoLogoInstagram className="w-6 h-6" />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bukitttravel/',
    icon: <IoLogoFacebook className="w-6 h-6" />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/bukitttravel',
    icon: <IoLogoTwitter className="w-6 h-6" />,
  },
];

export const copyright =
  '© 2021, Bukkit.com Fla. Seller of Travel Reg. No. ST42985';
