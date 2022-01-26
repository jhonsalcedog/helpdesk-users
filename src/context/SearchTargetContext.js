import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

export const SearchTargetContext = createContext();

const SearchTargetProvider = props => {
  const [usersSelect, setUsersSelect] = useState([]);
  const [userView, setUserView] = useState({});
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [pager, setPager] = useState({});

  useEffect(() => {
    if (query) {
      setLoading(true);

      const getUsers = async () => {
        const url = `https://reqres.in/api/unknown${query}`;

        try {
          const response = await axios.get(url);

          setUsersSelect(response.data.data);

          const { total } = response.data;

          setPager({
            total
          });

          setLoading(false);
        } catch (error) {
          setLoading(false);

          console.log(error);
        }
      };
      getUsers();
    }
  }, [query]);

  return (
    <SearchTargetContext.Provider
      value={{
        pager,
        loading,
        usersSelect,
        setUsersSelect,
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
