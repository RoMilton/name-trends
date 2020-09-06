import React from 'react';
import TextInput from 'client/components/TextInput';
import ArrowButton from './ArrowButton';

const Spinbox = ({ label, id, value, setValue, ...otherProps }) => {
  const onTextboxChange = (val) => {
    if (val === '') {
      setValue(val);
    } else if (!isNaN(val)) {
      setValue(parseInt(val, 10));
    }
  };
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-center block text-xl mb-2">
          {label}
        </label>
      )}
      <div className="flex">
        <ArrowButton
          direction="left"
          onClick={() => onTextboxChange(value - 1)}
        />
        <TextInput
          id={id}
          type="tel"
          rounded={false}
          bold
          centered
          value={value}
          onChange={onTextboxChange}
          {...otherProps}
        />
        <ArrowButton
          direction="right"
          onClick={() => onTextboxChange(value + 1)}
        />
      </div>
    </>
  );
};

export default Spinbox;
