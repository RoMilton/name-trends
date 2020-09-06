import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const SET_GENDER = 'SET_GENDER';
export const SET_YEAR = 'SET_YEAR';
export const SET_SEARCH = 'SET_SEARCH';

const initialState = {
  gender: 'f',
  year: '2018',
  search: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_GENDER:
      return { ...state, gender: action.gender };
    case SET_YEAR:
      return { ...state, year: action.year };
    case SET_SEARCH:
      return { ...state, search: action.search };
    default:
      throw new Error('Unexpected action');
  }
};

export const namesContext = createContext();

const { Provider } = namesContext;

export const NamesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

NamesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
