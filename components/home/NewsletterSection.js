import SectionHeading from '@/components/shared/SectionHeading';
import Newsletter from '@/components/home/Newsletter';

export default function NewsletterSection({ heading, body }) {
  return (
    <section className="tw-section bg-slate-100" id="newsletter">
      <SectionHeading className="text-center">{heading}</SectionHeading>
      <p className="text-center text-lg lg:text-2xl">{body}</p>

      <Newsletter />
    </section>
  );
}
