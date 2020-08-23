import React from 'react';
import classNames from 'classnames';

const TextInput = ({
  id,
  left,
  name,
  right,
  value,
  type,
  maxLength,
  textAlign,
  bordered,
  label,
}) => {
  const highlight = (event) => {
    event.target.setSelectionRange(0, event.target.value.length);
  };

  return (
    <>
      {label && (
        <label className="block text-lg mb-2" htmlFor={id}>
          {label}
        </label>
      )}
      <div
        className={classNames(
          'flex w-full h-12 text-center border-black rounded-lg',
          bordered && 'border-1'
        )}
      >
        {left}
        <input
          id={id}
          type="tel"
          value={value}
          onFocus={highlight}
          className={`w-full text-xlfont-bold bg-transparent px-3 text-${textAlign}`}
          maxLength={maxLength}
        />
        {right}
      </div>
    </>
  );
};

TextInput.defaultProps = {
  type: 'text',
  textAlign: 'left',
  bordered: false,
};

export default TextInput;
