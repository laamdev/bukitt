import TextBody from '@/components/shared/TextBody';
import ButtonLink from '@/components/shared/ButtonLink';

export default function StepsSection({ heading, body, callToAction }) {
  return (
    <section className="max-w-2xl flex-col space-y-6 mx-auto text-center">
      <div>
        <h3 className="tw-subheading">{heading}</h3>
      </div>

      <div className="leading-tight">
        <TextBody content={body} />
      </div>

      <div>
        <ButtonLink label={callToAction?.label} link={callToAction?.link} />
      </div>
    </section>
  );
}
