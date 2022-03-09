import Link from 'next/link';
import { classNames } from '@/utils/helpers';

export default function BtnNav({ btnLinkText, btnURL, primary, secondary }) {
  return (
    <Link href={`/${btnURL}`} scroll={false} passHref>
      <a
        className={classNames(
          primary &&
            'border-brand bg-transparent text-brand hover:bg-brand hover:text-white',
          secondary &&
            'border-white bg-transparent text-white hover:bg-brand hover:text-white',
          'tw-btn'
        )}
      >
        {btnLinkText}
      </a>
    </Link>
  );
}
