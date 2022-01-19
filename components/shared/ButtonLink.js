import Link from 'next/link';

export default function ButtonLink({ btnLinkText, btnURL, modClass }) {
  return (
    <Link href={`/${btnURL}`}>
      <a>
        <button type="button" className={`tw-btn ${modClass}`}>
          {btnLinkText}
        </button>
      </a>
    </Link>
  );
}
