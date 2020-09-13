import useSWR from 'swr';
import { inRange } from 'lodash';
import queryString from 'query-string';
import { yearRange } from 'src/helpers';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const isValidYear = (year) =>
  inRange(year, yearRange[0], yearRange[1] + 1);

export const useRankings = ({ year, gender }) => {
  const queryParams = queryString.stringify({
    year,
    gender,
  });
  const key = isValidYear(year)
    ? `http://localhost:8080/list/?${queryParams}`
    : null;
  const { data } = useSWR(key, fetcher);
  if (!data) return { names: [], loading: true };
  return { names: data.names, loading: false };
};

export const capitalizeFirstChar = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
