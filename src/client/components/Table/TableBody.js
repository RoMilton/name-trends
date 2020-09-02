import React from 'react';
import TableContext from './TableContext';

const TableBody = ({ children }) => (
  <TableContext.Provider
    value={{
      variant: 'body',
    }}
  >
    <tbody>{children}</tbody>
  </TableContext.Provider>
);

export default TableBody;
