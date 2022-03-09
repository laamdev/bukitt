import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import markdownStyles from './markdown-styles.module.css';

import { urlForImage } from '@/lib/sanity';
// // import urlBuilder from '@sanity/image-url';
// // import { getImageDimensions } from '@sanity/asset-utils';

const components = {
  types: {
    image: ({ value }) => {
      // // const { width, height } = getImageDimensions(value);

      if (!value || !value.asset || !value.asset._ref) {
        return null;
      }

      return (
        <div className="py-3 text-center md:py-6 lg:py-12">
          <Image
            src={urlForImage(value).width(1600).height(1200).url()}
            alt={value.alt}
            layout="responsive"
            width={4}
            height={3}
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />
          <small className="text-xs text-slate-500 md:text-sm">
            {value.caption}
          </small>
        </div>
      );
    },
  },
  marks: {
    internalLink: ({ value, children }) => {
      const { slug = {}, type = {} } = value;

      const prepend =
        type === 'experience' || type === 'destination' ? `${type}s` : '';

      const href = `/${prepend}/${slug.current}`;
      return (
        <Link href={href} scroll={false}>
          <a>{children}</a>
        </Link>
      );
    },
    link: ({ value, children }) => {
      const { url } = value;
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

export default function TextBody({ content, modClass }) {
  return (
    <div
      className={`tw-transition prose prose-neutral prose-a:font-medium prose-a:text-brand hover:prose-a:text-brand-400 prose-img:mx-auto prose-img:rounded-2xl prose-img:shadow-xl ${
        modClass ? modClass : ''
      }`}
    >
      <PortableText
        value={content}
        components={components}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </div>
  );
}
