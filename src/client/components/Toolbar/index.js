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
  const { gender, year, yearErrorMsg } = state;
  const { names, loading } = useRankings({ year, gender });
  const visibleNames = names.slice(0, 200);
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 bg-white">
        <div className="px-4 mb-5">
          <Spinbox
            id="year"
            label="Year:"
            min={yearRange[0]}
            max={yearRange[1]}
            value={year}
            setValue={(val) => {
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
        <div className="px-4 pt-5 pb-4 bg-yellow">
          <TextInput placeholder="Find A Name" iconSrc={searchIcon} />
        </div>
      </div>
      <div className="bg-yellow">
        {loading && <div>Loading</div>}
        {!loading && <RankingTable names={visibleNames} />}
      </div>
    </div>
  );
};

export default Toolbar;
