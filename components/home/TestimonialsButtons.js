import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <HiChevronLeft className="embla__button__svg" />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <HiChevronRight className="embla__button__svg" />
  </button>
);
