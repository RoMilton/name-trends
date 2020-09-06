import React from 'react';
import classNames from 'classnames';

const TextInput = ({
  id,
  bold,
  bordered,
  centered,
  name,
  value,
  type,
  maxLength,
  textAlign,
  label,
  iconSrc,
  onChange,
  placeholder,
  rounded,
}) => {
  // const highlight = (event) => {
  //   event.target.setSelectionRange(0, event.target.value.length);
  // };

  return (
    <input
      id={id}
      type={type}
      value={value}
      // onFocus={highlight}
      maxLength={maxLength}
      placeholder={placeholder}
      className={classNames(
        'w-full',
        'text-xl',
        'px-3 py-3 pr-4',
        'placeholder-brown',
        'bg-white',
        'border-brown border-1 outline-none focus:border-black',
        iconSrc ? 'pl-icon bg-left-icon bg-no-repeat' : 'pl-4',
        bold && 'font-bold',
        centered && 'text-center',
        rounded && 'rounded-lg'
      )}
      style={{
        backgroundImage: iconSrc ? `url(${iconSrc})` : '',
      }}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
};

TextInput.defaultProps = {
  type: 'text',
  className: '',
  bold: false,
  rounded: true,
  centered: false,
};

export default TextInput;
