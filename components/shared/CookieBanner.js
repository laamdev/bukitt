import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactGA from 'react-ga';
import Cookies from 'js-cookie';
import { motion } from 'framer-motion';
import { BiCookie } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

import { pageVariants } from '@/utils/framer';

const CookieBanner = () => {
  const p = 'b-cookies';
  const necessaryCookiesName = 'bukitt-cookies__necessary-cookies';
  const analyticsCookiesName = 'bukitt-cookies__analytics-cookies';
  const [isVisibleAdvice, setIsVisibleAdvice] = useState(false);
  const [isAcceptAnalyticsCookies, setIsAcceptAnalyticsCookies] =
    useState(false);
  const router = useRouter();

  // // const arrayClasses = [{ [`${p}`]: p }, { [`is-active`]: isVisibleAdvice }];

  // // let classes = classNames(arrayClasses);
  // // classes = classes.split(' ').join(' | ');

  const handleDeclineAll = () => {
    Cookies.set(necessaryCookiesName, 'disallow');
    setIsVisibleAdvice(false);
  };

  const handleAcceptAll = () => {
    Cookies.set(necessaryCookiesName, 'accept', { expires: 30 });
    Cookies.set(analyticsCookiesName, 'accept', { expires: 30 });
    setIsVisibleAdvice(false);
    setIsAcceptAnalyticsCookies(true);
  };

  useEffect(() => {
    const necessaryCookies = Cookies.get(necessaryCookiesName);
    const analyticsCookiesName = Cookies.get(analyticsCookiesName);

    if (necessaryCookies) {
      setIsVisibleAdvice(false);
    } else {
      setIsVisibleAdvice(true);
    }

    if (analyticsCookiesName) {
      setIsAcceptAnalyticsCookies(true);
    } else {
      setIsAcceptAnalyticsCookies(false);
    }
  }, []);

  useEffect(() => {
    if (isAcceptAnalyticsCookies && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
      ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
      ReactGA.pageview(window.location.pathname + window.location.search);

      const handleRouteChange = (url) => {
        ReactGA.pageview(url);
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [isAcceptAnalyticsCookies]);

  return (
    <>
      {isVisibleAdvice && (
        <motion.div
          className={`fixed inset-x-0 bottom-0`}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={pageVariants}
          transition={{ type: 'easeInOut' }}
        >
          <div className="bg-brand-600">
            <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between">
                <div className="flex w-0 flex-1 items-center">
                  <span className="flex rounded-lg bg-brand-800 p-2">
                    <BiCookie
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                  <p className="ml-3 text-white">
                    <span className="inline max-w-xs">
                      We use cookies to give you the best online experience. By
                      agreeing you accept the use of cookies in accordance with
                      our
                      <Link href="/policies/cookie-policy">
                        <a className="tw-transition underline hover:text-brand-100">
                          {' '}
                          cookie policy.
                        </a>
                      </Link>
                    </span>
                  </p>
                </div>
                <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                  <a
                    href="#"
                    onClick={handleAcceptAll}
                    className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-brand-600 shadow-sm hover:bg-brand-50"
                  >
                    I Agree
                  </a>
                </div>
                <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                  <button
                    type="button"
                    onClick={handleDeclineAll}
                    className="-mr-1 flex rounded-md p-2 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                  >
                    <span className="sr-only">Dismiss</span>
                    <IoCloseOutline
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CookieBanner;
