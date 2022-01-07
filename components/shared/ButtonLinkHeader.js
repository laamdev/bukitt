import Link from 'next/link';

export default function ButtonLinkHeader({ btnLinkText, btnURL }) {
  return (
    <button
      type="button"
      className="tw-btn bg-paradiso hover:bg-white border-white hover:border-paradiso hover:text-paradiso"
    >
      <Link href={`/${btnURL}`}>
        <a>{btnLinkText}</a>
      </Link>
    </button>
  );
}
