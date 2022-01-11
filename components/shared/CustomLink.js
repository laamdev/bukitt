import Link from 'next/link';

export default function CustomLink({ label, link }) {
  return (
    <div className="flex justify-center">
      <Link href={link}>
        <a>
          <button
            type="button"
            className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-bold rounded-md shadow-sm text-white bg-brand hover:bg-brand tw-transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand"
          >
            {label}
          </button>
        </a>
      </Link>
    </div>
  );
}
