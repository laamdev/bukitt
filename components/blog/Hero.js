import Image from 'next/image';
import dayjs from 'dayjs';

import { usePreviewSubscription, urlForImage } from '@/lib/sanity';

export default function Hero({
  title,
  coverImage,
  category,
  author,
  date,
  excerpt,
  readingTime,
}) {
  const publishedDate = dayjs(date).format('MMM D, YYYY');

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-12 items-center">
      <div className="w-full sm:w-3/5 rounded-2xl shadow-xl">
        {coverImage && (
          <Image
            src={urlForImage(coverImage).width(1350).height(1080).url()}
            alt={coverImage?.alt ? coverImage?.alt : ''}
            layout="responsive"
            width={5}
            height={4}
            objectFit="cover"
            objectPosition="center"
            className="sm:rounded-2xl"
          />
        )}
      </div>
      <div className="w-full sm:w-2/5 mt-3 sm:mt-0 px-3 sm:pl-0 sm:pr-3">
        <h2 className="text-brand text-sm font-medium tracking-widest uppercase">
          {category}
        </h2>
        <h1 className="font-bold font-mono text-4xl uppercase">{title}</h1>
        <div className="flex items-center space-x-3 mt-3">
          <div className="w-12">
            <span className="sr-only">{author?.name}</span>
            <Image
              src={urlForImage(author?.picture).width(1080).height(1080).url()}
              alt={author?.picture?.alt ? author?.picture?.alt : ''}
              layout="responsive"
              width={1}
              height={1}
              objectFit="cover"
              objectPosition="center"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-medium text-neutral-900">
                {author?.name}
              </p>
            </div>
            <div className="flex space-x-1 text-sm text-neutral-500">
              <span>{publishedDate}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-neutral-700 text-2xl">
          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  );
}
