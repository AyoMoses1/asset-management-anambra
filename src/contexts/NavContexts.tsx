/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState } from "react";

// Define the context type
type NavigationContextType = {
  secondaryLinks: SecondaryBarType[];
  updateNavigation: (secondaryLinks: SecondaryBarType[]) => void;
  clearNavigation: () => void;
};

// Create the context
const NavigationContext = createContext(
  undefined as unknown as NavigationContextType
);

// Create a provider component
export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [secondaryLinks, setSecondaryLinks] = useState(
    null as unknown as SecondaryBarType[]
  );

  // Update navigation with new secondary links
  const updateNavigation = (newLinks: SecondaryBarType[]) => {
    setSecondaryLinks(newLinks);
  };

  // Clear secondary links
  const clearNavigation = () => {
    setSecondaryLinks([]);
  };

  // Create the context value
  const contextValue: NavigationContextType = {
    secondaryLinks,
    updateNavigation,
    clearNavigation,
  };

  // Provide the context value to the children
  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};

// Create a custom hook to use the context
export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
