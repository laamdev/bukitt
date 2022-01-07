import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <span className="sr-only">Bukitt</span>
        <div className="relative w-24">
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
  );
}
