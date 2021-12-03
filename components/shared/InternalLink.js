export default function InternalLink({ label, link }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-base uppercase font-bold rounded shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    >
      <a href={link}>{label}</a>
    </button>
  );
}
