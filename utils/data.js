import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoMailOutline,
  IoCallOutline,
} from 'react-icons/io5';

export const navLinks = [
  { id: 1, name: 'Experiences', href: '/experiences' },
  { id: 2, name: 'Destinations', href: '/destinations' },
  { id: 3, name: 'About', href: '/about' },
  { id: 4, name: 'Blog', href: '/blog' },
];

export const socialLinksFooter = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bukitttravel/?hl=en',
    icon: (
      <IoLogoInstagram aria-hidden="true" className="h-6 w-6 lg:h-8 lg:w-8" />
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bukitttravel/',
    icon: (
      <IoLogoFacebook aria-hidden="true" className="h-6 w-6 lg:h-8 lg:w-8" />
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/bukitttravel',
    icon: (
      <IoLogoTwitter aria-hidden="true" className="h-6 w-6 lg:h-8 lg:w-8" />
    ),
  },
];

export const socialLinkMobileMenu = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/bukitttravel/?hl=en',
    icon: (
      <IoLogoInstagram className="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/bukitttravel/',
    icon: (
      <IoLogoFacebook className="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/bukitttravel',
    icon: (
      <IoLogoTwitter className="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
    ),
  },
];

export const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:hello@bukitt.com',
    icon: (
      <IoMailOutline aria-hidden="true" className="h-6 w-6 lg:h-8 lg:w-8" />
    ),
  },
  {
    name: 'Phone',
    href: 'tel:3059986034',
    icon: (
      <IoCallOutline aria-hidden="true" className="h-6 w-6 lg:h-8 lg:w-8" />
    ),
  },
];

export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().toLocaleString('default', {
  month: 'long',
});

export const copyright =
  'Bukitt LLC. All Rights Reserved. Seller of Travel Reg. No. ST42985';
