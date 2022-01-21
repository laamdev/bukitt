import Link from 'next/link';

export default function BtnPrimary({ btnLinkText, btnURL }) {
  return (
    <Link href={`/${btnURL}`}>
      <a>
        <button
          type="button"
          className="inline-flex items-center px-6 py-3 border-2 border-brand text-base font-medium rounded-full shadow-sm text-brand uppercase tracking-widest bg-transparent hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand tw-transition"
        >
          {btnLinkText}
        </button>
      </a>
    </Link>
  );
}
