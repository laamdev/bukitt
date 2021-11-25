import { navLinks } from '@/data/navigation';
import { classNames } from '@/utils/helpers';

export default function NavLinks() {
  return (
    <div className="px-2 flex items-center bg-dark lg:px-0">
      <div className="hidden lg:block">
        <div className="flex space-x-4">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-red-700 text-white'
                  : 'text-white hover:bg-red-500 hover:bg-opacity-75',
                'rounded-md py-2 px-3 text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
