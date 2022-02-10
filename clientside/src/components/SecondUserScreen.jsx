import React, {useContext} from 'react'
import UsersChatting from './UsersChatting'
import MessageSection from './MessageSection'
import SecondUserProfile from './SecondUserProfile'
import SecondUserEmptyScreen from './SecondUserEmptyScreen.jsx';

import { SecondUser } from '../context/SecondUserContext'; 

const SecondUserScreen = () => {

        // Getting Second User
    const {secondUser} = useContext(SecondUser);

 

    return (
        <div className="SecondUserScreeenContainer" >          

            {
            
                secondUser ?
             (
                <>
                <SecondUserProfile/>
                <UsersChatting/>
                <MessageSection/>
                </>

            ) : (<SecondUserEmptyScreen/>)

            

            }

        </div>

    )
}

export default SecondUserScreen;
