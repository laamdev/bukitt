import Link from 'next/link';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import markdownStyles from './markdown-styles.module.css';

import { urlForImage } from '@/lib/sanity';

const components = {
  types: {
    image: ({ value }) => {
      if (!value || !value.asset || !value.asset._ref) {
        return null;
      }

      return (
        <div>
          <Image
            src={urlForImage(value).width(1920).height(1536).url()}
            alt={value.alt}
            layout="responsive"
            width={5}
            height={4}
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl bg-slate-300"
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

export default function TextBody({ content }) {
  return (
    <div
      className={`tw-transition prose prose-lg prose-img:mx-auto prose-img:rounded-2xl prose-img:shadow-xl`}
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
