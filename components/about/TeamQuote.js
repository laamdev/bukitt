import TextBody from '@/components/shared/TextBody';

export default function TeamQuote({ quoteSection }) {
  return (
    <section className="max-w-3xl mx-auto space-y-3 sm:space-y-6">
      <h2 className="tw-subheading text-center">{quoteSection?.heading}</h2>
      <TextBody content={quoteSection?.body} />
      <div className="flex flex-col">
        <span className="font-bold text-sm sm:text-base uppercase">
          {quoteSection?.authorName}
        </span>
        <span className="text-xs sm:text-sm">{quoteSection?.authorDetail}</span>
      </div>
    </section>
  );
}
