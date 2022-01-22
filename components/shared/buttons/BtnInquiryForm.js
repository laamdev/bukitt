export default function BtnNewsletter({ disabled, btnLinkText }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="tw-btn tw-btn-transparent-brand disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand disabled:cursor-not-allowed"
    >
      {btnLinkText}
    </button>
  );
}
