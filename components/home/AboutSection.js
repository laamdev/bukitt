import TextBody from '@/components/shared/TextBody';
import InternalLink from '@/components/shared/InternalLink';

export default function AboutSection({ heading, body, cta }) {
  return (
    <section className="max-w-lg flex-col space-y-12 text-center mx-auto">
      <div>
        <h3 className="tw-subheading">{heading}</h3>
      </div>

      <div>
        <TextBody content={body} />
      </div>

      <InternalLink label={cta?.label} link={cta?.link} />
    </section>
  );
}
