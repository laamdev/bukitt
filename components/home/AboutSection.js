import TextBody from '@/components/shared/TextBody';
import ButtonLink from '@/components/shared/ButtonLink';

export default function AboutSection({ heading, body, callToAction }) {
  return (
    <section className="max-w-xl flex-col space-y-6 mx-auto text-center">
      <div>
        <h3 className="tw-subheading">{heading}</h3>
      </div>

      <div className="space-y-6">
        <TextBody content={body} />
      </div>

      <div>
        <ButtonLink
          linkText={callToAction?.linkText}
          url={callToAction?.url ? callToAction?.url : '#'}
        />
      </div>
    </section>
  );
}
