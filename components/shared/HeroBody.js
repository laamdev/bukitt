import TextBody from '@/components/shared/TextBody';

export default function HeroBody({ content }) {
  return (
    <div className="text-lg sm:text-2xl">
      <TextBody content={content} />
    </div>
  );
}
