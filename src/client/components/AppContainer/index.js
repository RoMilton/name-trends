import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import Layout from 'components/Layout';

const endpoints = {
  list: 'http://localhost:8080/list/',
};

const App = () => {
  const [list, setList] = useState([]);
  const year = 2018;
  const gender = 'f';
  const queryParams = queryString.stringify({
    year,
    gender,
  });

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch(`${endpoints.list}?${queryParams}`);
      const data = await response.json();
      setList(data.names);
    };
    fetchNames();
  }, []);

  return <Layout list={list} year={year} gender={gender} />;
};

export default App;
