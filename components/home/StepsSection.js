import TextBody from '@/components/shared/TextBody';
import InternalLink from '@/components/shared/InternalLink';

export default function StepsSection({ heading, body, cta }) {
  return (
    <section className="max-w-2xl flex-col space-y-6 mx-auto text-center">
      <div>
        <h3 className="tw-subheading">{heading}</h3>
      </div>

      <div className="leading-tight">
        <TextBody content={body} />
      </div>

      <div>
        <InternalLink label={cta?.label} link={cta?.link} />
      </div>
    </section>
  );
}
