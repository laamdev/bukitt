import { useRouter } from 'next/router';
import ErrorPage from 'next/error';

import { blogPostPathsQuery, individualBlogPostQuery } from '@/lib/queries';
import { usePreviewSubscription } from '@/lib/sanity';
import { sanityClient, getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import TextBody from '@/components/shared/TextBody';
import Hero from '@/components/blog/Hero';

export default function PostPage({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.blogPost?.slug;

  const {
    data: { blogPost },
  } = usePreviewSubscription(individualBlogPostQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title="" description="">
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
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const { blogPost } = await getClient(preview).fetch(individualBlogPostQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        blogPost,
      },
    },
  };
}
