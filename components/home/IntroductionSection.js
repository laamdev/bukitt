import TextBody from '@/components/shared/TextBody';

export default function IntroductionSection({ heading, body }) {
  return (
    <section className="flex flex-col-reverse space-y-12 space-y-reverse sm:flex-row sm:space-y-0 sm:space-x-24 items-center text-center sm:text-left">
      <div className="w-full sm:w-1/2 space-y-3">
        <h3 className="tw-subheading">{heading}</h3>
      </div>

      <div className="w-full sm:w-1/2 space-y-3">
        <div>
          <TextBody content={body} />
        </div>
      </div>
    </section>
  );
}
