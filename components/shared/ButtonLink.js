import Link from 'next/link';

export default function ButtonLink({ label, link }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-base uppercase font-bold rounded shadow-sm text-white tw-bg-hover tw-transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    >
      <Link href={`/${link}`}>
        <a>{label}</a>
      </Link>
    </button>
  );
}
