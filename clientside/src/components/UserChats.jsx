import React , {useContext , useEffect , useState} from 'react'

import { getUser , setConversation } from '../services/api';

import { SecondUser } from '../context/SecondUserContext';

import {AccountContext} from '../context/AccountProvider.jsx';


const UserChats = ({searchText}) => {


    const [usersData, setUsersData] = useState([]); 

    const {setSecondUser} = useContext(SecondUser);
    const {account}       = useContext(AccountContext);

    const callSecondUser = async (secondUser)=>{
        setSecondUser(secondUser)
        await setConversation({ senderId : account.googleId , receiverId : secondUser.googleId })
    }


    useEffect(() => {
        
        const fetchUser = async()=>{
                const users = await getUser();

                const filteredUsers = users.filter( (curEle)=>{ 

                    return curEle.name.toLowerCase().includes(searchText.toLowerCase())

                 } )

                setUsersData(filteredUsers);
        }   

        fetchUser();
    }, [ ])

    return (
        <div className="userChatsContainer" >


            {
                usersData.map( (curEle)=>{

                    return account.googleId !== curEle.googleId ?   (
                        <>
                        <div className="otherUserChat" key={curEle.googleId} onClick={ ()=>{ callSecondUser(curEle) } } >
                                <div className="otheruserImg">
                                    <img src={curEle.imageUrl} alt="" />
                                </div>
            
                                <div className="otherUserMesssage">
                                        <div className="otherUserName">
                                            {curEle.name}
                                        </div>
            
                                        <div className="otherUserMsg">
                                            Namaste
                                        </div>
                                </div>                    
                        </div>
                        </>
                    ) : ' '

             } )


            }

               
        </div>  

    )
}

export default UserChats;