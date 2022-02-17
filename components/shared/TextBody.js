import Link from 'next/link';
import Image from 'next/image';
import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';
import { urlForImage } from '@/lib/sanity';

const serializers = {
  types: {
    image: ({ node }) => {
      if (!node || !node.asset || !node.asset._ref) {
        return null;
      }

      return (
        <div className="py-3 text-center md:py-6 lg:py-12">
          <Image
            src={urlForImage(node).width(1920).height(1440).url()}
            alt={node.alt}
            layout="responsive"
            width={4}
            height={3}
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />
          <small className="text-xs text-slate-500 md:text-sm">
            {node.caption}
          </small>
        </div>
      );
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {}, type = {} } = mark;

      const prepend =
        type === 'experience' || type === 'destination' ? `${type}s` : '';

      const href = `/${prepend}/${slug.current}`;
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      );
    },
    link: ({ mark, children }) => {
      const { url } = mark;
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
      <BlockContent
        blocks={content}
        serializers={serializers}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </div>
  );
}
