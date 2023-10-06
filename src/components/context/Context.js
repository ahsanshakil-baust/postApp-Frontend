import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const DataContext = React.createContext();

export const useAuth = () => {
    return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get("/user", {
                    headers: {
                        "Content-type": "application/json",
                    },
                });

                setUserDetails(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getUser();
    }, []);

    return (
        <DataContext.Provider
            value={{
                userDetails,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
