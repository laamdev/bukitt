import Link from 'next/link';

export default function BtnPrimary({ btnLinkText, btnURL }) {
  return (
    <Link href={`/${btnURL}`}>
      <a>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-full shadow-sm text-white uppercase tracking-widest bg-transparent hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 tw-transition"
        >
          {btnLinkText}
        </button>
      </a>
    </Link>
  );
}
