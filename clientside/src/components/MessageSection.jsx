import React, { useState , useEffect , useContext} from 'react'
import { BsEmojiSmile } from 'react-icons/bs';
import { ImAttachment } from 'react-icons/im';
import { AiOutlineSend } from 'react-icons/ai';

import { addMessage , getConveration} from '../services/api';           

import { SecondUser } from '../context/SecondUserContext';
import { AccountContext } from '../context/AccountProvider';

const MessageSection = () => {

    // Geting Second User
    const {secondUser} = useContext(SecondUser);

    // Getting Current User
    const {account} = useContext(AccountContext);



    const [inputText , setInputText] = useState(); 

    const [conversation, setConversation] = useState({});
    
    const sendMessage = async ()=>{

        let message = {
            sender: account.googleId,
            conversationId : conversation._id,
            text : inputText
        }

    
        let messagesSend  = await addMessage(message);
        if(messagesSend){
        setInputText(' ')
        }
    };

   
    useEffect(()=>{

        const fetchConversation = async ()=>{

            const chats = await getConveration({senderId:account.googleId , receiverId:secondUser.googleId})
            setConversation(chats);
        };

        fetchConversation();

    } , [ ])




    return (
        <div className="MessageSectionDiv" >

            <div className="iconsDiv">

                <BsEmojiSmile/>
                <ImAttachment/>

            </div>

            <div className="inputMessageDiv">
                <input type="text" value={inputText}  onChange={ (e)=>{ setInputText(e.target.value) } }  />
            </div>

            <div className="sendMessageDiv">
                <AiOutlineSend onClick={ sendMessage } />
            </div>

        </div>
    )
}

export default MessageSection;
