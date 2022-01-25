import * as fbq from '@/lib/fpixel';
import { classNames } from '@/utils/helpers';

export default function BtnInquiryForm({
  disabled,
  btnLinkText,
  primary,
  secondary,
}) {
  const handleClick = () => {
    fbq.event('trackCustom', 'Inquire');
  };
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={handleClick}
      className={classNames(
        primary &&
          'border-brand text-brand bg-transparent hover:bg-brand hover:text-white',
        secondary &&
          'border-white text-white bg-transparent hover:bg-brand hover:text-white',
        'tw-btn disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand disabled:cursor-not-allowed'
      )}
    >
      {btnLinkText}
    </button>
  );
}
