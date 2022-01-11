import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

export default function ButtonTo({ btnLink, btnText }) {
  return (
    <div>
      <Link href={btnLink}>
        <a>
          <button
            type="button"
            className="tw-btn border-brand text-brand hover:text-white flex space-x-3"
          >
            <span>{btnText}</span>
            <HiOutlineArrowNarrowRight className="w-6 h-6" />
          </button>
        </a>
      </Link>
    </div>
  );
}
