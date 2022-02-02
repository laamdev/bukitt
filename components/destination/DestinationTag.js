export default function DestinationTag({ label }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800"
    >
      {label}
    </button>
  );
}
