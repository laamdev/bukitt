import Link from 'next/link';
import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
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

export default function TextBody({ content }) {
  return (
    <div className="prose prose-gray prose-a:font-medium prose-a:text-paradiso hover:prose-a:text-paradiso-400 prose-img:rounded-2xl prose-img:shadow-md tw-transition">
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
