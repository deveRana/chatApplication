import React from 'react'
import UserScreen from './UserScreen';
import SecondUserScreen from './SecondUserScreen';


const ChatBox = () => {
    return (
        <div className="chatBoxContainer" >
           <UserScreen/>
           <SecondUserScreen/>
        </div>
    )
}

export default ChatBox
