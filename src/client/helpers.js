import useSWR from 'swr';
import queryString from 'query-string';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const useRankings = () => {
  const queryParams = queryString.stringify({
    year: 2018,
    gender: 'm',
  });
  const { data } = useSWR(
    `http://localhost:8080/list/?${queryParams}`,
    fetcher
  );
  if (!data) return { loading: true };
  return { names: data.names, loading: false };
};

export const capitalizeFirstChar = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
