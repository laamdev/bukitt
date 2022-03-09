import Link from 'next/link';

export default function ButtonLinkHeader({ btnLinkText, btnURL, modClass }) {
  return (
    <button
      type="button"
      className={`tw-btn border-white bg-brand hover:border-brand hover:bg-white hover:text-brand ${
        modClass ? modClass : ''
      }`}
    >
      <Link href={`/${btnURL}`} scroll={false}>
        <a>{btnLinkText}</a>
      </Link>
    </button>
  );
}
