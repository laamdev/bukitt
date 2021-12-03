import TextBody from '@/components/shared/TextBody';

export default function IntroductionSection({ heading, body }) {
  return (
    <section className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:space-x-24 items-center text-left">
      <div className="w-full sm:w-1/2">
        <h3 className="tw-heading">{heading}</h3>
      </div>

      <div className="w-full sm:w-1/2">
        <TextBody content={body} />
      </div>
    </section>
  );
}
