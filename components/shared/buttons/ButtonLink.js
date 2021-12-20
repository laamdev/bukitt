import Link from 'next/link';

export default function ButtonLink({ btnLinkText, btnURL }) {
  return (
    <button type="button" className="tw-btn">
      <Link href={`/${btnURL}`}>
        <a>{btnLinkText}</a>
      </Link>
    </button>
  );
}
