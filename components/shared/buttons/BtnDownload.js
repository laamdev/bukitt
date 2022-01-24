import { classNames } from '@/utils/helpers';

export default function BtnDownload({
  btnLinkText,
  btnURL,
  primary,
  secondary,
}) {
  return (
    <a
      href={`${btnURL}?dl=`}
      className={classNames(
        primary &&
          'border-brand text-brand bg-transparent hover:bg-brand hover:text-white',
        secondary &&
          'border-white text-white bg-transparent hover:bg-brand hover:text-white',
        'tw-btn'
      )}
    >
      {btnLinkText}
    </a>
  );
}
