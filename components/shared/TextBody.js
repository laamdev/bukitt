import markdownStyles from './markdown-styles.module.css';
import BlockContent from '@sanity/block-content-to-react';

export default function TextBody({ content }) {
  return (
    <div className="max-w-prose">
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        className={markdownStyles.markdown}
      />
    </div>
  );
}
