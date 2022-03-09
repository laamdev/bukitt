import Link from 'next/link';
import { classNames } from '@/utils/helpers';

export default function BtnInquiry({ label, to }) {
  return (
    <Link href={`/${to}`} scroll={false}>
      <a>
        <button
          type="button"
          className={classNames(
            'inline-flex items-center rounded-full border border-transparent bg-brand-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
          )}
        >
          {label}
        </button>
      </a>
    </Link>
  );
}
