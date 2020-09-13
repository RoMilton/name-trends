import React from 'react';
import { inRange } from 'lodash';
import TextInput from 'client/components/TextInput';
import ArrowButton from './ArrowButton';

const isIncrementDisabled = (value, min, max) =>
  Number.parseInt(value, 10) >= max || !inRange(value, min, max + 1);

const isDecrementDisabled = (value, min, max) =>
  Number.parseInt(value, 10) <= min || !inRange(value, min, max + 1);

const Spinbox = ({
  label,
  id,
  value,
  setValue,
  errorMsg,
  max,
  min,
  ...otherProps
}) => {
  const onTextboxChange = (val) => {
    if (val === '') {
      setValue(val);
    } else if (!Number.isNaN(val)) {
      setValue(val);
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
          disabled={isDecrementDisabled(value, min, max)}
        />
        <TextInput
          id={id}
          type="tel"
          rounded={false}
          bold
          centered
          isError={!!errorMsg}
          value={value}
          onChange={onTextboxChange}
          {...otherProps}
        />
        <ArrowButton
          direction="right"
          onClick={() => onTextboxChange(value + 1)}
          disabled={isIncrementDisabled(value, min, max)}
        />
      </div>
      <div className="text-error-red text-center pt-2 text-lg font-bold">
        {errorMsg}
      </div>
    </>
  );
};

export default Spinbox;
