import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function ButtonInternalLink({ btnLink, btnText }) {
  return (
    <Link href={btnLink} scroll={false}>
      <a>
        <button
          type="button"
          className="tw-btn flex space-x-3 border-brand text-brand hover:text-white"
        >
          <span>{btnText}</span>
          <HiOutlineArrowNarrowRight className="h-6 w-6" />
        </button>
      </a>
    </Link>
  );
}
