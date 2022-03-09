import Link from 'next/link';

export default function CustomLink({ label, link }) {
  return (
    <div className="flex justify-center">
      <Link href={link} scroll={false}>
        <a>
          <button
            type="button"
            className="tw-transition inline-flex items-center rounded-md border border-transparent bg-brand px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-brand focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            {label}
          </button>
        </a>
      </Link>
    </div>
  );
}
