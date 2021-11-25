import { navLinks } from '@/data/navigation';

export default function MobileMenu() {
  return (
    <div className="py-6 px-5">
      <div className="grid grid-cols-2 gap-4">
        {navLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-base font-medium text-gray-900 hover:text-gray-700"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="mt-6">
        <a
          href="#"
          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Sign up
        </a>
        <p className="mt-6 text-center text-base font-medium text-gray-500">
          Existing customer?
          <a href="#" className="text-gray-900">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
