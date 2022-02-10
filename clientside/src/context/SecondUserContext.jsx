import React, { createContext , useState} from 'react'

export const SecondUser = createContext();

const SecondUserContext = ({children}) => {


    const [ secondUser , setSecondUser ] = useState();



    return (
        <SecondUser.Provider value={{secondUser , setSecondUser}}>
            {children}
        </SecondUser.Provider>
    )
}

export default SecondUserContext;

