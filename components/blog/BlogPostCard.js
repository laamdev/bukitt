import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

import { urlForImage } from '@/lib/sanity';

export default function BlogPostCard({ blogPost }) {
  const publishedDate = dayjs(blogPost?.date).format('MMM D, YYYY');

  return (
    <li className="flex flex-col rounded-2xl shadow-xl overflow-hidden group">
      <Link href={`blog/${blogPost?.slug}`}>
        <a className="flex flex-col bg-neutral-400 h-full">
          <div className="shrink-0">
            <Image
              className="h-48 w-full object-cover group-hover:scale-105 tw-transition "
              src={urlForImage(blogPost?.coverImage)
                .width(1080)
                .height(1080)
                .url()}
              alt={blogPost?.coverImage?.alt}
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                {/* <a href={post.category.href} className="hover:underline"> */}
                {blogPost?.category?.name}
                {/* </a> */}
              </p>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-neutral-900">
                  {blogPost?.title}
                </p>
                <p className="mt-3 text-base text-neutral-500 line-clamp-5">
                  {blogPost?.excerpt}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <div className="shrink-0">
                <a href={blogPost?.author?.href}>
                  <span className="sr-only">{blogPost?.author?.name}</span>
                  <div className="h-10 w-10">
                    <Image
                      className="rounded-full"
                      src={urlForImage(blogPost?.author?.picture)
                        .width(1080)
                        .height(1080)
                        .url()}
                      alt={blogPost?.author?.alt}
                      layout="responsive"
                      width={1}
                      height={1}
                    />
                  </div>
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-neutral-900">
                  {/* <a href={post.author.href} className="hover:underline"> */}
                  {blogPost?.author?.name}
                  {/* </a> */}
                </p>
                <div className="flex space-x-1 text-sm text-neutral-500">
                  {/* <time dateTime={post.datetime}>{post.date}</time> */}
                  <time>{publishedDate}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{blogPost?.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
