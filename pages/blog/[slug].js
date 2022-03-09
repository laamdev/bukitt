import { sanityClient } from '@/lib/sanity.server';
import { blogPostPathsQuery, individualBlogPostQuery } from '@/lib/queries';

import Layout from '@/components/navigation/Layout';
import TextBody from '@/components/shared/TextBody';
import Hero from '@/components/blog/Hero';

export default function BlogPostPage({ blogPost }) {
  return (
    <Layout metaTitle={blogPost?.title} metaDesription={blogPost?.excerpt}>
      <Hero
        title={blogPost?.title}
        author={blogPost?.author}
        category={blogPost?.category}
        coverImage={blogPost?.coverImage}
        date={blogPost?.date}
        excerpt={blogPost?.excerpt}
        readingTime={blogPost?.readingTime}
      />
      <section className="tw-section flex justify-center">
        <TextBody content={blogPost?.body} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(blogPostPathsQuery);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const { blogPost } = await sanityClient.fetch(individualBlogPostQuery, {
    slug: params.slug,
  });

  return {
    props: {
      blogPost,
    },
  };
}
