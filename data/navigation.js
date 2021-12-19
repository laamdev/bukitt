import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';

export const navLinks = [
  { name: 'Home', href: '/', current: true },
  { name: 'Experiences', href: '/experiences', current: false },
  { name: 'Destinations', href: '/destinations', current: false },
  { name: 'Tailored Trip', href: '/tailored-trip', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Blog', href: '/blog', current: false },
];

export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bukitttravel/?hl=en',
    icon: <IoLogoInstagram className="w-6 h-6 " aria-hidden="true" />,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bukitttravel/',
    icon: <IoLogoFacebook className="w-6 h-6" aria-hidden="true" />,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/bukitttravel',
    icon: <IoLogoTwitter className="w-6 h-6" aria-hidden="true" />,
  },
];

export const currentYear = new Date().getFullYear();

export const copyright =
  'Bukitt LLC. All Rights Reserved. Seller of Travel Reg. No. ST42985';
