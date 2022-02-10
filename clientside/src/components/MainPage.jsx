import React,{useContext} from 'react'
import ChatBox from './ChatBox';
import LoginPage from './LoginPage';
import { AccountContext } from '../context/AccountProvider';


const MainPage = () => {

    const {account} = useContext(AccountContext)
  

    return (
        <div className="appContainer" >
            
            {
                account ? <ChatBox/> : <LoginPage/>
            }

        </div>
    )
}

export default MainPage
