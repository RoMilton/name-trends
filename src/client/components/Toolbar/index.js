import React from 'react';
import Tab from 'client/components/Tab';
import Spinbox from 'client/components/Spinbox';
import TextInput from 'client/components/TextInput';
import { genders, yearRange } from 'src/helpers';
import RankingTable from 'client/components/RankingTable';
import { useRankings } from 'client/helpers';
import searchIcon from './search.svg';

const Toolbar = () => {
  const { names, loading } = useRankings();
  return (
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
            <span className={genderDetails.textClass}>
              {genderDetails.label}
            </span>
          </Tab>
        ))}
      </div>
      <div className="bg-yellow py-8">
        <div className="mb-2 px-4">
          <TextInput placeholder="Find A Name" iconSrc={searchIcon} />
        </div>
        {loading && <div>Loading</div>}
        {!loading && <RankingTable names={names} />}
      </div>
    </>
  );
};

export default Toolbar;
