"use client";

import { createContext, useEffect, useState } from "react";

// Create context
export const StoreContext = createContext();

export const StoreProvider = (props) => {
  // Use state for darkMode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Add the `dark` class
    } else {
      document.documentElement.classList.remove("dark"); // Remove the `dark` class
    }
  }, [darkMode]);

  // Context API value
  const value = {
    darkMode,
    setDarkMode,
  };

  // Store provider
  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
