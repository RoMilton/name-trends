import React from 'react';
import TableContext from './TableContext';

const TableHead = ({ children }) => (
  <TableContext.Provider
    value={{
      variant: 'head',
    }}
  >
    <thead>{children}</thead>
  </TableContext.Provider>
);

export default TableHead;
