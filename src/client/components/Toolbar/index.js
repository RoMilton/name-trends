import React from 'react';
import Tab from 'components/Tab';
import Spinbox from 'components/Spinbox';
import TextInput from 'components/TextInput';
import { genders, yearRange } from 'src/helpers';
import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from 'components/Table';
import searchIcon from './search.svg';

// temp
const names = [['rohan-m', 0, 'rohan', 3003]];

const Toolbar = () => (
  <>
    <div className="px-4 mb-8">
      <Spinbox
        label="Year:"
        min={yearRange[0]}
        max={yearRange[1]}
        value="2018"
        maxLength={4}
      />
    </div>
    <div className="flex">
      {genders.map((genderDetails) => (
        <Tab key={genderDetails.key} isActive={genderDetails.key === 'f'}>
          <img
            title={genderDetails.label}
            alt={genderDetails.label}
            src={genderDetails.icon}
            className="mr-5"
          />
          <span className={`text-${genderDetails.color}`}>
            {genderDetails.label}
          </span>
        </Tab>
      ))}
    </div>
    <div className="bg-yellow py-8">
      <div className="mb-8 px-4">
        <TextInput placeholder="Find A Name" iconSrc={searchIcon} />
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {names.map((name) => (
            <TableRow key={name[0]}>
              <TableCell>{name[1]}</TableCell>
              <TableCell>{name[2]}</TableCell>
              <TableCell>{name[3]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </>
);

export default Toolbar;
