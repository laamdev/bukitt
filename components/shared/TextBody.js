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
        <div className="text-center">
          <Image
            src={urlForImage(node).width(1080).height(1080).url()}
            alt={node.alt}
            layout="responsive"
            width={1}
            height={1}
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />
          <small className="text-neutral-500 text-xs">{node.caption}</small>
        </div>
      );
    },
  },
  marks: {
    internalLink: ({ mark, children }) => {
      const { slug = {} } = mark;
      const href = `/${slug.current}`;
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      );
    },
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export default function TextBody({ content, modClass }) {
  return (
    <div
      className={`prose prose-neutral prose-a:font-medium prose-a:text-brand hover:prose-a:text-brand-400 prose-img:rounded-2xl prose-img:shadow-xl prose-img:mx-auto tw-transition ${
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
