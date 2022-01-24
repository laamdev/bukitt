import * as fbq from '@/lib/fpixel';

export default function BtnInquiryForm({ disabled, btnLinkText }) {
  const handleClick = () => {
    fbq.event('trackCustom', 'Inquire');
  };
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={handleClick}
      className="tw-btn tw-btn-transparent-brand disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand disabled:cursor-not-allowed"
    >
      {btnLinkText}
    </button>
  );
}
