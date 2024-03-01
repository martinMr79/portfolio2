import React, { createContext, useContext } from 'react';

const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export const NavigationProvider = ({ children, value }) => {
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

