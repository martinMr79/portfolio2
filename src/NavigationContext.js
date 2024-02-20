import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export function useNavigation() {
  return useContext(NavigationContext);
}

export const NavigationProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('/');

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};
