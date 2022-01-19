import { blogPageQuery } from '@/lib/queries';
import { getClient } from '@/lib/sanity.server';

import Layout from '@/components/navigation/Layout';
import Hero from '@/components/shared/Hero';
import PostsList from '@/components/blog/BlogPostList';
import PostCard from '@/components/blog/BlogPostCard';

export default function BlogPage({ blogPageData }) {
  return (
    <Layout title={''} description={''}>
      <Hero hero={blogPageData?.hero} page="blog" />
      <section className="tw-section max-w-7xl mx-auto">
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
  const blogPageData = await getClient(preview).fetch(blogPageQuery);
  return {
    props: { blogPageData, preview },
  };
}
