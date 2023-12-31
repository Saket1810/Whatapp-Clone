import { createContext, useState } from 'react';

export const UserContext = createContext({a:"c",b:"d"});

const UserProvider = ({children}) => {

    const [ person, setPerson ] = useState({});
    
    return (
        <UserContext.Provider value={{ person, setPerson }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;