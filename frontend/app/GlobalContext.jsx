'use client';

import React, { createContext, useContext, useState } from 'react';

// Define the initial structure and default values for your global state
const initialGlobalState = {
    dimensionalModulesLoaded: false,
};

// Create a new context
export const GlobalContext = createContext();

// Create a context provider component
export const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState(initialGlobalState);

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
    );
};
