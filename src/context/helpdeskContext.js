import React, { createContext, useState } from 'react';

export const HelpdeskContext = createContext();

const HelpdeskProvider = props => {
  const [state, setState] = useState('test');

  return (
    <HelpdeskContext.Provider value={{ state }}>
      {props.children}
    </HelpdeskContext.Provider>
  );
};

export default HelpdeskProvider;
