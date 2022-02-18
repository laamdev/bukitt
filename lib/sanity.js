import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from '@/lib/config';

export const builder = imageUrlBuilder(sanityConfig);

export const urlForImage = (source) =>
  builder.image(source).auto('format').fit('max');
