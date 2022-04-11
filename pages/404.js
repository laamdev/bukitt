import Layout from '@/components/navigation/Layout';
import ButtonInternalLink from '@/components/shared/ButtonInternalLink';

export default function Custom404() {
  return (
    <Layout metaTitle="404" metaDescription="Page Not Found">
      <div className="tw-full-page-mobile lg:tw-full-page-desktop m-auto flex max-w-xl flex-col items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-medium">Page not found</h2>
          <h1 className="font-mono text-9xl font-bold ">404</h1>
          <p className="mt-3">
            It appears the page you&apos;re looking for does not exist! Please
            click the link below to return to the homepage.
          </p>
        </div>

        <div className="mt-6">
          <ButtonInternalLink btnLink="/" btnText="Home" className="" />
        </div>
      </div>
    </Layout>
  );
}
