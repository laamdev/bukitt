export default function BtnNewsletter({ disabled, children, className }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`tw-transition inline-flex items-center rounded-full border-2 border-brand bg-transparent px-2.5 py-1.5 text-xs font-medium uppercase tracking-widest text-brand shadow-sm hover:bg-brand-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 md:px-4 md:py-2 md:text-sm lg:px-6 lg:py-3 lg:text-base ${className}`}
    >
      {children}
    </button>
  );
}
