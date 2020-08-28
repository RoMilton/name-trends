import React from 'react';
import Tab from 'components/Tab';
import Spinbox from 'components/Spinbox';
import TextInput from 'components/TextInput';
import { genders, yearRange } from 'src/helpers';
import searchIcon from './search.svg';

const Toolbar = () => (
  <>
    <div className="w-64 mx-auto mb-8">
      <Spinbox
        label="Year:"
        min={yearRange[0]}
        max={yearRange[1]}
        value="2018"
        maxLength={4}
      />
    </div>
    <div className="flex">
      {genders.map((genderDetails, index) => (
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
    <div className="bg-yellow py-8 px-6">
      <TextInput placeholder="Find A Name" iconSrc={searchIcon} />
    </div>
  </>
);

export default Toolbar;
