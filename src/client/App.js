import React, { useEffect, useState } from 'react';
import './app.css';
import queryString from 'query-string';

const endpoints = {
  list: 'http://localhost:8080/list/',
};

const App = () => {
  const [list, setList] = useState([]);
  const year = 1993;
  const gender = 'm';

  const query = queryString.stringify({
    year,
    gender,
  });

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch(`${endpoints.list}?${query}`);
      const data = await response.json();
      setList(data.names);
    };
    fetchNames();
  }, []);

  return (
    <div>
      {list.length < 1 ? (
        <h1>Loading.. please wait!</h1>
      ) : (
        <>
          <p>year: {year}</p>
          <p>gender: {gender}</p>
          <br />
          <div>
            {list.map((name) => (
              <p key={name[0]}>
                {name[1]}, {name[2]}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default App;
