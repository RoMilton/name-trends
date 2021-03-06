import React from 'react';
import classNames from 'classnames';

const TextInput = ({
  id,
  bold,
  bordered,
  centered,
  name,
  value,
  isError,
  type,
  maxLength,
  textAlign,
  label,
  iconSrc,
  onChange,
  placeholder,
  rounded,
}) => (
  <input
    id={id}
    type={type}
    value={value}
    maxLength={maxLength}
    placeholder={placeholder}
    className={classNames(
      'block w-full',
      'text-xl',
      'px-3 py-3 pr-4',
      'placeholder-brown',
      'bg-transparent',
      'border-1 outline-none',
      isError
        ? 'border-error-red focus:border-error-red'
        : 'border-brown focus:border-black',
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

TextInput.defaultProps = {
  type: 'text',
  className: '',
  bold: false,
  rounded: true,
  centered: false,
  isError: false,
};

export default TextInput;
