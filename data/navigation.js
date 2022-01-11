import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMailOutline,
  IoCallOutline,
} from 'react-icons/io5';

export const navLinks = [
  { name: 'Experiences', href: '/experiences' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'About', href: '/about' },
  // // { name: 'Enquire', href: '/enquiry-form' },
  { name: 'Blog', href: '/blog' },
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

export const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:hello@bukitt.com',
    icon: <IoMailOutline className="w-6 h-6 " aria-hidden="true" />,
  },
  {
    name: 'Phone',
    href: 'tel:3059986034',
    icon: <IoCallOutline className="w-6 h-6" aria-hidden="true" />,
  },
];

export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().toLocaleString('default', {
  month: 'long',
});

export const copyright =
  'Bukitt LLC. All Rights Reserved. Seller of Travel Reg. No. ST42985';
