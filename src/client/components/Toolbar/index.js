import React from 'react';
import TabList from 'components/TabList';
import Tab from 'components/TabList/Tab';
import Spinbox from 'components/Spinbox';
import TextInput from 'components/TextInput';
import { genders, yearRange } from 'src/helpers';

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
    <TabList>
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
    </TabList>
    <div className="bg-yellow py-16 px-6">
      <TextInput placeholder="Find A Name" />
    </div>
  </>
);

export default Toolbar;
