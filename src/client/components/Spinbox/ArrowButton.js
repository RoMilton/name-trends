import React from 'react';
import PropTypes from 'proptypes';
import SVG from 'react-inlinesvg';
import classNames from 'classnames';
import RightArrowButton from './RightArrowIcon.svg';

const ArrowButton = ({ direction }) => (
  <button
    type="button"
    className={classNames(
      'w-20 text-white text-xl bg-blue leading-3 text-5xl rounded-r-lg',
      direction === 'left' && 'transform rotate-180'
    )}
  >
    <SVG className="mx-auto w-7/12" src={RightArrowButton} />
  </button>
);

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default ArrowButton;
