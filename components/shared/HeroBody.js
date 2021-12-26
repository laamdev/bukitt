import TextBody from '@/components/shared/TextBody';

export default function HeroBody({ content }) {
  return (
    <div className="max-w-prose mx-auto text-lg sm:text-xl">
      <TextBody content={content} />
    </div>
  );
}
