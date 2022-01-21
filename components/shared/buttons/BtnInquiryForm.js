export default function BtnNewsletter({ disabled, btnLinkText }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="inline-flex items-center px-6 py-3 border-2 border-brand text-base font-medium rounded-full shadow-sm text-brand uppercase tracking-widest bg-transparent hover:bg-brand hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand tw-transition disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand disabled:cursor-not-allowed"
    >
      {btnLinkText}
    </button>
  );
}
