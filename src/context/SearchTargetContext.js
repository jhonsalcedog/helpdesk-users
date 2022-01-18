import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export const SearchTargetContext = createContext();

const SearchTargetProvider = props => {
  const [usersSelect, setUsersSelect] = useState([]);
  const [userView, setUserView] = useState({});
  const [query, setQuery] = useState(false);

  useEffect(() => {
    if (query) {
      const getUsers = async () => {
        const url = 'https://reqres.in/api/unknown?page=1';
        try {
          const response = await axios.get(url);

          setUsersSelect(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
      getUsers();
    }
  }, [query]);

  return (
    <SearchTargetContext.Provider
      value={{
        usersSelect,
        userView,
        setUserView,
        query,
        setQuery
      }}
    >
      {props.children}
    </SearchTargetContext.Provider>
  );
};

SearchTargetProvider.propTypes = {
  children: PropTypes.any
};

export default SearchTargetProvider;
