import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const Provider = ({ children }) => {
  const [name, setName] = useState([]);
  let value = {};

  value = {
    name,
    activateName: (n) => {
      if (name.length < 5) {
        setName([...name, n]);
      }
    },
    removeName: (n) => {
      const array = [...name];
      for (let i = 0; i < array.length; i += 1) {
        if (array[i] === n) {
          array.splice(i, 1);
        }
      }
      setName(array);
    },
  };
  return (
    <Context.Provider value={value}>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default {
  Provider,
  Consumer: Context.Consumer,
};
