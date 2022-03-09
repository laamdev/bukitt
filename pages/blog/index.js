import { blogPageQuery } from '@/lib/queries';
import { sanityClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import PostsList from '@/components/blog/BlogPostList';
import PostCard from '@/components/blog/BlogPostCard';

export default function BlogPage({ blogPageData }) {
  return (
    <Layout
      metaTitle={blogPageData?.title}
      metaDescription={blogPageData?.hero?.body}
    >
      <Hero hero={blogPageData?.hero} page="blog" />
      <section className="tw-section mx-auto max-w-7xl">
        <PostsList>
          {blogPageData?.blogPosts.map((blogPost) => (
            <PostCard key={blogPost?._id} blogPost={blogPost} />
          ))}
        </PostsList>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const blogPageData = await sanityClient.fetch(blogPageQuery);
  return {
    props: { blogPageData, preview },
  };
}
