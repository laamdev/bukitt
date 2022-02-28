import classNames from 'classnames';

export default function BtnNewsletter({
  disabled,
  children,
  primary,
  secondary,
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={classNames(
        primary &&
          'border-brand bg-transparent text-brand hover:bg-brand hover:text-white',
        secondary &&
          'border-white bg-transparent text-white hover:bg-brand hover:text-white',
        'tw-btn disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-brand'
      )}
    >
      {children}
    </button>
  );
}
