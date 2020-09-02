import React, { useContext } from 'react';
import classNames from 'classnames';
import TableContext from './TableContext';

const TableCell = ({ children }) => {
  const { variant } = useContext(TableContext);
  const isHead = variant === 'head';
  const Component = isHead ? 'th' : 'td';
  return (
    <Component
      className={classNames(
        'text-black text-lg text-left',
        'border-brown border-b-1',
        'px-4',
        isHead ? 'font-bold h-16' : 'h-12',
        'last:text-right'
      )}
    >
      {children}
    </Component>
  );
};

export default TableCell;
