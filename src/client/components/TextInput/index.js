import React from 'react';
import classNames from 'classnames';

const TextInput = ({
  id,
  className,
  name,
  value,
  type,
  maxLength,
  textAlign,
  label,
  iconSrc,
  placeholder,
}) => {
  const highlight = (event) => {
    event.target.setSelectionRange(0, event.target.value.length);
  };

  return (
    <input
      id={id}
      type={type}
      value={value}
      onFocus={highlight}
      maxLength={maxLength}
      placeholder={placeholder}
      className={classNames(
        'w-full text-xl h-12 bg-transparent text-xl px-3 pr-4',
        iconSrc ? 'pl-12 bg-left-icon bg-no-repeat' : 'pl-4',
        className
      )}
      style={{
        backgroundImage: iconSrc ? `url(${iconSrc})` : '',
      }}
    />
  );
};

TextInput.defaultProps = {
  type: 'text',
  className: '',
};

export default TextInput;
