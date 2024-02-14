import React from 'react';

export const UserContext = React.createContext();

export const UserContextProvider = ({Children}) =>{
    return (
    <UserContext.Provider value={"sumedha"}>
        {Children}
    </UserContext.Provider>
)
}
