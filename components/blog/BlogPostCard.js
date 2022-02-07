import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

import { urlForImage } from '@/lib/sanity';

export default function BlogPostCard({ blogPost }) {
  const publishedDate = dayjs(blogPost?.date).format('MMM D, YYYY');

  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl shadow-xl">
      <Link href={`blog/${blogPost?.slug}`}>
        <a className="flex h-full flex-col bg-slate-400">
          <div className="shrink-0">
            <Image
              className="tw-transition h-48 w-full object-cover group-hover:scale-105 "
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
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                {/* <a href={post.category.href} className="hover:underline"> */}
                {blogPost?.category?.name}
                {/* </a> */}
              </p>
              <div className="mt-2 block">
                <p className="text-xl font-semibold text-slate-900">
                  {blogPost?.title}
                </p>
                <p className="mt-3 text-base text-slate-500 line-clamp-5">
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
                <p className="text-sm font-medium text-slate-900">
                  {/* <a href={post.author.href} className="hover:underline"> */}
                  {blogPost?.author?.name}
                  {/* </a> */}
                </p>
                <div className="flex space-x-1 text-sm text-slate-500">
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
