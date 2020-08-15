import React from 'react';
import TabList from 'components/TabList';
import Tab from 'components/TabList/Tab';
import { genders } from 'src/helpers';

const Toolbar = () => (
  <>
    <div>Number input</div>
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
  </>
);

export default Toolbar;
