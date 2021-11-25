import { BellIcon } from '@heroicons/react/outline';

export default function Notification() {
  return (
    <div className="hidden lg:block lg:ml-4">
      <div className="flex items-center">
        <button
          type="button"
          className="bg-red-600 flex-shrink-0 rounded-full p-1 text-red-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* <ProfileDropdown/> */}
      </div>
    </div>
  );
}
