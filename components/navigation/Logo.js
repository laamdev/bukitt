import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="absolute left-0 flex-shrink-0 lg:static">
      <Link href="/">
        <a>
          <span className="sr-only">Bukitt</span>
          <div className="relative">
            <Image
              alt="Bukitt"
              src="/logos/wordmark-dark.svg"
              layout="intrinsic"
              width={50}
              height={50}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
