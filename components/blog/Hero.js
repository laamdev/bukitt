import Image from 'next/image';
import dayjs from 'dayjs';

import { urlForImage } from '@/lib/sanity';

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
    <div className="flex flex-col items-center sm:flex-row sm:space-x-12">
      <div className="w-full rounded-2xl shadow-xl sm:w-3/5">
        {coverImage && (
          <Image
            src={urlForImage(coverImage).width(1350).height(1080).url()}
            alt={coverImage?.alt ? coverImage?.alt : ''}
            layout="responsive"
            width={5}
            height={4}
            objectFit="cover"
            objectPosition="center"
            className="rounded-2xl"
          />
        )}
      </div>
      <div className="mt-3 w-full px-3 sm:mt-0 sm:w-2/5 sm:pl-0 sm:pr-3">
        <h2 className="text-sm font-medium uppercase tracking-widest text-brand">
          {category}
        </h2>
        <h1 className="font-mono text-4xl font-bold uppercase">{title}</h1>
        <div className="mt-3 flex items-center space-x-3">
          <div className="w-12">
            <span className="sr-only">{author?.name}</span>
            {coverImage && (
              <Image
                src={urlForImage(author?.picture)
                  .width(1080)
                  .height(1080)
                  .url()}
                alt={author?.picture?.alt ? author?.picture?.alt : ''}
                layout="responsive"
                width={1}
                height={1}
                objectFit="cover"
                objectPosition="center"
                className="rounded-full"
              />
            )}
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-medium text-slate-900">
                {author?.name}
              </p>
            </div>
            <div className="flex space-x-1 text-sm text-slate-500">
              <span>{publishedDate}</span>
              <span aria-hidden="true">&middot;</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-2xl text-slate-700">
          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  );
}
