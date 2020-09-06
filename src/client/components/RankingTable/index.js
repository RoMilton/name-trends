import React, { memo } from 'react';
import { capitalizeFirstChar } from 'client/helpers';
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'client/components/Table';

const RankingTable = memo(({ names }) => {
  const visibleNames = names.slice(0, 200);
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Rank</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Count</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {visibleNames.map((name) => (
          <TableRow key={name[0]}>
            <TableCell>{name[1]}</TableCell>
            <TableCell>{capitalizeFirstChar(name[2])}</TableCell>
            <TableCell>{name[3]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
});

export default RankingTable;
