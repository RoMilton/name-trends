import React from 'react';
import TableCell from './TableCell';
import TableRow from './TableRow';
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = ({ children }) => <table className="w-full">{children}</table>;

export default Table;

export { TableCell, TableRow, TableHead, TableBody };
