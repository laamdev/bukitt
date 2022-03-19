import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoSendOutline } from 'react-icons/io5';

import * as fbq from '@/lib/fpixel';

export default function BtnInquiryForm({ children, isSubmitting, disabled }) {
  const handleClick = () => {
    fbq.event('trackCustom', 'Inquire');
  };
  return (
    <div>
      <button
        type="submit"
        disabled={disabled}
        onClick={handleClick}
        className={`tw-btn gap-x-3 border-brand text-brand hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand`}
      >
        <span>{children}</span>
        {isSubmitting ? (
          <AiOutlineLoading3Quarters className="h-6 w-6 animate-spin" />
        ) : (
          <IoSendOutline className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
