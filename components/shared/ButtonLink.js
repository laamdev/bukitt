import Link from 'next/link';

export default function ButtonLink({ btnLinkText, btnURL, modClass }) {
  return (
    <button type="button" className={`tw-btn ${modClass}`}>
      <Link href={`/${btnURL}`}>
        <a>{btnLinkText}</a>
      </Link>
    </button>
  );
}
