export default function InternalLink({ label, link }) {
  return (
    <a
      href={link}
      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium font-heading rounded-md shadow-sm text-white bg-teal-700 hover:bg-teal-600 sm:px-8 tw-transition"
    >
      {label}
    </a>
  );
}
