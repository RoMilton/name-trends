import React, { useContext } from 'react';
import Tab from 'client/components/Tab';
import Spinbox from 'client/components/Spinbox';
import TextInput from 'client/components/TextInput';
import { genders, yearRange } from 'src/helpers';
import RankingTable from 'client/components/RankingTable';
import { useRankings } from 'client/helpers';
import { namesContext, SET_GENDER, SET_YEAR } from 'client/context';
import searchIcon from './search.svg';

const Toolbar = () => {
  const { state, dispatch } = useContext(namesContext);
  console.log('state', state);
  const { gender, year, yearErrorMsg } = state;
  const { names, loading } = useRankings({ year, gender });
  const visibleNames = names.slice(0, 200);
  return (
    <>
      <div className="px-4 mb-8">
        <Spinbox
          id="year"
          label="Year:"
          min={yearRange[0]}
          max={yearRange[1]}
          value={year}
          setValue={(val) => {
            console.log('setValue()', val);
            dispatch({ type: SET_YEAR, year: val });
          }}
          maxLength={4}
          errorMsg={yearErrorMsg}
        />
      </div>
      <div className="flex">
        {genders.map((genderDetails) => (
          <Tab
            key={genderDetails.key}
            isActive={genderDetails.key === gender}
            onClick={() => {
              dispatch({ type: SET_GENDER, gender: genderDetails.key });
            }}
          >
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
        {!loading && <RankingTable names={visibleNames} />}
      </div>
    </>
  );
};

export default Toolbar;
