import Link from 'next/link';
import { classNames } from '@/utils/helpers';

export default function BtnNav({ btnLinkText, btnURL, primary, secondary }) {
  return (
    <Link href={`/${btnURL}`}>
      <a>
        <button
          type="button"
          className={classNames(
            primary &&
              'border-brand text-brand bg-transparent hover:bg-brand hover:text-white',
            secondary &&
              'border-white text-white bg-transparent hover:bg-brand hover:text-white',
            'tw-btn'
          )}
        >
          {btnLinkText}
        </button>
      </a>
    </Link>
  );
}
