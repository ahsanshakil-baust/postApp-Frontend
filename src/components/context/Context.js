import React, { useContext } from "react";

const DataContext = React.createContext();

export const useAuth = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    return <DataContext.Provider>{children}</DataContext.Provider>;
};
