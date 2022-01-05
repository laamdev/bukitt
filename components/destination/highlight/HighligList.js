import Card from '@/components/shared/HighlightCard';

export default function List({ highlights }) {
  console.log(highlights);

  return (
    <ul
      role="list"
      className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 tw-grid-gap"
    >
      {highlights.map((highlight) => (
        <Card key={highlight.title} highlight={highlight} />
      ))}{' '}
    </ul>
  );
}
