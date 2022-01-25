import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="tw-slider-btn left-0"
    onClick={onClick}
    disabled={!enabled}
  >
    <BsChevronCompactLeft className="w-full h-full" />
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="tw-slider-btn right-0"
    onClick={onClick}
    disabled={!enabled}
  >
    <BsChevronCompactRight className="w-full h-full" />
  </button>
);
