import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import classNames from 'classnames';
import RightArrowButton from './RightArrowIcon.svg';

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={classNames(
      'w-20 text-white text-xl bg-blue leading-3 text-5xl rounded-r-lg',
      direction === 'left' && 'transform rotate-180'
    )}
  >
    <SVG
      className={classNames('mx-auto w-7/12', disabled && 'opacity-25')}
      src={RightArrowButton}
    />
  </button>
);

ArrowButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ArrowButton;
