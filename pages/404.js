import Link from 'next/link';

export default function ErrorPage() {
  return (
    <>
      <div className="min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-brand-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again!
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <button
                  type="button"
                  className="tw-btn bg-brand-600 hover:bg-brand-700"
                >
                  <Link href="/">
                    <a>Go back home</a>
                  </Link>
                </button>

                <button className="tw-btn bg-brand-100 hover:bg-brand-200 border-0 text-brand-700">
                  <a
                    href="mailto:hello@bukitt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact support
                  </a>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
