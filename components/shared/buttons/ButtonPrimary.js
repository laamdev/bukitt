import Link from 'next/link';

export default function ButtonPrimary({ btnLinkText, btnURL }) {
  return (
    <Link href={`/${btnURL}`}>
      <a>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 tw-transition"
        >
          {btnLinkText}
        </button>
      </a>
    </Link>
  );
}
