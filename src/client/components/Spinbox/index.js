import React from 'react';
import TextInput from 'components/TextInput';
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
        <div className="border-black border-1 border-l-0 border-r-0">
          <TextInput
            id={id}
            type="tel"
            bordered
            className="font-bold text-center"
            {...otherProps}
          />
        </div>
        <ArrowButton direction="right" />
      </div>
    </>
  );
};

export default Spinbox;
