export default function TeamQuote({ quoteSection }) {
  return (
    <section className="max-w-3xl mx-auto space-y-3 sm:space-y-6">
      <h2 className="tw-subheading text-center">{quoteSection?.heading}</h2>
      <p className="tw-body">&ldquo;{quoteSection?.body}&ldquo;</p>
      <div className="flex flex-col">
        <span className="tw-label">{quoteSection?.authorName}</span>
        <span className="tw-sublabel">{quoteSection?.authorDetail}</span>
      </div>
    </section>
  );
}
