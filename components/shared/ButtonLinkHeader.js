import Link from 'next/link';

export default function ButtonLinkHeader({ btnLinkText, btnURL, modClass }) {
  return (
    <button
      type="button"
      className={`tw-btn bg-brand hover:bg-white border-white hover:border-brand hover:text-brand ${
        modClass ? modClass : ''
      }`}
    >
      <Link href={`/${btnURL}`}>
        <a>{btnLinkText}</a>
      </Link>
    </button>
  );
}
