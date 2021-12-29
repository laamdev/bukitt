import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="absolute left-0 flex-shrink-0 lg:static">
      <Link href="/">
        <a>
          <span className="sr-only">Bukitt</span>
          <div className="relative w-32">
            <Image
              src="/logos/bukitt-logo-rectangle.svg"
              alt="Bukitt"
              layout="responsive"
              width={16}
              height={9}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}
