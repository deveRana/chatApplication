import React,{useEffect , useContext , useState} from 'react'

import { AccountContext } from '../context/AccountProvider';
import { SecondUser } from '../context/SecondUserContext';

import { getMessages , getConveration } from '../services/api';

const UsersChatting = () => {


    const {account} = useContext(AccountContext)
    const {secondUser} = useContext(SecondUser)

    const [conversation , setConversation] = useState({})

    const [messages , setMessages] = useState([]);

    useEffect(()=>{

        const fetchConversation = async ()=>{

            const chats = await getConveration({senderId:account.googleId , receiverId:secondUser.googleId})
            setConversation(chats);
        };

        fetchConversation();

    } , [ ])

    useEffect( ()=>{

        const fetchMessages = async ()=>{

            const msg = await getMessages(conversation._id);
            setMessages(msg)
        };

        fetchMessages();

    } )


    return (
        <div className="UserChattingDiv">

                    {
                       
                        messages.length > 0 && messages.map( (curEle)=>{

                            return (
                                <>
                                { 
                                   curEle.senderId === account.googleId ? 

                                    <div className="chat me">
                                    <span className="name"> {account.name} </span>
                                    <p className="msg"> {curEle.text} </p>
                                    <span className="msgTime"> 11:30 </span>
                                    </div>

                                     : 
                                    <div className="chat you">
                                    <span className="name"> {secondUser.name} </span>
                                    <p className="msg">  {curEle.text} </p>
                                    <span className="msgTime"> 11:30 </span>
                                    </div>
                                    
                                }
                                </>
                            )

                            

                        } )
                            
                    }

                                                                
                                                                                     
                    
        </div>
    )
}

export default UsersChatting;
