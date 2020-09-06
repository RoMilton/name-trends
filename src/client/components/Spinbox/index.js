import React from 'react';
import TextInput from 'client/components/TextInput';
import ArrowButton from './ArrowButton';

const Spinbox = ({ label, id, ...otherProps }) => {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-center block text-xl mb-2">
          {label}
        </label>
      )}
      <div className="flex">
        <ArrowButton direction="left" />
        <TextInput
          id={id}
          type="tel"
          rounded={false}
          bold
          centered
          {...otherProps}
        />
        <ArrowButton direction="right" />
      </div>
    </>
  );
};

export default Spinbox;
