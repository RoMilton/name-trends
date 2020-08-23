import React from 'react';
import TextInput from 'components/TextInput';
import ArrowButton from './ArrowButton';

const Spinbox = ({ ...props }) => {
  return (
    <TextInput
      type="tel"
      bordered
      textAlign="center"
      left={<ArrowButton direction="left" />}
      right={<ArrowButton direction="right" />}
      {...props}
    />
  );
};

export default Spinbox;
