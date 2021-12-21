import TextBody from '@/components/shared/TextBody';
import ButtonLink from '@/components/shared/buttons/ButtonLink';

export default function AboutSection({ heading, body, callToAction }) {
  return (
    <section className="max-w-4xl flex-col space-y-6 mx-auto text-center">
      <div>
        <h3 className="tw-subheading">{heading}</h3>
      </div>

      <div className="space-y-6">
        <TextBody content={body} />
      </div>

      <div>
        <ButtonLink
          btnLinkText={callToAction?.linkText}
          btnURL={callToAction?.url ? callToAction?.url : '#'}
        />
      </div>
    </section>
  );
}
