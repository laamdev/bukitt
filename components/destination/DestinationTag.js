export default function DestinationTag({ label }) {
  return (
    <button
      type="button"
      className="inline-flex items-center rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-800"
    >
      {label}
    </button>
  );
}
