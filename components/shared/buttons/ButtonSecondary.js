export default function ButtonPrimary({ btnLinkText, btnURL }) {
  return (
    <button
      type="button"
      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-brand-700 uppercase tracking-widest bg-brand-100 hover:bg-brand-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 tw-transition"
    >
      <a href={`${btnURL}?dl=`}>{btnLinkText}</a>
    </button>
  );
}
