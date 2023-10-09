import axios from "axios";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";

const DataContext = React.createContext();

export const useAuth = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});
    const [postDetails, sendPostDetails] = useState({});

    useEffect(() => {
        const user = Cookies.get("user");

        if (!user) return;

        const parsedObj = JSON.parse(user);
        setUserDetails(parsedObj);
    }, []);

    return (
        <DataContext.Provider
            value={{
                userDetails,
                postDetails,
                sendPostDetails,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
