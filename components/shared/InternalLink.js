export default function InternalLink({ label, link }) {
  return (
    <a
      href={link}
      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium font-heading rounded-md shadow-sm text-white tw-hover sm:px-8 tw-transition cursor-pointer"
    >
      {label}
    </a>
  );
}
